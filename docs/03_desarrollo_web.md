# Paso 3: Desarrollo de la Página Web

> ← [Anterior: Diseño y Contenido](./02_diseno_y_contenido.md) | [Siguiente: Enlace WhatsApp →](./04_whatsapp_link.md)

---

## 🎯 Objetivo de este paso

Escribir el código HTML, CSS y JavaScript de la página de presentación usando la estructura y contenido definidos en el paso anterior.

---

## 3.1 Estructura base del archivo `index.html`

Crea el archivo `index.html` con esta base:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- SEO: Título y descripción -->
  <title>Tu Empresa | Servicios de [tipo] en Chile</title>
  <meta name="description" content="Descripción de 150-160 caracteres sobre tu empresa y servicios. Incluye palabras clave relevantes.">
  
  <!-- Favicon -->
  <link rel="icon" type="image/png" href="./images/favicon.ico">
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
  
  <!-- Estilos propios -->
  <link rel="stylesheet" href="./css/styles.css">
</head>
<body>

  <!-- ========== NAVEGACIÓN ========== -->
  <nav class="navbar" id="navbar">
    <div class="container">
      <a href="#inicio" class="logo">
        <img src="./images/logo.png" alt="Logo Tu Empresa" height="50">
      </a>
      <ul class="nav-links" id="nav-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#nosotros">Nosotros</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#contacto" class="btn-nav-whatsapp">Contacto</a></li>
      </ul>
      <button class="hamburger" id="hamburger" aria-label="Menú">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  <!-- ========== HERO ========== -->
  <section class="hero" id="inicio">
    <div class="hero-overlay"></div>
    <div class="container hero-content">
      <h1 class="hero-title">Tu Titular Principal Aquí</h1>
      <p class="hero-subtitle">Subtítulo con tu propuesta de valor en dos líneas máximo.</p>
      <a href="https://wa.me/56912345678?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios"
         class="btn-whatsapp"
         target="_blank"
         rel="noopener noreferrer"
         id="whatsapp-hero">
        <span class="whatsapp-icon">💬</span>
        Contáctanos por WhatsApp
      </a>
    </div>
  </section>

  <!-- ========== QUIÉNES SOMOS ========== -->
  <section class="about" id="nosotros">
    <div class="container">
      <div class="about-grid">
        <div class="about-text">
          <span class="section-tag">Quiénes somos</span>
          <h2>Transformamos ideas en soluciones digitales</h2>
          <p>Descripción de tu empresa en 2-3 párrafos cortos. Menciona tu historia, misión y lo que te diferencia de la competencia.</p>
          <div class="about-values">
            <div class="value-item">
              <span class="value-icon">✅</span>
              <span>Valor o diferenciador 1</span>
            </div>
            <div class="value-item">
              <span class="value-icon">✅</span>
              <span>Valor o diferenciador 2</span>
            </div>
            <div class="value-item">
              <span class="value-icon">✅</span>
              <span>Valor o diferenciador 3</span>
            </div>
          </div>
        </div>
        <div class="about-image">
          <img src="./images/about.jpg" alt="Equipo de Tu Empresa" loading="lazy">
        </div>
      </div>
    </div>
  </section>

  <!-- ========== SERVICIOS ========== -->
  <section class="services" id="servicios">
    <div class="container">
      <span class="section-tag">Lo que hacemos</span>
      <h2 class="section-title">Nuestros Servicios</h2>
      <p class="section-subtitle">Todo lo que necesitas para crecer digitalmente</p>
      <div class="services-grid">
        
        <div class="service-card">
          <div class="service-icon">🎯</div>
          <h3>Servicio 1</h3>
          <p>Descripción breve del servicio en una o dos líneas que explique el beneficio principal.</p>
        </div>
        
        <div class="service-card">
          <div class="service-icon">💻</div>
          <h3>Servicio 2</h3>
          <p>Descripción breve del servicio en una o dos líneas que explique el beneficio principal.</p>
        </div>
        
        <div class="service-card">
          <div class="service-icon">📱</div>
          <h3>Servicio 3</h3>
          <p>Descripción breve del servicio en una o dos líneas que explique el beneficio principal.</p>
        </div>

      </div>
    </div>
  </section>

  <!-- ========== CONTACTO / CTA ========== -->
  <section class="cta" id="contacto">
    <div class="container cta-content">
      <h2>¿Listo para comenzar?</h2>
      <p>Escríbenos ahora y recibe una asesoría sin costo.</p>
      <a href="https://wa.me/56912345678?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios"
         class="btn-whatsapp btn-whatsapp-large"
         target="_blank"
         rel="noopener noreferrer"
         id="whatsapp-cta">
        <span class="whatsapp-icon">💬</span>
        Escríbenos por WhatsApp
      </a>
      <p class="cta-phone">O llámanos al <strong>+56 9 1234 5678</strong></p>
    </div>
  </section>

  <!-- ========== FOOTER ========== -->
  <footer class="footer">
    <div class="container footer-content">
      <div class="footer-brand">
        <img src="./images/logo.png" alt="Logo Tu Empresa" height="40">
        <p>© 2024 Tu Empresa. Todos los derechos reservados.</p>
      </div>
      <div class="footer-links">
        <a href="#inicio">Inicio</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#servicios">Servicios</a>
        <a href="#contacto">Contacto</a>
      </div>
    </div>
  </footer>

  <!-- JavaScript -->
  <script src="./js/main.js"></script>
