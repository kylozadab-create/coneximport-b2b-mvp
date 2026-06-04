# 🚀 Coneximport B2B - MVP Landing Page

**Plataforma digital B2B diseñada para conectar Micro y Pequeñas Empresas (MYPES) con proveedores e importadores confiables.**

## 📋 Descripción del Proyecto

Coneximport B2B es una solución innovadora que facilita:
- ✅ Acceso a lotes mínimos de compra flexibles (MOQ bajo)
- ✅ Conexión con proveedores verificados y confiables
- ✅ Simplificación de trámites de importación
- ✅ Seguridad garantizada en transacciones B2B

## 🎯 Características Principales

### 1. **Hero Section**
- Propuesta de valor clara y persuasiva
- Call-to-Action (CTA) principal: "Registrar mi MYPE"
- Diseño visual moderno con gradientes

### 2. **Sección de Beneficios (Dolor vs Solución)**
- Presenta 3 problemas clave que resuelve Coneximport
- Alternativas de solución visual
- Tarjetas interactivas con hover effects

### 3. **Módulo "¿Cómo Funciona?"**
- Timeline interactivo con 4 pasos
- Guía visual: Registro → Cotización → Conexión → Entrega
- Animaciones suaves

### 4. **Directorio de Categorías**
- Grid visual de 6 sectores principales
- Iconos emoji para identificación rápida
- Hover effects con gradientes

### 5. **Sección de Confianza**
- Proveedores verificados
- Transacciones seguras
- Soporte 24/7

### 6. **Formulario de Registro**
- Captura de datos esenciales (nombre, email, empresa, sector)
- Validación en tiempo real
- Mensajes de confirmación

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con CSS Variables
- **JavaScript (Vanilla)** - Interactividad sin dependencias
- **Responsive Design** - Mobile-first approach

## 📁 Estructura del Proyecto

```
coneximport-b2b-mvp/
├── index.html              # Página principal
├── css/
│   ├── styles.css         # Estilos principales
│   └── responsive.css     # Estilos responsive
├── js/
│   └── main.js            # Funcionalidad JavaScript
├── assets/                # (Carpeta para imágenes/videos futuros)
│   ├── images/
│   ├── icons/
│   └── videos/
├── README.md              # Este archivo
├── .gitignore            # Archivos a ignorar
└── package.json          # Metadatos del proyecto (opcional)
```

## 🚀 Cómo Usar

### 1. Clonar el Repositorio
```bash
git clone https://github.com/kylozadab-create/coneximport-b2b-mvp.git
cd coneximport-b2b-mvp
```

### 2. Abrir en el Navegador
```bash
# Opción 1: Abrir directamente
open index.html

# Opción 2: Con Live Server (VS Code)
# Instalar extensión "Live Server" y hacer clic derecho > Open with Live Server

# Opción 3: Con Python (local server)
python -m http.server 8000
# Luego abrir http://localhost:8000
```

## 📱 Responsividad

La landing page es completamente responsive:
- ✅ Desktop (1024px+)
- ✅ Tablets (768px - 1023px)
- ✅ Móviles (480px - 767px)
- ✅ Móviles pequeños (< 480px)

## 🎨 Colores y Diseño

### Paleta de Colores
```css
--primary-color: #1e40af (Azul profesional)
--secondary-color: #0f172a (Azul oscuro)
--accent-color: #f97316 (Naranja dinámico)
--success-color: #22c55e (Verde éxito)
--danger-color: #ef4444 (Rojo error)
```

### Tipografía
- **Font Family**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Sizes**: Escalas desde 14px (móvil) a 40px (desktop)

## 🔧 Funcionalidades JavaScript

### 1. Menú Móvil
- Toggle automático en dispositivos pequeños
- Cierre al hacer clic en enlaces
- Responsive al cambiar tamaño

### 2. Validación de Formulario
- Valida nombre (mín. 3 caracteres)
- Valida email (formato correcto)
- Valida empresa (mín. 3 caracteres)
- Requiere aceptar términos

### 3. Animaciones
- Fade-in en scroll para tarjetas
- Transiciones suaves en botones
- Mensajes de notificación con animación

### 4. Rastreo de Eventos
- Logging de clics en CTA
- Logging de envíos de formulario
- Preparado para Google Analytics

## 📊 SEO Optimizado

- ✅ Meta tags descriptivos
- ✅ Títulos semánticos (H1, H2, H3)
- ✅ Estructura HTML5 válida
- ✅ Alt text en imágenes (listo para agregar)

## 🔐 Seguridad

- ✅ Validación en cliente
- ✅ Sin exposición de información sensible
- ✅ Preparado para HTTPS
- ✅ Compatible con GDPR (aviso de privacidad)

## 🚀 Próximos Pasos (Roadmap)

- [ ] Integración con backend (Node.js / Python)
- [ ] Base de datos (MongoDB / PostgreSQL)
- [ ] Sistema de autenticación
- [ ] Dashboard para MYPES
- [ ] Integración de pasarelas de pago (Stripe, PayPal, MercadoPago)
- [ ] Sistema de chat en tiempo real
- [ ] Analytics avanzado
- [ ] Internacionalización (i18n)
- [ ] PWA (Progressive Web App)

## 📝 Variables de Entorno

Para configuración futura, agrega un archivo `.env`:
```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_STRIPE_KEY=pk_test_...
REACT_APP_PAYPAL_CLIENT_ID=...
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/amazing-feature`)
3. Commit tus cambios (`git commit -m 'Add amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver archivo `LICENSE` para más detalles.

## 👥 Autor

**Desarrollado por:** Coneximport B2B Team
**Contacto:** [tu-email@coneximport.com]
**LinkedIn:** [Tu perfil LinkedIn]

## 📞 Soporte

Para soporte, contacta a través de:
- 📧 Email: support@coneximport.com
- 💬 Chat: [Link al chat de soporte]
- 📱 WhatsApp: [Número de WhatsApp]

## 🎓 Recursos Útiles

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)
- [Web.dev](https://web.dev/)

## 🏆 Logros y Metas

- ✅ Landing page totalmente funcional
- ✅ Diseño responsive
- ✅ Formulario con validación
- 🎯 2,000+ registros el primer mes
- 🎯 Conversión > 5%

---

**Última actualización:** 04 de Junio, 2026
**Versión:** 1.0.0
**Estado:** ✅ Producción

¡Gracias por usar Coneximport B2B! 🙌
