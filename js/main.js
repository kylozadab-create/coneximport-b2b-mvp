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
const ADMIN_EMAIL = "u21311906@utp.edu.pe";

// ===== Base de Datos de Productos (Modal B2B) =====
const productosPorCategoria = {
    decoracion: [
        { 
            nombre: "Espejo Minimalista con Marco de Madera", 
            precio: "S/. 38.00", 
            moq: "Pedido mín: 10 und.", 
            img: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=400&q=80" 
        },
        { 
            nombre: "Set x3 Macetas de Cerámica Nórdica", 
            precio: "S/. 22.50", 
            moq: "Pedido mín: 15 sets", 
            img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&q=80" 
        },
        { 
            nombre: "Cuadros Decorativos Abstractos (Canvas)", 
            precio: "S/. 15.00", 
            moq: "Pedido mín: 20 und.", 
            img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=400&q=80" 
        }
    ],
    organizadores: [
        { 
            nombre: "Cajas Organizadoras de Tela Plegables", 
            precio: "S/. 12.00", 
            moq: "Pedido mín: 30 und.", 
            img: "https://images.unsplash.com/photo-1595341595378-fc02e1b12b2a?w=400&q=80" 
        },
        { 
            nombre: "Organizador de Maquillaje Acrílico Rotativo", 
            precio: "S/. 18.50", 
            moq: "Pedido mín: 12 und.", 
            img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&q=80" 
        }
    ],
    almacenamiento: [
        { 
            nombre: "Estantes Modulares de Metal y Madera", 
            precio: "S/. 85.00", 
            moq: "Pedido mín: 5 und.", 
            img: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400&q=80" 
        },
        { 
            nombre: "Contenedores Plásticos Herméticos Multiusos", 
            precio: "S/. 9.50", 
            moq: "Pedido mín: 50 und.", 
            img: "https://images.unsplash.com/photo-1606744824163-985d376605aa?w=400&q=80" 
        }
    ],
    accesorios: [
        { 
            nombre: "Lámpara de Escritorio LED Inteligente", 
            precio: "S/. 26.00", 
            moq: "Pedido mín: 20 und.", 
            img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=80" 
        },
        { 
            nombre: "Set de Utensilios de Cocina de Bambú x5", 
            precio: "S/. 14.00", 
            moq: "Pedido mín: 25 sets", 
            img: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=400&q=80" 
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
            const urlWhatsApp = `https://wa.me/51999999999?text=${encodeURIComponent(mensajeWhatsApp)}`; 

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
    registroForm.
