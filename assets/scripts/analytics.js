/**
 * SafeSignal Landing Page — Privacy Consent Mode, GA4 & Experiment Telemetry (TS03 / US26)
 * Cumple con la Ley N.º 29733 (Consent Mode en 'denied' por defecto hasta aceptación explícita).
 */
(function () {
  const CONSENT_KEY = 'securanet_analytics_consent';
  const CLIENT_ID_KEY = 'securanet_client_id';
  const API_EVENTS_URL = 'https://backend-api-21zu.onrender.com/api/v1/experiments/events';

  function getClientId() {
    let cid = localStorage.getItem(CLIENT_ID_KEY);
    if (!cid) {
      cid = 'lp_' + Math.random().toString(36).slice(2, 11) + Date.now().toString(36);
      localStorage.setItem(CLIENT_ID_KEY, cid);
    }
    return cid;
  }

  function hasConsent() {
    return localStorage.getItem(CONSENT_KEY) === 'granted';
  }

  function updateConsent(granted) {
    localStorage.setItem(CONSENT_KEY, granted ? 'granted' : 'denied');
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: granted ? 'granted' : 'denied',
      });
    }
    const banner = document.getElementById('privacyConsentBanner');
    if (banner) banner.style.display = 'none';
  }

  function trackLandingEvent(name, params) {
    if (!hasConsent()) return;

    if (typeof window.gtag === 'function') {
      window.gtag('event', name, {
        ...params,
        platform: 'landing',
      });
    }

    fetch(API_EVENTS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Client-Id': getClientId(),
      },
      body: JSON.stringify({
        name,
        platform: 'landing',
        appVersion: '1.0.0',
        clientId: getClientId(),
        params: params || {},
      }),
      keepalive: true,
    }).catch(() => {
      // Silencioso en caso de fallo de red para no afectar la navegación
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('privacyConsentBanner');
    const acceptBtn = document.getElementById('acceptAnalyticsBtn');
    const denyBtn = document.getElementById('denyAnalyticsBtn');
    const reopenLink = document.getElementById('openConsentSettingsLink');

    const storedConsent = localStorage.getItem(CONSENT_KEY);
    if (!storedConsent && banner) {
      banner.style.display = 'flex';
    } else if (storedConsent === 'granted') {
      updateConsent(true);
    }

    if (acceptBtn) acceptBtn.addEventListener('click', () => updateConsent(true));
    if (denyBtn) denyBtn.addEventListener('click', () => updateConsent(false));
    if (reopenLink && banner) {
      reopenLink.addEventListener('click', (e) => {
        e.preventDefault();
        banner.style.display = 'flex';
      });
    }

    document.querySelectorAll('[data-cta]').forEach((el) => {
      el.addEventListener('click', () => {
        trackLandingEvent('landing_cta_clicked', {
          cta_location: el.getAttribute('data-cta'),
          plan: el.getAttribute('data-plan') || 'free',
        });
      });
    });

    // Legal & SaaS Terms Modal
    const legalModal = document.getElementById('legalModal');
    const closeLegalBtn = document.getElementById('closeLegalModalBtn');
    document.querySelectorAll('[data-open-legal]').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        if (legalModal) legalModal.classList.add('active');
      });
    });
    if (closeLegalBtn && legalModal) {
      closeLegalBtn.addEventListener('click', () => legalModal.classList.remove('active'));
      legalModal.addEventListener('click', (e) => {
        if (e.target === legalModal) legalModal.classList.remove('active');
      });
    }
  });
})();
