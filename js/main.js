// ============================================
// CONEXIMPORT B2B - JAVASCRIPT FUNCIONALIDAD
// ============================================

// ===== Variables Globales =====
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const registroForm = document.getElementById('registro-form');
const ctaMainBtn = document.getElementById('cta-main');

// ===== Menú Móvil Toggle =====
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
    });

    // Cerrar menú cuando se hace clic en un enlace
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.textContent = '☰';
        });
    });
}

// ===== Validación y Envío del Formulario =====
if (registroForm) {
    registroForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Obtener datos del formulario
        const formData = {
            nombre: document.getElementById('nombre').value.trim(),
            email: document.getElementById('email').value.trim(),
            empresa: document.getElementById('empresa').value.trim(),
            sector: document.getElementById('sector').value,
            timestamp: new Date().toISOString(),
            acceptedTerms: document.getElementById('terminos').checked
        };

        // Validaciones básicas
        if (!formData.nombre || formData.nombre.length < 3) {
            mostrarMensaje('Por favor ingresa un nombre válido (mínimo 3 caracteres)', 'error');
            return;
        }

        if (!validarEmail(formData.email)) {
            mostrarMensaje('Por favor ingresa un email válido', 'error');
            return;
        }

        if (!formData.empresa || formData.empresa.length < 3) {
            mostrarMensaje('Por favor ingresa el nombre de tu empresa (mínimo 3 caracteres)', 'error');
            return;
        }

        if (!formData.acceptedTerms) {
            mostrarMensaje('Debes aceptar los términos y condiciones', 'error');
            return;
        }

        // Simular envío del formulario
        await enviarFormulario(formData);
    });
}

// ===== Función para Validar Email =====
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// ===== Función para Enviar Formulario =====
async function enviarFormulario(datos) {
    try {
        // Mostrar estado de carga
        const btnSubmit = registroForm.querySelector('button[type="submit"]');
        const textoOriginal = btnSubmit.textContent;
        btnSubmit.disabled = true;
        btnSubmit.textContent = 'Enviando...';

        // Simular delay de red
        await new Promise(resolve => setTimeout(resolve, 1000));

        // En un proyecto real, aquí se enviaría a un servidor:
        // const response = await fetch('/api/registrar', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(datos)
        // });

        console.log('Datos de registro:', datos);

        // Mostrar mensaje de éxito
        mostrarMensaje('¡Registro exitoso! Te contactaremos pronto.', 'success');
        
        // Limpiar formulario
        registroForm.reset();

        // Restaurar botón
        btnSubmit.disabled = false;
        btnSubmit.textContent = textoOriginal;

    } catch (error) {
        console.error('Error al enviar formulario:', error);
        mostrarMensaje('Hubo un error. Por favor intenta de nuevo.', 'error');
        const btnSubmit = registroForm.querySelector('button[type="submit"]');
        btnSubmit.disabled = false;
    }
}

// ===== Función para Mostrar Mensajes =====
function mostrarMensaje(mensaje, tipo = 'info') {
    // Crear elemento para el mensaje
    const messageDiv = document.createElement('div');
    messageDiv.className = `mensaje mensaje-${tipo}`;
    messageDiv.textContent = mensaje;

    // Estilos inline para el mensaje
    messageDiv.style.cssText = `
        padding: 12px 16px;
        margin-bottom: 16px;
        border-radius: 8px;
        font-weight: 500;
        animation: slideIn 0.3s ease;
        text-align: center;
    `;

    if (tipo === 'success') {
        messageDiv.style.backgroundColor = '#dcfce7';
        messageDiv.style.color = '#166534';
        messageDiv.style.borderLeft = '4px solid #22c55e';
    } else if (tipo === 'error') {
        messageDiv.style.backgroundColor = '#fee2e2';
        messageDiv.style.color = '#991b1b';
        messageDiv.style.borderLeft = '4px solid #ef4444';
    } else {
        messageDiv.style.backgroundColor = '#dbeafe';
        messageDiv.style.color = '#1e40af';
        messageDiv.style.borderLeft = '4px solid #1e40af';
    }

    // Insertar antes del formulario
    registroForm.parentNode.insertBefore(messageDiv, registroForm);

    // Eliminar mensaje después de 5 segundos
    setTimeout(() => {
        messageDiv.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => messageDiv.remove(), 300);
    }, 5000);
}

// ===== Animación Smooth Scroll (fallback para navegadores antiguos) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            // El navegador ya maneja scroll behavior, pero esto es un fallback
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ===== Botón CTA Principal =====
if (ctaMainBtn) {
    ctaMainBtn.addEventListener('click', () => {
        const contactoSection = document.getElementById('contacto');
        if (contactoSection) {
            contactoSection.scrollIntoView({ behavior: 'smooth' });
            document.getElementById('nombre').focus();
        }
    });
}

// ===== Animación de Scroll para Elementos =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Aplicar animación a tarjetas
document.querySelectorAll('.beneficio-card, .categoria-card, .confianza-item').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ===== Agregar estilos de animación =====
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-10px);
        }
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    /* Animación para hover en botones */
    .btn {
        position: relative;
        overflow: hidden;
    }

    .btn::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: translate(-50%, -50%);
        transition: width 0.6s, height 0.6s;
    }

    .btn:active::before {
        width: 300px;
        height: 300px;
    }
`;
document.head.appendChild(style);

// ===== Scroll de Categorías (opcional: carousel para móvil) =====
const categoriasGrid = document.querySelector('.categorias-grid');
if (categoriasGrid && window.innerWidth < 768) {
    // En móviles, agregar scroll horizontal si es necesario
    categoriasGrid.style.overflowX = 'auto';
    categoriasGrid.style.scrollBehavior = 'smooth';
}

// ===== Event: Cerrar menú al hacer scroll =====
let ultimoScroll = 0;
window.addEventListener('scroll', () => {
    if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        if (menuToggle) menuToggle.textContent = '☰';
    }
}, false);

// ===== Función para rastrear eventos (analytics placeholder) =====
function rastrearEvento(nombre, datos = {}) {
    console.log(`Evento: ${nombre}`, datos);
    // Aquí se puede integrar Google Analytics o similar:
    // gtag('event', nombre, datos);
}

// Rastrear clics en CTA
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', () => {
        rastrearEvento('cta_click', { 
            boton: btn.textContent,
            timestamp: new Date().toISOString()
        });
    });
});

// Rastrear envío de formulario
if (registroForm) {
    const formSubmitOriginal = registroForm.onsubmit;
    registroForm.addEventListener('submit', () => {
        rastrearEvento('formulario_enviado', {
            timestamp: new Date().toISOString()
        });
    });
}

// ===== Detectar cambios en viewport =====
function handleViewportChange() {
    if (window.innerWidth > 768) {
        navMenu?.classList.remove('active');
        if (menuToggle) menuToggle.textContent = '☰';
    }
}

window.addEventListener('resize', handleViewportChange);

// ===== Inicialización al cargar =====
console.log('✅ Coneximport B2B - Landing Page cargada correctamente');
console.log('Versión: 1.0.0');