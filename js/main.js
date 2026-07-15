// ============================================
// CONEXIMPORT B2B - JAVASCRIPT FUNCIONALIDAD
// ============================================

// ===== Inicializar EmailJS =====
(function() {
    emailjs.init("E-dTUH_EZVPv2Fsic");
})();

// ===== Variables Globales =====
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const registroForm = document.getElementById('registro-form');
const ctaMainBtn = document.getElementById('cta-main');

// Credenciales EmailJS
const EMAILJS_SERVICE_ID = "service_pad34rk";
const EMAILJS_TEMPLATE_ID = "template_6cun41o";
const ADMIN_EMAIL = "kylozadab@gmail.com";

// ===== Base de Datos de Productos (Modal B2B) =====
const productosPorCategoria = {
decoracion: [
        { 
            nombre: "Espejo Minimalista con Marco de Madera", 
            precio: "S/. 38.00", 
            moq: "Pedido mín: 10 und.", 
            img: "https://rimage.ripley.com.pe/home.ripley/Attachment/WOP/1/2030216713447/full_image-2030216713447" 
        },
        { 
            nombre: "Set x3 Macetas de Cerámica Nórdica", 
            precio: "S/. 22.50", 
            moq: "Pedido mín: 15 sets", 
            img: "https://media.falabella.com/falabellaPE/152777502_01/w=1200,h=1200,fit=pad" 
        },
        { 
            nombre: "Cuadros Decorativos Abstractos (Canvas)", 
            precio: "S/. 15.00", 
            moq: "Pedido mín: 20 und.",
            img: "https://apreciart.pe/media/catalog/product/cache/90a84030f7f1bea1e77702997f508b79/s/o/cuadros-abstractos-formas-organicas-set-de-3.jpg" 
        },
        { 
            nombre: "Lámpara de Mesa Vintage Industrial", 
            precio: "S/. 29.90",
            moq: "Pedido mín: 12 und.",
            img: "https://rimage.ripley.com.pe/home.ripley/Attachment/WOP/1/2030351225058/full_image-2030351225058.webp"
        },
        { 
            nombre: "Florero de Vidrio Estilo Burbuja Japandi",
            precio: "S/. 16.80",
            moq: "Pedido mín: 24 und.",
            img: "https://media.falabella.com/falabellaPE/155643318_01/w=1200,h=1200,fit=pad" 
        },
        { 
            nombre: "Cojines Decorativos de Felpa Ultra Suave (Set x2)",
            precio: "S/. 19.50",
            moq: "Pedido mín: 20 sets",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHfeei9H4zoj90aBmz0GR_7skH9oTv5Q0FfxPfhXg1dqmWpKF8lp9Pc3s&s=10"
        }
    ],
    organizadores: [
        { 
            nombre: "Organizador Giratorio para Condimentos (360°)", 
            precio: "S/. 14.50", 
            moq: "Pedido mín: 20 und.", 
            img: "https://s.alicdn.com/@sc04/kf/H06768da0a7d8416bbddec964b740d7d0R.jpg_300x300.jpg" 
        },
        { 
            nombre: "Organizador Ajustable para Lavaplatos y Fregadero", 
            precio: "S/. 9.80",
            moq: "Pedido mín: 30 und.",
            img: "https://img-1.kwcdn.com/product/fancy/1f9ea46d-b832-418a-a463-ab4270bf67b7.jpg?imageView2/2/w/800/q/70/format/avif"
        },
        { 
            nombre: "Organizador de Acrílico para Maquillaje y Joyas",
            precio: "S/. 18.50",
            moq: "Pedido mín: 15 und.",
            img: "https://img-1.kwcdn.com/product/fancy/c446cfe9-6de8-4dcc-9b02-3838e58208b3.jpg?imageView2/2/w/800/q/70/format/avif"
        },
        { 
            nombre: "Estante Organizador Modular Metálico para Microondas", 
            precio: "S/. 32.00",
            moq: "Pedido mín: 10 und.",
            img: "https://media.falabella.com/falabellaPE/155434283_01/w=1200,h=1200,fit=pad"
        },
        { 
            nombre: "Organizador de Zapatos Apilable Transparente (x6 Módulos)",
            precio: "S/. 26.50",
            moq: "Pedido mín: 12 sets",
            img: "https://oechsle.vteximg.com.br/arquivos/ids/22363265-1000-1000/imageUrl_1.jpg?v=638948110965200000"
        },
        { 
            nombre: "Perchero Multifuncional para Ropa y Calzado",
            precio: "S/. 36.90",
            moq: "Pedido mín: 10 und.",
            img: "https://oechsle.vteximg.com.br/arquivos/ids/23114208-1000-1000/Zapatera--con-Perchero-4-Niveles---organizador--de-Cartera-Sombrero-Abrigo.jpg?v=638990797334700000" 
        }
    ],
    almacenamiento: [
        { 
            nombre: "Cajones de Plástico Organizadores para Cocina (4 Niveles)", 
            precio: "S/. 42.00", 
            moq: "Pedido mín: 8 und.", 
            img: "https://oechsle.vteximg.com.br/arquivos/ids/19658431-1000-1000/imageUrl_1.jpg?v=638669948656330000" 
        },
        { 
            nombre: "Contenedores Herméticos para Alimentos Secos x6", 
            precio: "S/. 24.50", 
            moq: "Pedido mín: 12 sets", 
            img: "https://plazavea.vteximg.com.br/arquivos/ids/33970575-1000-1000/imageUrl_1.jpg?v=639078877919570000" 
        }
    ],
    accesorios: [
        { 
            nombre: "Balanza Digital de Cocina con Superficie de Vidrio",
            precio: "S/. 12.50",
            moq: "Pedido mín: 30 und.",
            img: "https://media.falabella.com/falabellaPE/883331058_005/w=1200,h=1200,fit=pad" 
        },
        { 
            nombre: "Set de Posavasos Redondos de Silicona x6",
            precio: "S/. 7.20",
            moq: "Pedido mín: 50 sets",
            img: "https://http2.mlstatic.com/D_NQ_NP_883872-MPE113014846849_062026-O.webp" 
        }
    ]
};

