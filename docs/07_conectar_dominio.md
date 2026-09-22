# Paso 7: Conectar el Dominio .cl al Hosting

> ← [Anterior: Despliegue en la Nube](./06_despliegue_nube.md) | [Siguiente: SSL y Seguridad →](./08_ssl_y_seguridad.md)

---

## 🎯 Objetivo de este paso

Conectar tu dominio `tuempresa.cl` (comprado en NIC Chile) con tu hosting en Netlify para que la página se abra al visitar tu dominio propio.

---

## 7.1 ¿Cómo funciona la conexión?

```
Usuario escribe: www.tuempresa.cl
       ↓
   DNS de NIC Chile consulta los nameservers
       ↓
   Nameservers de Netlify responden
       ↓
   Se muestra tu página web en Netlify
```

Hay **dos métodos** para conectar el dominio. Te explicamos ambos:

| Método | Descripción | Cuándo usarlo |
|--------|-------------|---------------|
| **Método A: Nameservers** | Transferir control DNS completo a Netlify | ✅ Recomendado, más sencillo |
| **Método B: Registro A/CNAME** | Mantener DNS en NIC Chile y apuntar registros | Si necesitas mantener otros servicios en NIC Chile |

---

## 7.2 Método A: Cambiar Nameservers (RECOMENDADO)

### Paso 1: Agregar el dominio en Netlify

1. Ve a https://app.netlify.com
2. Entra a tu sitio desplegado
3. Ve a **"Domain settings"** → **"Add custom domain"**
4. Escribe tu dominio: `tuempresa.cl`
5. Haz clic en **"Verify"** y luego **"Add domain"**
6. Netlify te mostrará los **nameservers** asignados, algo como:

```
dns1.p04.nsone.net
dns2.p04.nsone.net
dns3.p04.nsone.net
dns4.p04.nsone.net
```

> 📋 **Copia estos nameservers**, los necesitarás en el siguiente paso.

---

### Paso 2: Cambiar los nameservers en NIC Chile

1. Inicia sesión en https://www.nic.cl/registry/
2. Ve a **"Mis dominios"**
3. Haz clic en tu dominio `tuempresa.cl`
4. Busca la sección **"Servidores DNS"** o **"Name Servers"**
5. Haz clic en **"Modificar"**
6. Reemplaza los nameservers actuales con los de Netlify:

```
Servidor 1: dns1.p04.nsone.net
Servidor 2: dns2.p04.nsone.net
Servidor 3: dns3.p04.nsone.net
Servidor 4: dns4.p04.nsone.net
```

7. Guarda los cambios
8. Espera **24-48 horas** para que los cambios se propaguen

---

### Paso 3: Agregar el subdominio www

En Netlify, después de agregar el dominio raíz, también agrega:

1. En **"Domain settings"**, haz clic en **"Add domain alias"**
2. Agrega `www.tuempresa.cl`
3. Netlify redirigirá automáticamente entre `tuempresa.cl` y `www.tuempresa.cl`

---

## 7.3 Método B: Registros A y CNAME (sin cambiar nameservers)

Usa este método si quieres mantener el control DNS en NIC Chile.

### Registros a configurar en NIC Chile:

| Tipo | Nombre | Valor | TTL |
|------|--------|-------|-----|
| `A` | `@` (raíz) | `75.2.60.5` | 3600 |
| `CNAME` | `www` | `apex-loadbalancer.netlify.com` | 3600 |

> ⚠️ Los valores IP de Netlify pueden cambiar. Consulta la documentación actualizada en: https://docs.netlify.com/domains-https/custom-domains/configure-external-dns/

### Cómo agregar registros DNS en NIC Chile:

1. Inicia sesión en https://www.nic.cl/registry/
2. Ve a **"Mis dominios"** → tu dominio
3. Busca **"Zona DNS"** o **"Registros DNS"**
4. Agrega los registros según la tabla anterior

---

## 7.4 Verificar la conexión

### Herramientas para verificar propagación:

```
# Verificar desde terminal (Windows PowerShell):
nslookup tuempresa.cl
nslookup www.tuempresa.cl

# Herramientas web:
https://www.whatsmydns.net/#A/tuempresa.cl
https://dnschecker.org/#A/tuempresa.cl
```

### Indicadores de éxito en Netlify:

Cuando la conexión esté lista, en **"Domain settings"** de Netlify verás:

- ✅ `tuempresa.cl` → **"Netlify DNS"** en verde
- ✅ `www.tuempresa.cl` → **"Netlify DNS"** en verde
- 🔒 SSL/TLS certificate → **"Your site has HTTPS enabled"**

---

## 7.5 Configurar GitHub Pages con dominio propio

Si usas GitHub Pages en lugar de Netlify:

### En GitHub:

1. Ve a tu repositorio → **"Settings"** → **"Pages"**
2. En **"Custom domain"**, escribe: `tuempresa.cl`
3. Haz clic en **"Save"**
4. GitHub creará automáticamente un archivo `CNAME` en tu repositorio

### En NIC Chile, agrega estos registros:

| Tipo | Nombre | Valor |
|------|--------|-------|
| `A` | `@` | `185.199.108.153` |
| `A` | `@` | `185.199.109.153` |
| `A` | `@` | `185.199.110.153` |
| `A` | `@` | `185.199.111.153` |
| `CNAME` | `www` | `tu-usuario.github.io` |

---

## 7.6 Configurar Vercel con dominio propio

Si usas Vercel:

1. Ve a https://vercel.com → tu proyecto
2. **"Settings"** → **"Domains"**
3. Agrega tu dominio: `tuempresa.cl`
4. Vercel te mostrará los registros DNS a configurar
5. Ve a NIC Chile y agrega esos registros

---

## 7.7 Solución de problemas comunes

| Problema | Causa probable | Solución |
|----------|---------------|----------|
| La página no carga | DNS no propagado | Esperar 24-48 horas |
| Error SSL | Dominio recién conectado | Esperar 10-30 minutos más |
| Solo carga HTTP, no HTTPS | SSL pendiente | Forzar HTTPS en Netlify settings |
| `www` no funciona | Falta registro CNAME | Agregar registro CNAME `www` |
| Error 404 | Publish directory incorrecto | Verificar configuración en Netlify |

---

## 7.8 Checklist de conexión del dominio

- [ ] Dominio agregado en Netlify/GitHub Pages/Vercel
- [ ] Nameservers o registros DNS actualizados en NIC Chile
- [ ] Subdominio `www` configurado
- [ ] Propagación DNS verificada (24-48 horas)
- [ ] `https://tuempresa.cl` carga tu página correctamente
- [ ] `https://www.tuempresa.cl` también funciona
- [ ] Redirección entre `www` y sin `www` funciona
- [ ] SSL activo (candado verde en el navegador)

---

> ← [Anterior: Despliegue en la Nube](./06_despliegue_nube.md) | [Siguiente: SSL y Seguridad →](./08_ssl_y_seguridad.md)
