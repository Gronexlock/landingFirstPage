# Paso 9: Mantenimiento, Actualizaciones y SEO Básico

> ← [Anterior: SSL y Seguridad](./08_ssl_y_seguridad.md) | [Siguiente: Checklist Final →](./10_checklist_final.md)

---

## 🎯 Objetivo de este paso

Mantener tu página actualizada, optimizada para buscadores (SEO) y en buen funcionamiento a largo plazo.

---

## 9.1 SEO básico para tu landing page

### ¿Qué es el SEO?

SEO (Search Engine Optimization) es el conjunto de técnicas para que Google y otros buscadores encuentren y muestren tu página en los primeros resultados.

---

### SEO On-Page (en el código)

Verifica que tu `index.html` tenga estos elementos:

```html
<head>
  <!-- 1. Título de la página (máx. 60 caracteres) -->
  <title>Tu Empresa | Servicios de [tipo] en Chile | tuempresa.cl</title>
  
  <!-- 2. Meta descripción (máx. 160 caracteres) -->
  <meta name="description" content="[Tu empresa] ofrece [servicios] para [público objetivo] en Chile. Contáctanos por WhatsApp y obtén una asesoría gratuita.">
  
  <!-- 3. Palabras clave (menos relevante hoy, pero incluir) -->
  <meta name="keywords" content="servicio, chile, empresa, [palabras clave de tu negocio]">
  
  <!-- 4. Autor -->
  <meta name="author" content="Tu Empresa">
  
  <!-- 5. Robots (permitir indexación) -->
  <meta name="robots" content="index, follow">
  
  <!-- 6. Canonical (URL preferida) -->
  <link rel="canonical" href="https://www.tuempresa.cl">
  
  <!-- 7. Open Graph (para compartir en redes sociales) -->
  <meta property="og:title" content="Tu Empresa | Servicios en Chile">
  <meta property="og:description" content="Descripción corta de tu empresa y servicios.">
  <meta property="og:image" content="https://www.tuempresa.cl/images/og-image.jpg">
  <meta property="og:url" content="https://www.tuempresa.cl">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="es_CL">
  
  <!-- 8. Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Tu Empresa | Servicios en Chile">
  <meta name="twitter:description" content="Descripción corta de tu empresa.">
  <meta name="twitter:image" content="https://www.tuempresa.cl/images/og-image.jpg">
</head>
```

---

### Jerarquía de encabezados (H1, H2, H3)

```html
<!-- Solo UN H1 por página -->
<h1>Titular principal de tu página</h1>

<!-- Múltiples H2 para secciones -->
<h2>Quiénes somos</h2>
<h2>Nuestros servicios</h2>
<h2>¿Listo para comenzar?</h2>

<!-- H3 para subsecciones -->
<h3>Nombre del Servicio 1</h3>
```

---

### Imágenes optimizadas para SEO

```html
<!-- Siempre incluir el atributo alt descriptivo -->
<img src="./images/logo.png" 
     alt="Logo de Tu Empresa - Servicios digitales en Chile" 
     width="200" 
     height="50"
     loading="lazy">

<img src="./images/hero-bg.jpg" 
     alt="Equipo de profesionales de Tu Empresa trabajando" 
     width="1920" 
     height="1080">
```

---

## 9.2 Google Analytics (medir visitas)

### Paso 1: Crear cuenta en Google Analytics

1. Ve a https://analytics.google.com
2. Haz clic en **"Empezar a medir"**
3. Crea una cuenta y una propiedad con el nombre de tu web
4. Agrega los datos del stream de datos: selecciona **"Web"**
5. Ingresa tu URL: `https://www.tuempresa.cl`
6. Copia el **ID de medición** (formato: `G-XXXXXXXXXX`)

### Paso 2: Agregar el código a tu página

```html
<!-- Agrega en el <head> de index.html -->
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Paso 3: Rastrear clics en WhatsApp

```javascript
// En js/main.js - rastrear cuántas veces hacen clic en WhatsApp
document.querySelectorAll('.btn-whatsapp, .whatsapp-float').forEach(btn => {
  btn.addEventListener('click', () => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: btn.id || 'whatsapp_button'
      });
    }
  });
});
```

---

## 9.3 Google Search Console (aparecer en Google)

1. Ve a https://search.google.com/search-console
2. Agrega tu propiedad: `https://www.tuempresa.cl`
3. Verifica la propiedad (Netlify lo hace fácil con un meta tag)
4. Envía tu sitemap (ver siguiente sección)

---

## 9.4 Crear un Sitemap

El sitemap ayuda a Google a encontrar todas las páginas de tu sitio.

Crea el archivo `sitemap.xml` en la raíz de tu proyecto:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.tuempresa.cl/</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

Crea también el archivo `robots.txt` en la raíz:

```
User-agent: *
Allow: /
Sitemap: https://www.tuempresa.cl/sitemap.xml
```

---

## 9.5 Optimizar la velocidad de la página

### Optimizar imágenes

```bash
# Usar herramientas online:
# https://squoosh.app      ← Compresión con preview
# https://tinypng.com     ← PNG/JPG hasta 80% menos tamaño
# https://convertio.co    ← Convertir a WebP (más eficiente)
```

Usa formato **WebP** para imágenes:

```html
<!-- WebP con fallback a JPG -->
<picture>
  <source srcset="./images/hero-bg.webp" type="image/webp">
  <img src="./images/hero-bg.jpg" alt="Descripción" loading="lazy">
</picture>
```

---

### Precargar recursos críticos

```html
<!-- En el <head>, antes de otros recursos -->
<link rel="preload" href="./css/styles.css" as="style">
<link rel="preload" href="./images/hero-bg.webp" as="image">
<link rel="preload" href="https://fonts.googleapis.com/..." as="style">
```

---

## 9.6 Calendario de mantenimiento

| Frecuencia | Tarea |
|------------|-------|
| **Mensual** | Revisar que la página cargue correctamente |
| **Mensual** | Actualizar contenido si hay novedades |
| **Mensual** | Revisar métricas en Google Analytics |
| **Trimestral** | Verificar que las imágenes y links funcionen |
| **Trimestral** | Correr PageSpeed Insights y optimizar |
| **Anual** | Renovar dominio `.cl` en NIC Chile |
| **Anual** | Revisar y actualizar año en el footer |

---

## 9.7 Comandos útiles para actualizar la página

```bash
# Ver estado de cambios
git status

# Guardar cambios
git add .
git commit -m "Actualización: [descripción del cambio]"

# Subir a GitHub (Netlify se actualiza automáticamente)
git push origin main

# Ver historial de cambios
git log --oneline -10
```

---

## 9.8 Checklist de mantenimiento y SEO

- [ ] Título y meta descripción optimizados para SEO
- [ ] Atributos `alt` en todas las imágenes
- [ ] Google Analytics configurado y recibiendo datos
- [ ] Google Search Console configurado
- [ ] Sitemap.xml enviado a Google
- [ ] Robots.txt creado
- [ ] Imágenes comprimidas y en formato WebP
- [ ] PageSpeed Insights > 80 en mobile y desktop
- [ ] Recordatorio para renovar dominio `.cl` agendado

---

> ← [Anterior: SSL y Seguridad](./08_ssl_y_seguridad.md) | [Siguiente: Checklist Final →](./10_checklist_final.md)
