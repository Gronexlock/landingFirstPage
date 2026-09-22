# Paso 8: Certificado SSL y Seguridad

> ← [Anterior: Conectar Dominio](./07_conectar_dominio.md) | [Siguiente: Mantenimiento y SEO →](./09_mantenimiento.md)

---

## 🎯 Objetivo de este paso

Activar HTTPS en tu página para que el navegador muestre el candado 🔒 de seguridad, protegiendo a tus visitantes y mejorando tu posicionamiento en Google.

---

## 8.1 ¿Qué es SSL/HTTPS y por qué importa?

| Sin SSL (HTTP) | Con SSL (HTTPS) |
|----------------|-----------------|
| ⚠️ "No es seguro" en Chrome | 🔒 Candado verde de confianza |
| Datos enviados en texto plano | Datos cifrados |
| Google penaliza en búsquedas | Google premia en SEO |
| Los usuarios desconfían | Los usuarios confían |
| WhatsApp y redes sociales bloquean | Compatible con todas las plataformas |

---

## 8.2 SSL Automático en Netlify (gratuito con Let's Encrypt)

Netlify provee SSL automático y gratuito. Una vez que tu dominio esté conectado:

### Verificar el estado del SSL en Netlify:

1. Ve a https://app.netlify.com → tu sitio
2. Haz clic en **"Domain settings"**
3. Desplázate hasta la sección **"HTTPS"**
4. Deberías ver: `Your site has HTTPS enabled ✅`

### Si el SSL no se activa automáticamente:

1. En la sección **"HTTPS"**, haz clic en **"Verify DNS configuration"**
2. Si los DNS están correctos, haz clic en **"Provision certificate"**
3. Espera entre 10 y 30 minutos
4. Si persiste el problema, contacta a Netlify Support

---

## 8.3 Forzar HTTPS (redirección automática)

Asegúrate de que cualquier visita a `http://tuempresa.cl` se redirija a `https://tuempresa.cl`:

### En Netlify (recomendado):

En tu archivo `netlify.toml`:

```toml
# netlify.toml
[[redirects]]
  from = "http://tuempresa.cl/*"
  to = "https://tuempresa.cl/:splat"
  status = 301
  force = true

[[redirects]]
  from = "http://www.tuempresa.cl/*"
  to = "https://www.tuempresa.cl/:splat"
  status = 301
  force = true
```

### En GitHub Pages:

1. Ve a Settings → Pages
2. Activa la opción **"Enforce HTTPS"** ✅

---

## 8.4 Verificar el certificado SSL

### Desde el navegador:

1. Ve a `https://tuempresa.cl`
2. Haz clic en el candado 🔒 en la barra de direcciones
3. Verifica:
   - **Conexión segura**
   - **Certificado válido** (emitido por Let's Encrypt o similar)
   - **Fecha de vencimiento** (se renueva automáticamente en Netlify)

### Herramientas de verificación SSL:

| Herramienta | URL |
|-------------|-----|
| SSL Labs | https://www.ssllabs.com/ssltest/ |
| Why No Padlock | https://www.whynopadlock.com |
| SSL Checker | https://www.sslshopper.com/ssl-checker.html |

---

## 8.5 Buenas prácticas de seguridad web

### Headers de seguridad

Ya incluimos estos en el `netlify.toml` del Paso 6, pero aquí la explicación:

```toml
[[headers]]
  for = "/*"
    [headers.values]
    # Evita que tu página sea cargada en un iframe (clickjacking)
    X-Frame-Options = "DENY"
    
    # Protección básica contra XSS
    X-XSS-Protection = "1; mode=block"
    
    # Evita que el navegador "adivine" el tipo de contenido
    X-Content-Type-Options = "nosniff"
    
    # Controla la información de referencia al hacer clic en links
    Referrer-Policy = "strict-origin-when-cross-origin"
    
    # Content Security Policy (avanzado, opcional)
    # Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline'"
```

---

### Protección del número de WhatsApp

Para no exponer tu número directamente en el código fuente visible:

```javascript
// js/main.js
// En lugar de hardcodear el número, usa una función ofuscada
function getWhatsAppLink(msg) {
  const parts = ['56', '9', '1234', '5678']; // Dividido para dificultar scraping
  const num = parts.join('');
  const encoded = encodeURIComponent(msg);
  return `https://wa.me/${num}?text=${encoded}`;
}

document.querySelectorAll('.btn-whatsapp').forEach(btn => {
  btn.href = getWhatsAppLink('Hola, me interesa conocer más sobre sus servicios');
});
```

> ℹ️ Esto no es seguridad perfecta, pero dificulta el scraping automatizado de tu número.

---

### No incluir datos sensibles en el código

❌ **Nunca hagas esto:**
```html
<!-- Esto queda visible para cualquiera -->
<script>
  const API_KEY = "AIzaSyD-ejemplo-clave-secreta"; // ❌
  const PASSWORD = "mi_contraseña"; // ❌
</script>
```

✅ **Correcto para páginas estáticas:** Solo incluye datos públicos (números de teléfono, emails de contacto).

---

## 8.6 Privacidad y GDPR/Ley 19.628 Chile

Si tu página recopila cualquier tipo de dato (formularios, cookies de análisis), debes:

### 1. Aviso de cookies (si usas Google Analytics u otras):

```html
<!-- Banner de cookies (antes del </body>) -->
<div id="cookie-banner" class="cookie-banner">
  <p>🍪 Usamos cookies para mejorar tu experiencia. 
     <a href="/politica-privacidad.html">Más información</a></p>
  <button onclick="acceptCookies()" class="btn-accept-cookies">Aceptar</button>
</div>
```

```css
.cookie-banner {
  position: fixed;
  bottom: 0; left: 0; right: 0;
  background: rgba(26,26,46,0.95);
  color: white;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  z-index: 10000;
  backdrop-filter: blur(10px);
}

.btn-accept-cookies {
  background: #25D366;
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  cursor: pointer;
  white-space: nowrap;
}
```

```javascript
function acceptCookies() {
  localStorage.setItem('cookies_accepted', 'true');
  document.getElementById('cookie-banner').style.display = 'none';
}

// Ocultar si ya aceptó
if (localStorage.getItem('cookies_accepted')) {
  document.getElementById('cookie-banner').style.display = 'none';
}
```

### 2. Para páginas simples sin formularios:

Una landing page estática sin formularios ni cookies no requiere política de privacidad obligatoria, pero es buena práctica incluirla.

---

## 8.7 Checklist de seguridad

- [ ] HTTPS activo (candado visible en el navegador)
- [ ] Redirección de HTTP a HTTPS configurada
- [ ] Headers de seguridad en `netlify.toml`
- [ ] Sin datos sensibles en el código fuente
- [ ] Verificado con SSL Labs (calificación A o A+)
- [ ] Sin errores de "contenido mixto" (mix HTTP/HTTPS)
- [ ] Aviso de cookies (si aplica)

---

> ← [Anterior: Conectar Dominio](./07_conectar_dominio.md) | [Siguiente: Mantenimiento y SEO →](./09_mantenimiento.md)