</body>
</html>
```

---

## 3.2 Estilos CSS (`css/styles.css`)

```css
/* ===============================
   VARIABLES Y RESET
   =============================== */
:root {
  --color-primario:   #1A1A2E;
  --color-secundario: #16213E;
  --color-acento:     #0F3460;
  --color-destacado:  #25D366;  /* Verde WhatsApp */
  --color-cta:        #E94560;
  --color-texto:      #FFFFFF;
  --color-texto-dark: #333333;
  --color-fondo:      #F8F9FA;
  --color-gris:       #6C757D;
  --fuente-titulo:    'Montserrat', sans-serif;
  --fuente-cuerpo:    'Open Sans', sans-serif;
  --radio-borde:      12px;
  --sombra:           0 10px 30px rgba(0,0,0,0.15);
  --transicion:       all 0.3s ease;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  font-family: var(--fuente-cuerpo);
  color: var(--color-texto-dark);
  background-color: var(--color-fondo);
  line-height: 1.7;
}

/* ===============================
   UTILIDADES
   =============================== */
.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

.section-tag {
  display: inline-block;
  background: rgba(233,69,96,0.1);
  color: var(--color-cta);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 4px 14px;
  border-radius: 20px;
  margin-bottom: 12px;
}

.section-title {
  font-family: var(--fuente-titulo);
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 700;
  color: var(--color-primario);
  margin-bottom: 16px;
}

.section-subtitle {
  color: var(--color-gris);
  font-size: 1.1rem;
  margin-bottom: 48px;
}

/* ===============================
   NAVEGACIÓN
   =============================== */
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  padding: 16px 0;
  background: transparent;
  transition: var(--transicion);
}

.navbar.scrolled {
  background: var(--color-primario);
  padding: 10px 0;
  box-shadow: var(--sombra);
}

.navbar .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo img { filter: brightness(10); }

.nav-links {
  list-style: none;
  display: flex;
  gap: 32px;
}

.nav-links a {
  color: rgba(255,255,255,0.85);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: var(--transicion);
}

.nav-links a:hover { color: var(--color-destacado); }

.btn-nav-whatsapp {
  background: var(--color-destacado) !important;
  color: white !important;
  padding: 8px 20px;
  border-radius: 25px;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
}

.hamburger span {
  width: 24px;
  height: 2px;
  background: white;
  border-radius: 2px;
  transition: var(--transicion);
}

/* ===============================
   HERO
   =============================== */
.hero {
  min-height: 100vh;
  background: linear-gradient(135deg, var(--color-primario) 0%, var(--color-acento) 100%);
  background-image: url('../images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  position: relative;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(26,26,46,0.9) 0%, rgba(15,52,96,0.8) 100%);
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 100px 0 60px;
}

.hero-title {
  font-family: var(--fuente-titulo);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  color: white;
  line-height: 1.2;
  margin-bottom: 24px;
}

.hero-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  color: rgba(255,255,255,0.8);
  max-width: 600px;
  margin: 0 auto 40px;
}

/* ===============================
   BOTÓN WHATSAPP
   =============================== */
.btn-whatsapp {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--color-destacado);
  color: white;
  text-decoration: none;
  font-family: var(--fuente-titulo);
  font-weight: 700;
  font-size: 1rem;
  padding: 16px 36px;
  border-radius: 50px;
  box-shadow: 0 8px 25px rgba(37,211,102,0.4);
  transition: var(--transicion);
}

.btn-whatsapp:hover {
  background: #1da851;
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(37,211,102,0.5);
}

.btn-whatsapp-large {
  font-size: 1.2rem;
  padding: 20px 48px;
}

.whatsapp-icon { font-size: 1.3em; }

/* ===============================
   SECCIÓN NOSOTROS
   =============================== */
