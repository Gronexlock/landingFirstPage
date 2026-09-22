# Paso 1: Planificación del Proyecto

> ← [Volver al índice](./README.md) | [Siguiente: Diseño y Contenido →](./02_diseno_y_contenido.md)

---

## 🎯 Objetivo de este paso

Antes de escribir una sola línea de código, necesitas tener claro **qué vas a construir**, **para quién** y **con qué herramientas**. Una buena planificación evita retrabajo y ahorra tiempo.

---

## 1.1 Define el propósito de tu página

Responde estas preguntas antes de empezar:

| Pregunta | Ejemplo de respuesta |
|----------|---------------------|
| ¿Qué es tu negocio/marca? | Servicios de consultoría digital |
| ¿A quién va dirigida la página? | Empresas PyME en Chile |
| ¿Qué acción quieres que tome el visitante? | Contactarte por WhatsApp |
| ¿Qué información clave debe mostrar? | Servicios, beneficios, testimonios, contacto |
| ¿Tienes logo e imagen de marca? | Sí / No (se puede crear) |

---

## 1.2 Tipo de página a construir

Para una **página de presentación** (también llamada *landing page*), la estructura recomendada es:

```
┌─────────────────────────┐
│  HERO (encabezado)      │  → Logo, titular, botón WhatsApp
│  QUIÉNES SOMOS          │  → Descripción breve
│  SERVICIOS / PROPUESTA  │  → Lo que ofreces
│  BENEFICIOS             │  → Por qué elegirte
│  TESTIMONIOS (opcional) │  → Confianza social
│  CONTACTO               │  → Botón WhatsApp + datos
│  PIE DE PÁGINA          │  → Redes, legal
└─────────────────────────┘
```

> ✅ Este tipo de página es **perfecta** para alojar en la nube de forma gratuita.

---

## 1.3 Herramientas necesarias (instalar antes de comenzar)

### 🖥️ Software a instalar en tu computador

#### 1. Visual Studio Code (editor de código)
- **Descarga:** https://code.visualstudio.com/
- **Extensiones recomendadas:**
  - `Live Server` (ver la página en tiempo real)
  - `Prettier` (formateo automático de código)
  - `Auto Rename Tag` (útil para HTML)

#### 2. Git (control de versiones)
- **Descarga:** https://git-scm.com/
- Verificar instalación:
  ```bash
  git --version
  ```

#### 3. Node.js (opcional, pero útil)
- **Descarga:** https://nodejs.org/ (versión LTS)
- Verificar instalación:
  ```bash
  node --version
  npm --version
  ```

---

## 1.4 Cuentas a crear (todas gratuitas)

| Plataforma | URL | Para qué sirve |
|------------|-----|----------------|
| **GitHub** | https://github.com | Guardar y publicar código |
| **Netlify** | https://netlify.com | Hosting gratuito en la nube |
| **NIC Chile** | https://www.nic.cl | Registrar el dominio `.cl` |

> 💡 **Consejo:** Usa el mismo email para todas las cuentas para mayor organización.

---

## 1.5 Estructura de carpetas del proyecto

Crea esta estructura en tu computador antes de empezar a codificar:

```
mi-pagina-web/
├── index.html          ← Página principal
├── css/
│   └── styles.css      ← Estilos visuales
├── js/
│   └── main.js         ← Comportamiento e interacciones
├── images/
│   ├── logo.png        ← Tu logo
│   ├── hero-bg.jpg     ← Imagen de fondo del encabezado
│   └── favicon.ico     ← Ícono del navegador
└── README.md           ← Descripción del proyecto
```

### Comando para crear la estructura rápidamente (PowerShell/Terminal):

```powershell
mkdir mi-pagina-web
cd mi-pagina-web
mkdir css, js, images
New-Item index.html, css/styles.css, js/main.js, README.md
```

---

## 1.6 Checklist de planificación

Antes de pasar al siguiente paso, confirma que tienes:

- [ ] Definido el propósito y público objetivo de la página
- [ ] Preparado el texto de presentación (quiénes somos, servicios)
- [ ] Logo listo (o saber que necesitas crearlo)
- [ ] VS Code instalado y configurado
- [ ] Git instalado
- [ ] Cuenta en GitHub creada
- [ ] Cuenta en Netlify creada
- [ ] Número de WhatsApp Business listo para usar
- [ ] Estructura de carpetas creada en tu PC

---

> ← [Volver al índice](./README.md) | [Siguiente: Diseño y Contenido →](./02_diseno_y_contenido.md)
