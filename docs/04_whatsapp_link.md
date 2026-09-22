# Paso 4: Integración del Enlace de WhatsApp

> ← [Anterior: Desarrollo Web](./03_desarrollo_web.md) | [Siguiente: Dominio .cl →](./05_dominio_cl.md)

---

## 🎯 Objetivo de este paso

Configurar correctamente el enlace de WhatsApp para que, al hacer clic, abra una conversación directa con tu número, con un mensaje predefinido y sin necesidad de guardar el contacto.

---

## 4.1 Cómo funciona el enlace de WhatsApp

WhatsApp ofrece una URL especial que permite abrir una conversación directa:

```
https://wa.me/NUMERO?text=MENSAJE
```

### Componentes del enlace:

| Componente | Descripción | Ejemplo |
|------------|-------------|---------|
| `wa.me` | Dominio de WhatsApp Click-to-Chat | Siempre igual |
| `NUMERO` | Número con código de país, sin `+` ni espacios | `56912345678` |
| `?text=` | (Opcional) Mensaje predefinido codificado | Texto URL-encoded |

---

## 4.2 Construcción del enlace para Chile

### Tu número de WhatsApp en Chile:

```
País Chile: +56
Número ejemplo: 9 1234 5678

Formato para wa.me: 56912345678
```

> ⚠️ **Importante:** El número NO debe incluir el signo `+`, espacios ni guiones.

### Mensaje predefinido (URL-encoded):

El texto del mensaje debe estar **codificado** para URL. Los caracteres especiales se reemplazan:

| Carácter | Código URL |
|----------|-----------|
| Espacio | `%20` o `+` |
| `,` | `%2C` |
| `á`, `é`, `í` | `%C3%A1`, `%C3%A9`, `%C3%AD` |
| `¿` | `%C2%BF` |
| `ó`, `ú` | `%C3%B3`, `%C3%BA` |

### Herramienta para codificar mensajes:

Usa esta web: https://www.urlencoder.org/

**Ejemplo:**
- Texto original: `Hola, me interesa conocer más sobre sus servicios`
- Texto codificado: `Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios`

---

## 4.3 Enlace final completo

```html
<!-- Enlace básico (sin mensaje predefinido) -->
<a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer">
  WhatsApp
</a>

<!-- Enlace completo con mensaje predefinido (RECOMENDADO) -->
<a href="https://wa.me/56912345678?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios"
   target="_blank"
   rel="noopener noreferrer"
   class="btn-whatsapp">
  💬 Contáctanos por WhatsApp
</a>
```

### Atributos importantes:

| Atributo | Por qué usarlo |
|----------|----------------|
| `target="_blank"` | Abre en nueva pestaña (no abandona tu web) |
| `rel="noopener noreferrer"` | Seguridad al abrir en nueva ventana |
| `id="whatsapp-btn"` | Para análisis de clics y tracking |

---

## 4.4 Botón flotante de WhatsApp (siempre visible)

Agrega este botón flotante que siempre aparece en la esquina inferior derecha:

### En `index.html` (antes de `</body>`):

```html
<!-- Botón flotante WhatsApp -->
<a href="https://wa.me/56912345678?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios"
   class="whatsapp-float"
   target="_blank"
   rel="noopener noreferrer"
   id="whatsapp-float"
   title="Chatea con nosotros por WhatsApp">
  <svg viewBox="0 0 24 24" fill="currentColor" width="30" height="30">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
  <span class="float-tooltip">¡Chatea con nosotros!</span>
</a>
```

### En `css/styles.css` (al final del archivo):

```css
/* ===============================
   BOTÓN FLOTANTE WHATSAPP
   =============================== */
.whatsapp-float {
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 9999;
  background: #25D366;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(37,211,102,0.5);
  text-decoration: none;
  transition: all 0.3s ease;
  animation: pulse-whatsapp 2s infinite;
}

.whatsapp-float:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 30px rgba(37,211,102,0.7);
}

.float-tooltip {
  position: absolute;
  right: 70px;
  background: #333;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.float-tooltip::after {
  content: '';
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  border: 5px solid transparent;
  border-left-color: #333;
}

.whatsapp-float:hover .float-tooltip {
  opacity: 1;
}

@keyframes pulse-whatsapp {
  0%, 100% { box-shadow: 0 4px 20px rgba(37,211,102,0.5); }
  50% { box-shadow: 0 4px 40px rgba(37,211,102,0.8), 0 0 0 8px rgba(37,211,102,0.1); }
}
```

---

## 4.5 Variantes del mensaje predefinido

Adapta el mensaje según el contexto de cada botón:

```javascript
// En js/main.js - genera URLs dinámicas según la sección
const mensajes = {
  hero: "Hola%2C%20vine%20desde%20la%20p%C3%A1gina%20web.%20Me%20interesa%20conocer%20sus%20servicios.",
  servicios: "Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20el%20servicio%20de%20",
  flotante: "Hola%2C%20necesito%20ayuda%20con%20"
};

const numero = "56912345678";

// Asignar mensajes específicos a cada botón
document.getElementById('whatsapp-hero').href = 
  `https://wa.me/${numero}?text=${mensajes.hero}`;

document.getElementById('whatsapp-float').href = 
  `https://wa.me/${numero}?text=${mensajes.flotante}`;
```

---

## 4.6 Verificar que el enlace funcione

1. Abre la página con Live Server
2. Haz clic en el botón de WhatsApp
3. Debe abrir WhatsApp Web o la app móvil
4. Verifica que:
   - [ ] El número es correcto
   - [ ] El mensaje predefinido aparece
   - [ ] Se abre en una nueva pestaña
   - [ ] El botón flotante es visible en todas las secciones

---

## 4.7 Checklist de WhatsApp

- [ ] Número configurado con código de país `56` (sin `+`)
- [ ] Mensaje predefinido codificado en URL
- [ ] Botón en sección HERO funcional
- [ ] Botón en sección CONTACTO/CTA funcional
- [ ] Botón flotante visible y animado
- [ ] Probado en desktop y móvil
- [ ] Se abre WhatsApp correctamente al hacer clic

---

> ← [Anterior: Desarrollo Web](./03_desarrollo_web.md) | [Siguiente: Dominio .cl →](./05_dominio_cl.md)
