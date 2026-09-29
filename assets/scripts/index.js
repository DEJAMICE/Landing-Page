/**
 * SafeSignal - Landing Page Interactive Scripts
 * Organización: DEJAMICE
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Smooth Scrolling for Navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 76;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Close mobile menu if open
        const navLinks = document.querySelector('.top-nav__links');
        if (navLinks && navLinks.classList.contains('mobile-open')) {
          navLinks.classList.remove('mobile-open');
        }
      }
    });
  });

  // 2. Mobile Menu Toggle
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.top-nav__links');
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });
  }

  // 3. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(other => other.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // 4. Interactive SOS Simulation Modal
  const modalOverlay = document.getElementById('sosModal');
  const openModalBtns = document.querySelectorAll('.btn-trigger-sos');
  const cancelBtn = document.getElementById('cancelSosBtn');
  const timerDisplay = document.getElementById('sosTimerCount');
  const statusBadge = document.getElementById('sosStatusBadge');
  let countdownTimer = null;
  let secondsLeft = 5;

  function resetSosModal() {
    clearInterval(countdownTimer);
    secondsLeft = 5;
    if (timerDisplay) timerDisplay.textContent = '5';
    if (statusBadge) {
      statusBadge.textContent = 'Emitiendo señal de auxilio...';
      statusBadge.className = 'badge badge--red pulse-danger';
    }
    if (cancelBtn) {
      cancelBtn.textContent = 'Cancelar Alerta (5s)';
      cancelBtn.style.display = 'inline-flex';
    }
  }

  function startCountdown() {
    resetSosModal();
    countdownTimer = setInterval(() => {
      secondsLeft--;
      if (timerDisplay) timerDisplay.textContent = secondsLeft;
      if (cancelBtn) cancelBtn.textContent = `Cancelar Alerta (${secondsLeft}s)`;

      if (secondsLeft <= 0) {
        clearInterval(countdownTimer);
        if (statusBadge) {
          statusBadge.textContent = '✅ Alerta confirmada por Central Serenazgo y 3 Contactos';
          statusBadge.className = 'badge badge--green';
        }
        if (cancelBtn) {
          cancelBtn.textContent = 'Cerrar Demostración';
        }
      }
    }, 1000);
  }

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (modalOverlay) {
        modalOverlay.classList.add('active');
        startCountdown();
      }
    });
  });

  if (cancelBtn) {
    cancelBtn.addEventListener('click', () => {
      clearInterval(countdownTimer);
      if (modalOverlay) modalOverlay.classList.remove('active');
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        clearInterval(countdownTimer);
        modalOverlay.classList.remove('active');
      }
    });
  }

  // 5. Dynamic Footer Year
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
