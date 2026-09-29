# SafeSignal — Landing Page Oficial

[![Deploy to GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-brightgreen)](https://dejamice.github.io/landing-page/)
[![Organization](https://img.shields.io/badge/Organization-DEJAMICE-blue)](https://github.com/DEJAMICE)
[![Course](https://img.shields.io/badge/UPC-Dise%C3%B1o%20de%20Experimentos%20de%20Software-red)](#)

SafeSignal es una plataforma integral orientada a la seguridad ciudadana inteligente, diseñada para acompañar y proteger a estudiantes universitarios y trabajadores nocturnos durante sus desplazamientos en Lima Metropolitana. La plataforma combina inteligencia artificial, telemetría de rutas, reportes colaborativos y sensores IoT (botones de pánico y pulseras inteligentes) para emitir alertas tempranas y coordinar auxilio inmediato.

---

## Despliegue en Vivo

El sitio web público y optimizado para evaluación se encuentra disponible en: **[https://dejamice.github.io/Landing-Page/](https://dejamice.github.io/Landing-Page/)**

---

## Arquitectura del Ecosistema (Polyrepo)

El proyecto SafeSignal se encuentra estructurado bajo una arquitectura de múltiples repositorios especializados dentro de la organización **[DEJAMICE](https://github.com/DEJAMICE)**:

| Repositorio | Tech Stack | Rol en la Solución |
| :--- | :--- | :--- |
| **`landing-page`** *(Este repo)* | HTML5, CSS3 Moderno, JavaScript Vanilla | Presentación comercial, portal informativo y evidencia de despliegue en GitHub Pages (Evidencia 5.2.2). |
| **`backend-api`** | C# / ASP.NET Core 9.0, OpenAPI / Swagger | API RESTful para autenticación JWT, gestión de usuarios, despacho de alertas SOS y telemetría de rutas. |
| **`frontend-web`** | Vue 3, Vite, PrimeVue, Axios | Aplicación web para centros de monitoreo, mapas de incidentes en tiempo real y administración de red de apoyo. |
| **`mobile-app`** | Mobile Nativo / React Native | Aplicación móvil para emisión de auxilio SOS en tiempo real, mapas y vinculación Bluetooth con IoT. |

---

## Equipo de Desarrollo — Organización DEJAMICE

Proyecto desarrollado para el curso **Diseño de Experimentos de Software** (Universidad Peruana de Ciencias Aplicadas - UPC):

* **Persona 1:** Esteban Eduardo Chavez Bardales — *Mobile App Native & Cap. 5 Lead*
* **Persona 2:** Mateo Paolo Salazar Miranda — *Backend Architecture & Auth/IoT Lead*
* **Persona 3:** Mathias Andree Cárdenas Huamán — *Backend SOS Service, Integración HTTP Frontend & Landing Page (Evidencia 5.2.2 y 5.2.4)*
* **Persona 4:** Frontend Web Lead (Módulo A: Auth & Perfiles - Vue 3 + PrimeVue)
* **Persona 5:** Frontend Web Lead (Módulo B: Rutas, Mapas & Alertas - Vue 3 + PrimeVue)

---

## Características Principales de la Landing Page

1. **Simulación Interactiva de Alerta SOS**: Incorpora un modal en tiempo real que simula el protocolo de disparo de emergencia, geolocalización GPS y cuenta regresiva de despacho.
2. **Planes de Servicio SaaS & SLA**: Presentación de modelos de suscripción (Ciudadano Gratuito, SafeSignal Pro y Municipal/Campus) vinculados al **Acuerdo de Nivel de Servicio (SLA 99.9%)** desarrollado en la sección 5.2.4 del informe.
3. **Monitoreo de Zonas Seguras**: Visualización del widget móvil con métricas de tiempo de auxilio y estado de conectividad con Serenazgo.
4. **Diseño Responsivo y Accesible**: Adaptado para navegación óptima en dispositivos móviles, tablets y computadoras de escritorio.

---

## Metodología de GitFlow y Convenciones

En cumplimiento con los estándares de ingeniería de software del curso, este repositorio aplica la metodología **GitFlow**:

* `main`: Rama de producción y fuente para el despliegue automático en GitHub Pages.
* `develop`: Rama base de integración y pruebas de nuevas funcionalidades.
* `feature/cardenas`: Rama de trabajo individual para el desarrollo y ajustes de la Landing Page.

### Convención de Commits (Conventional Commits)
* `feat:` Nuevas secciones, componentes interactivos o estilos.
* `fix:` Correcciones de maquetación, rutas o enlaces rotos.
* `docs:` Actualización de documentación, README e informes.
* `style:` Ajustes estéticos sin alteración de funcionalidad lógica.

---

## Ejecución Local

Para visualizar la Landing Page en un entorno local:

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/DEJAMICE/landing-page.git
   cd landing-page
   ```
2. Abrir con cualquier servidor estático (ej. Live Server de VS Code, Python o Node):
   ```bash
   # Opción con Python:
   python -m http.server 8080
   # Abrir en el navegador: http://localhost:8080
   ```