// ===== Funciones para Controlar el Modal de Productos =====
function abrirModal(categoria) {
    const modal = document.getElementById("modal-productos");
    const titulo = document.getElementById("modal-titulo-categoria");
    const contenedor = document.getElementById("contenedor-lista-productos");

    const nombresCategorias = {
        decoracion: "Decoración para el Hogar",
        organizadores: "Organización Eficiente",
        almacenamiento: "Sistemas de Almacenamiento",
        accesorios: "Accesorios de Uso Cotidiano"
    };

    if (titulo) titulo.innerText = nombresCategorias[categoria] || "Productos Disponibles";
    if (contenedor) contenedor.innerHTML = ""; 

    if (productosPorCategoria[categoria] && contenedor) {
        productosPorCategoria[categoria].forEach(prod => {
            const mensajeWhatsApp = `Hola Coneximport, estoy interesado en importar el producto B2B: "${prod.nombre}". Deseo más información sobre precios por mayor y plazos de entrega de logística.`;
            const urlWhatsApp = `https://wa.me/51972185119?text=${encodeURIComponent(mensajeWhatsApp)}`;

            const tarjetaHtml = `
                <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 15px; text-align: center; background-color: #fff; box-shadow: 0 2px 5px rgba(0,0,0,0.05); display: flex; flex-direction: column; justify-content: space-between;">
                    <img src="${prod.img}" alt="${prod.nombre}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 6px; margin-bottom: 12px;">
                    <h4 style="font-size: 16px; color: #333; margin: 0 0 8px 0; font-weight: 600; font-family: sans-serif;">${prod.nombre}</h4>
                    <p style="font-size: 18px; color: #0052CC; font-weight: bold; margin: 0 0 4px 0; font-family: sans-serif;">${prod.precio}</p>
                    <p style="font-size: 13px; color: #666; margin: 0 0 15px 0; font-style: italic; font-family: sans-serif;">${prod.moq}</p>
                    <a href="${urlWhatsApp}" target="_blank" style="display: block; background-color: #25D366; color: white; text-decoration: none; padding: 10px; border-radius: 6px; font-weight: bold; font-size: 14px; font-family: sans-serif; transition: background-color 0.2s;">
                        🟢 Adquirir Lote
                    </a>
                </div>
            `;
            contenedor.innerHTML += tarjetaHtml;
        });
    }

    if (modal) modal.style.display = "flex";
    rastrearEvento('modal_abierto', { categoria: categoria });
}

function cerrarModal() {
    const modal = document.getElementById("modal-productos");
    if (modal) modal.style.display = "none";
}

