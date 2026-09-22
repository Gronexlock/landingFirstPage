# Paso 6: Despliegue en la Nube (Hosting)

> ← [Anterior: Dominio .cl](./05_dominio_cl.md) | [Siguiente: Conectar Dominio →](./07_conectar_dominio.md)

---

## 🎯 Objetivo de este paso

Subir tu página web a la nube para que cualquier persona en el mundo pueda visitarla. Usaremos **Netlify** como plataforma principal (gratuita y muy fácil de usar).

---

## 6.1 Comparativa de opciones de hosting

| Plataforma | Precio | Dificultad | Dominio propio | Ideal para |
|------------|--------|------------|----------------|------------|
| **Netlify** ⭐ | Gratis | Fácil | ✅ Sí | Páginas estáticas |
| **GitHub Pages** | Gratis | Media | ✅ Sí | Proyectos en GitHub |
| **Vercel** | Gratis | Fácil | ✅ Sí | Next.js y estáticas |
| **Render** | Gratis | Media | ✅ Sí | Apps más complejas |
| **Hostinger** | Desde $2/mes | Fácil | ✅ Sí | Con cPanel |

> ✅ **Recomendación:** Usa **Netlify** — es gratuito, rápido, tiene HTTPS automático y se conecta fácilmente con GitHub.

---

## 6.2 Opción A: Despliegue con Netlify (RECOMENDADO)

### Método 1: Arrastrar y soltar (más fácil, sin Git)

1. Ve a https://app.netlify.com
2. Inicia sesión con tu cuenta de GitHub o email
3. En la pantalla principal, busca la sección **"Deploy manually"**
4. **Arrastra toda tu carpeta del proyecto** al área indicada
5. ¡Listo! Netlify te dará una URL como `https://nombre-aleatorio.netlify.app`

### Método 2: Desde GitHub (RECOMENDADO para actualizaciones futuras)

#### Paso 1: Sube tu código a GitHub

```bash
# En la carpeta de tu proyecto
git init
git add .
git commit -m "Primera versión de la página web"
git branch -M main
git remote add origin https://github.com/tu-usuario/tu-repositorio.git
git push -u origin main
```

#### Paso 2: Conectar GitHub con Netlify

1. Ve a https://app.netlify.com
2. Haz clic en **"Add new site"** → **"Import an existing project"**
3. Selecciona **"Deploy with GitHub"**
4. Autoriza a Netlify a acceder a tu cuenta de GitHub
5. Selecciona el repositorio de tu página web
6. Configuración de build:
   - **Branch:** `main`
   - **Build command:** (dejar vacío para sitios estáticos)
   - **Publish directory:** `.` (punto = raíz del proyecto)
7. Haz clic en **"Deploy site"**

#### Paso 3: Configuración del proyecto estático en Netlify

Crea un archivo `netlify.toml` en la raíz de tu proyecto:

```toml
# netlify.toml
[build]
  publish = "."

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
    [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

---

## 6.3 Opción B: Despliegue con GitHub Pages

### Paso 1: Crear repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre del repositorio: `tu-usuario.github.io` (para página principal) o cualquier nombre
3. Selecciona **"Public"**
4. Haz clic en **"Create repository"**

### Paso 2: Subir el código

```bash
git init
git add .
git commit -m "Página web inicial"
git branch -M main
git remote add origin https://github.com/tu-usuario/tu-usuario.github.io.git
git push -u origin main
```

### Paso 3: Activar GitHub Pages

1. Ve al repositorio en GitHub
2. Haz clic en **"Settings"** → **"Pages"**
3. En **"Source"**, selecciona: `Deploy from a branch`
4. Branch: `main` / Folder: `/ (root)`
5. Haz clic en **"Save"**
6. Tu página estará en: `https://tu-usuario.github.io`

---

## 6.4 Opción C: Despliegue con Vercel

```bash
# Instalar CLI de Vercel
npm install -g vercel

# En la carpeta del proyecto
vercel

# Seguir las instrucciones del asistente
# Cuando pregunte "Which scope?", selecciona tu cuenta
# "Link to existing project?" → No
# "In which directory is your code located?" → ./
# ¡Listo! Te dará una URL de Vercel
```

---

## 6.5 Actualizar la página después de cambios

### Con Netlify + GitHub (automático):

```bash
# Haz tus cambios en el código
git add .
git commit -m "Actualización: [describe el cambio]"
git push
# Netlify detecta el push y actualiza automáticamente en ~1 minuto
```

### Con Netlify Drag & Drop (manual):

1. Ve a https://app.netlify.com → tu sitio
2. Ve a la pestaña **"Deploys"**
3. Arrastra la carpeta actualizada al área de deploys

---

## 6.6 Verificar el despliegue

Una vez desplegada, verifica:

1. **URL de prueba:** Abre la URL de Netlify/Vercel/GitHub Pages
2. **Carga correcta:** Que aparezcan imágenes, estilos y JavaScript
3. **WhatsApp funciona:** Que el botón abra WhatsApp correctamente
4. **Responsive:** Prueba en móvil y desktop
5. **Velocidad:** Usa https://pagespeed.web.dev para medir el rendimiento

---

## 6.7 Estructura de archivos para el despliegue

Asegúrate de que tu proyecto tenga esta estructura antes de subir:

```
mi-pagina-web/
├── index.html          ← OBLIGATORIO (página principal)
├── netlify.toml        ← Configuración de Netlify
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── images/
│   ├── logo.png
│   ├── hero-bg.jpg
│   └── favicon.ico
└── README.md
```

> ⚠️ **Importante:** El archivo principal DEBE llamarse `index.html` para que el servidor lo sirva automáticamente.

---

## 6.8 Checklist de despliegue

- [ ] Repositorio creado en GitHub con el código
- [ ] Sitio creado en Netlify/Vercel/GitHub Pages
- [ ] URL de producción funcionando correctamente
- [ ] Imágenes, estilos y JS cargando sin errores
- [ ] Botón de WhatsApp funcional en la versión online
- [ ] Probado en móvil (iPhone y Android si es posible)
- [ ] Sin errores en la consola del navegador (F12)
- [ ] Velocidad de carga aceptable (>70 en PageSpeed)

---

> ← [Anterior: Dominio .cl](./05_dominio_cl.md) | [Siguiente: Conectar Dominio →](./07_conectar_dominio.md)
