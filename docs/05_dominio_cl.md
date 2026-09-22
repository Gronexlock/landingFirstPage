# Paso 5: Comprar y Configurar un Dominio .cl

> ← [Anterior: WhatsApp](./04_whatsapp_link.md) | [Siguiente: Despliegue en la Nube →](./06_despliegue_nube.md)

---

## 🎯 Objetivo de este paso

Registrar un dominio `.cl` a través de NIC Chile (el organismo oficial) para que tu página tenga una dirección profesional como `www.tuempresa.cl`.

---

## 5.1 ¿Qué es NIC Chile?

**NIC Chile** es el organismo oficial encargado de administrar los dominios `.cl` en Chile. Solo a través de ellos (o sus registradores autorizados) puedes registrar un dominio `.cl`.

- **Sitio oficial:** https://www.nic.cl
- **Soporte:** soporte@nic.cl

---

## 5.2 Paso a paso para comprar el dominio en NIC Chile

### Paso 1: Verificar disponibilidad del dominio

1. Ve a https://www.nic.cl
2. En la barra de búsqueda, escribe el nombre que quieres (ej: `tuempresa`)
3. El sistema te dirá si `.cl` está **disponible** o **no disponible**

> 💡 **Consejos para elegir el nombre:**
> - Que sea corto y fácil de recordar (máx. 15 caracteres)
> - Sin tildes ni caracteres especiales (ñ, á, etc. en la parte técnica)
> - Que coincida con el nombre de tu marca o empresa
> - Prueba variaciones si el nombre está tomado: `mituempresa`, `tuempresacl`, etc.

---

### Paso 2: Crear una cuenta en NIC Chile

1. Ve a https://www.nic.cl/registry/
2. Haz clic en **"Crear cuenta"** o **"Registrarse"**
3. Completa el formulario con:
   - RUT (para personas naturales o empresas chilenas)
   - Email válido
   - Datos de contacto

> ⚠️ Para registrar un dominio `.cl`, **necesitas RUT chileno** (personal o de empresa).

---

### Paso 3: Registrar el dominio

1. Una vez con sesión iniciada, busca el dominio nuevamente
2. Haz clic en **"Registrar"**
3. Elige el período de registro:

| Período | Costo estimado (2024) |
|---------|----------------------|
| 1 año | ~$14.000 – $18.000 CLP |
| 2 años | ~$26.000 – $32.000 CLP |

4. Completa los datos del titular del dominio
5. Procede al pago (tarjeta de crédito/débito, transferencia)

---

### Paso 4: Confirmar el registro

Recibirás un email de confirmación con:
- El dominio registrado
- Fecha de expiración
- Información de acceso para gestionar el dominio (panel DNS)

---

## 5.3 Alternativas a NIC Chile (registradores autorizados)

Si prefieres, puedes registrar tu dominio `.cl` a través de un registrador autorizado que ofrece una interfaz más amigable:

| Registrador | URL | Comentarios |
|-------------|-----|-------------|
| **Nic Solutions** | https://www.nicsolutions.cl | Registrador autorizado en Chile |
| **TuWeb.cl** | https://www.tuweb.cl | Dominio + hosting combinado |
| **Webmaker** | https://www.webmaker.cl | Opción popular en Chile |
| **GoDaddy** | https://www.godaddy.com | Internacional, acepta .cl |
| **Namecheap** | https://www.namecheap.com | Internacional, más económico |

> 💡 **Recomendación:** Para empezar, usa **NIC Chile directamente** para mayor control. Luego puedes transferir el dominio a otro registrador si lo necesitas.

---

## 5.4 Conceptos importantes de DNS

Una vez que tengas el dominio, necesitarás configurar los **servidores DNS** para apuntarlo a tu hosting. Aquí los conceptos básicos:

| Término | Descripción |
|---------|-------------|
| **DNS** | Sistema que traduce `tuempresa.cl` a una dirección IP |
| **Nameservers (NS)** | Servidores que controlan los DNS del dominio |
| **Registro A** | Apunta el dominio a una IP específica |
| **Registro CNAME** | Apunta un subdominio a otro dominio |
| **TTL** | Tiempo que los DNS tardan en propagarse (24-48 horas) |

---

## 5.5 Configurar los nameservers (preparación para el hosting)

Cuando configures Netlify o Vercel como hosting (Paso 6), te darán **nameservers** como estos:

```
Ejemplo Netlify:
dns1.p04.nsone.net
dns2.p04.nsone.net
dns3.p04.nsone.net
dns4.p04.nsone.net
```

Para configurarlos en NIC Chile:

1. Inicia sesión en https://www.nic.cl/registry/
2. Ve a **"Mis dominios"**
3. Selecciona tu dominio `.cl`
4. Busca la sección **"Servidores DNS"** o **"Nameservers"**
5. Reemplaza los nameservers actuales por los de tu hosting
6. Guarda los cambios

> ⏱️ **Propagación DNS:** Después de cambiar los nameservers, puede tomar entre **24 y 48 horas** para que los cambios se apliquen globalmente. Esto es normal.

---

## 5.6 Verificar la propagación del DNS

Usa estas herramientas para verificar si los cambios de DNS se han propagado:

| Herramienta | URL |
|-------------|-----|
| WhatsMyDNS | https://www.whatsmydns.net |
| DNS Checker | https://dnschecker.org |
| MXToolbox | https://mxtoolbox.com/SuperTool.aspx |

---

## 5.7 Checklist del dominio .cl

- [ ] Nombre de dominio elegido y verificada disponibilidad
- [ ] Cuenta creada en NIC Chile (con RUT)
- [ ] Dominio `.cl` registrado y pago realizado
- [ ] Email de confirmación recibido
- [ ] Acceso al panel de gestión DNS verificado
- [ ] Fecha de vencimiento anotada (para renovar a tiempo)

---

> ← [Anterior: WhatsApp](./04_whatsapp_link.md) | [Siguiente: Despliegue en la Nube →](./06_despliegue_nube.md)