// ===== Menú Móvil Toggle =====
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
    });

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

        const formData = {
            nombre: document.getElementById('nombre').value.trim(),
            email: document.getElementById('email').value.trim(),
            empresa: document.getElementById('empresa').value.trim(),
            sector: document.getElementById('sector').value,
            timestamp: new Date().toISOString(),
            acceptedTerms: document.getElementById('terminos').checked
        };

        if (formData.nombre.length < 3) {
            mostrarMensaje('Por favor ingresa un nombre válido (mínimo 3 caracteres)', 'error');
            return;
        }

        if (!validarEmail(formData.email)) {
            mostrarMensaje('Por favor ingresa un email válido', 'error');
            return;
        }

        if (formData.empresa.length < 3) {
            mostrarMensaje('Por favor ingresa el nombre de tu empresa (mínimo 3 caracteres)', 'error');
            return;
        }

        if (!formData.acceptedTerms) {
            mostrarMensaje('Debes aceptar los términos y condiciones', 'error');
            return;
        }

        await enviarFormulario(formData);
    });
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

async function enviarFormulario(datos) {
    try {
        const btnSubmit = registroForm.querySelector('button[type="submit"]');
        const textoOriginal = btnSubmit.textContent;
        btnSubmit.disabled = true;
        btnSubmit.textContent = 'Enviando...';

        const templateParams = {
            to_email: ADMIN_EMAIL,
            from_name: datos.nombre,
            from_email: datos.email,
            nombre: datos.nombre,
            email: datos.email,
            empresa: datos.empresa,
            sector: datos.sector,
            fecha: new Date().toLocaleString('es-ES'),
            timestamp: datos.timestamp
        };

        const response = await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            templateParams
        );

        console.log('Email enviado exitosamente:', response);
        mostrarMensaje('¡Registro exitoso! Te contactaremos pronto.', 'success');
        registroForm.reset();
        btnSubmit.disabled = false;
        btnSubmit.textContent = textoOriginal;

        rastrearEvento('formulario_enviado_exitosamente', datos);

    } catch (error) {
        console.error('Error al enviar formulario:', error);
        mostrarMensaje('Hubo un error al registrarse. Por favor intenta de nuevo.', 'error');
        const btnSubmit = registroForm.querySelector('button[type="submit"]');
        btnSubmit.disabled = false;
        btnSubmit.textContent = 'Registrarme Ahora';
        rastrearEvento('formulario_error', { error: error.message });
    }
}

function mostrarMensaje(mensaje, tipo = 'info') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `mensaje mensaje-${tipo}`;
    messageDiv.textContent = mensaje;
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

    registroForm.parentNode.insertBefore(messageDiv, registroForm);

    setTimeout(() => {
        messageDiv.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => messageDiv.remove(), 300);
    }, 5000);
}

// ===== Animación Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
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
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    @keyframes slideOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-10px); }
    }
    .btn { position: relative; overflow: hidden; }
    .btn::before {
        content: ''; position: absolute; top: 50%; left: 50%; width: 0; height: 0;
        border-radius: 50%; background: rgba(255, 255, 255, 0.3); transform: translate(-50%, -50%);
        transition: width 0.6s, height 0.6s;
    }
    .btn:active::before { width: 300px; height: 300px; }
`;
document.head.appendChild(style);

// ===== Scroll de Categorías Móvil =====
const categoriasGrid = document.querySelector('.categorias-grid');
if (categoriasGrid && window.innerWidth < 768) {
    categoriasGrid.style.overflowX = 'auto';
    categoriasGrid.style.scrollBehavior = 'smooth';
}

// ===== Eventos Globales (Scroll & Click Outside) =====
window.addEventListener('scroll', () => {
    if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        if (menuToggle) menuToggle.textContent = '☰';
    }
}, false);

window.onclick = function(event) {
    const modal = document.getElementById("modal-productos");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// ===== Función para rastrear eventos =====
function rastrearEvento(nombre, datos = {}) {
    console.log(`Evento: ${nombre}`, datos);
}

document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', () => {
        rastrearEvento('cta_click', { 
            boton: btn.textContent,
            timestamp: new Date().toISOString()
        });
    });
});

function handleViewportChange() {
    if (window.innerWidth > 768) {
        navMenu?.classList.remove('active');
        if (menuToggle) menuToggle.textContent = '☰';
    }
}
window.addEventListener('resize', handleViewportChange);

// ===== Inicialización de Consola =====
console.log('✅ Coneximport B2B - Landing Page cargada correctamente');
console.log('Versión: 1.3.0 (Destino cambiado a kylozadab@gmail.com)');
console.log('📧 EmailJS integrado y activo');
