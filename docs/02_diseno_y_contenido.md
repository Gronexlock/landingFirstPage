# Paso 2: Diseño y Contenido

> ← [Anterior: Planificación](./01_planificacion.md) | [Siguiente: Desarrollo Web →](./03_desarrollo_web.md)

---

## 🎯 Objetivo de este paso

Definir la apariencia visual, paleta de colores, tipografía y el contenido textual de cada sección de tu página **antes** de escribir código.

---

## 2.1 Define tu identidad visual

### Paleta de colores

Elige **2 o 3 colores** que representen tu marca. Herramientas gratuitas para elegir paletas:

| Herramienta | URL |
|-------------|-----|
| Coolors | https://coolors.co |
| Adobe Color | https://color.adobe.com |
| ColorHunt | https://colorhunt.co |

**Ejemplo de paleta para una marca profesional:**

```css
/* Paleta sugerida */
--color-primario:   #1A1A2E;  /* Azul oscuro profundo */
--color-secundario: #16213E;  /* Azul marino */
--color-acento:     #0F3460;  /* Azul corporativo */
--color-destacado:  #E94560;  /* Rojo/rosa para CTAs */
--color-texto:      #FFFFFF;  /* Blanco para texto */
--color-fondo:      #F5F5F5;  /* Gris claro para fondo */
```

> 💡 El color de acento (`--color-destacado`) es el que usarás en el **botón de WhatsApp** y llamados a la acción.

---

### Tipografía

Usa **Google Fonts** (gratuito): https://fonts.google.com

Combinaciones recomendadas:

| Uso | Fuente | Estilo |
|-----|--------|--------|
| Títulos | `Montserrat` | Bold 700 |
| Subtítulos | `Montserrat` | SemiBold 600 |
| Cuerpo de texto | `Open Sans` | Regular 400 |

```html
<!-- Agregar en el <head> de tu HTML -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
```

---

## 2.2 Prepara el contenido de cada sección

### Sección 1: HERO (Encabezado principal)

Completa esta plantilla:

```
Titular principal (máx. 10 palabras):
"________________________________________"

Subtítulo / propuesta de valor (máx. 20 palabras):
"________________________________________"

Texto del botón WhatsApp:
"Contáctanos por WhatsApp" / "Habla con nosotros" / "Escríbenos ahora"
```

**Ejemplos de titulares efectivos:**
- "Soluciones digitales que hacen crecer tu negocio"
- "Tu aliado tecnológico en Chile"
- "Diseño web profesional para PyMEs chilenas"

---

### Sección 2: QUIÉNES SOMOS

```
Párrafo corto (máx. 3 oraciones):
"________________________________________
________________________________________
________________________________________"

3 valores o diferenciadores:
1. ________________________________
2. ________________________________
3. ________________________________
```

---

### Sección 3: SERVICIOS

Para cada servicio, define:

```
Servicio 1:
  - Nombre: ____________________________
  - Descripción (1-2 líneas): ___________
  - Ícono sugerido: 🎯 / 💻 / 📱 / ⚡

Servicio 2:
  - Nombre: ____________________________
  - Descripción: _______________________
  - Ícono: _____________________________

Servicio 3:
  - Nombre: ____________________________
  - Descripción: _______________________
  - Ícono: _____________________________
```

> 💡 Usa emojis como íconos si no tienes acceso a una biblioteca de íconos. También puedes usar [Font Awesome](https://fontawesome.com) (gratuito).

---

### Sección 4: CONTACTO / LLAMADO A LA ACCIÓN

```
Titular de la sección:
"¿Listo para comenzar?" / "Hablemos de tu proyecto"

Subtítulo:
"Escríbenos ahora y recibe una asesoría gratuita"

Número WhatsApp (con código de país Chile):
+56 9 XXXX XXXX

Mensaje predefinido de WhatsApp (opcional):
"Hola, me interesa conocer más sobre sus servicios"
```

---

## 2.3 Wireframe básico (boceto)

Así debería verse tu página en desktop y móvil:

```
DESKTOP (1200px)                    MOBILE (375px)
┌──────────────────────────┐        ┌────────────┐
│ [LOGO]        [MENÚ]     │        │ [LOGO] ☰   │
│                          │        ├────────────┤
│   TITULAR PRINCIPAL      │        │ TITULAR    │
│   Subtítulo de valor     │        │ Subtítulo  │
│   [Botón WhatsApp 💬]    │        │ [WhatsApp] │
├──────────────────────────┤        ├────────────┤
│   QUIÉNES SOMOS          │        │ QUIÉNES    │
│   Texto | [Imagen]       │        │ SOMOS      │
├──────────────────────────┤        ├────────────┤
│  [Serv1] [Serv2] [Serv3] │        │ [Serv1]    │
│                          │        │ [Serv2]    │
│                          │        │ [Serv3]    │
├──────────────────────────┤        ├────────────┤
│   CONTACTO               │        │ CONTACTO   │
│   [Botón WhatsApp grande]│        │ [WhatsApp] │
├──────────────────────────┤        ├────────────┤
│ Footer: © 2024 Mi Marca  │        │ Footer     │
└──────────────────────────┘        └────────────┘
```

---

## 2.4 Recursos de imágenes gratuitas

Si no tienes imágenes propias:

| Sitio | URL | Tipo |
|-------|-----|------|
| Unsplash | https://unsplash.com | Fotos HD gratuitas |
| Pexels | https://pexels.com | Fotos y videos |
| Undraw | https://undraw.co | Ilustraciones SVG |
| Flaticon | https://flaticon.com | Íconos |

---

## 2.5 Checklist de diseño y contenido

- [ ] Paleta de colores definida (al menos 3 colores)
- [ ] Tipografías seleccionadas en Google Fonts
- [ ] Texto del titular y subtítulo del HERO escrito
- [ ] Descripción "Quiénes somos" redactada
- [ ] Mínimo 3 servicios con nombre y descripción
- [ ] Número de WhatsApp confirmado con código +56
- [ ] Mensaje predefinido de WhatsApp redactado
- [ ] Logo disponible en formato PNG (fondo transparente)
- [ ] Imagen de fondo para el HERO seleccionada

---

> ← [Anterior: Planificación](./01_planificacion.md) | [Siguiente: Desarrollo Web →](./03_desarrollo_web.md)