.about {
  padding: 100px 0;
  background: white;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

.about-text h2 {
  font-family: var(--fuente-titulo);
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 700;
  color: var(--color-primario);
  margin-bottom: 20px;
}

.about-text p {
  color: var(--color-gris);
  margin-bottom: 24px;
}

.about-values {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
}

.value-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
  color: var(--color-texto-dark);
}

.value-icon { font-size: 1.2rem; }

.about-image img {
  width: 100%;
  border-radius: var(--radio-borde);
  box-shadow: var(--sombra);
}

/* ===============================
   SERVICIOS
   =============================== */
.services {
  padding: 100px 0;
  background: var(--color-fondo);
  text-align: center;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  margin-top: 48px;
}

.service-card {
  background: white;
  border-radius: var(--radio-borde);
  padding: 40px 32px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: var(--transicion);
  text-align: center;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--sombra);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.service-card h3 {
  font-family: var(--fuente-titulo);
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--color-primario);
  margin-bottom: 12px;
}

.service-card p { color: var(--color-gris); }

/* ===============================
   SECCIÓN CTA (CONTACTO)
   =============================== */
.cta {
  padding: 100px 0;
  background: linear-gradient(135deg, var(--color-primario), var(--color-acento));
  text-align: center;
}

.cta-content h2 {
  font-family: var(--fuente-titulo);
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 700;
  color: white;
  margin-bottom: 16px;
}

.cta-content p {
  color: rgba(255,255,255,0.8);
  font-size: 1.1rem;
  margin-bottom: 40px;
}

.cta-phone {
  margin-top: 20px !important;
  font-size: 1rem !important;
}

.cta-phone strong { color: var(--color-destacado); }

/* ===============================
   FOOTER
   =============================== */
.footer {
  background: #0a0a1a;
  padding: 40px 0;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
}

.footer-brand p {
  color: rgba(255,255,255,0.5);
  font-size: 0.875rem;
  margin-top: 8px;
}

.footer-brand img { filter: brightness(10) opacity(0.7); }

.footer-links {
  display: flex;
  gap: 24px;
}

.footer-links a {
  color: rgba(255,255,255,0.5);
  text-decoration: none;
  font-size: 0.875rem;
  transition: var(--transicion);
}

.footer-links a:hover { color: var(--color-destacado); }

/* ===============================
   RESPONSIVE (MÓVIL)
   =============================== */
@media (max-width: 768px) {
  .nav-links {
    display: none;
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: var(--color-primario);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    z-index: 999;
  }

  .nav-links.active { display: flex; }
  .hamburger { display: flex; z-index: 1000; }

  .about-grid { grid-template-columns: 1fr; }
  .about-image { order: -1; }

  .footer-content { flex-direction: column; text-align: center; }
  .footer-links { flex-wrap: wrap; justify-content: center; }
}
```

---

## 3.3 JavaScript (`js/main.js`)

```javascript
// ===============================
// NAVBAR: cambio al hacer scroll
// ===============================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===============================
// MENÚ HAMBURGUESA (MÓVIL)
// ===============================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// ===============================
// ANIMACIONES AL HACER SCROLL
// ===============================
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Agregar clase CSS inicial y observar elementos
document.querySelectorAll('.service-card, .about-grid, .cta-content').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Cuando el elemento es visible, animarlo
document.querySelectorAll('.service-card, .about-grid, .cta-content').forEach(el => {
  el.addEventListener('transitionend', () => {
    if (el.classList.contains('visible')) {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }
  });
});

// Manejar el evento del observer
const visibilityObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.service-card, .about-grid, .cta-content').forEach(el => {
  visibilityObserver.observe(el);
});
```

---

## 3.4 Visualizar la página localmente

1. Abre VS Code en la carpeta del proyecto
2. Instala la extensión **Live Server**
3. Haz clic derecho en `index.html` → **"Open with Live Server"**
4. La página se abrirá en `http://127.0.0.1:5500`

---

## 3.5 Checklist de desarrollo

- [ ] `index.html` creado con todas las secciones
- [ ] `css/styles.css` creado con todos los estilos
- [ ] `js/main.js` creado con las interacciones
- [ ] Logo colocado en `images/logo.png`
- [ ] Imagen hero colocada en `images/hero-bg.jpg`
- [ ] Página visualizada correctamente en el navegador
- [ ] Probada en modo móvil (DevTools → Ctrl+Shift+M)

---

> ← [Anterior: Diseño y Contenido](./02_diseno_y_contenido.md) | [Siguiente: Enlace WhatsApp →](./04_whatsapp_link.md)
