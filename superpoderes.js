// 🚀 JAVASCRIPT SÚPER GENIAL PARA TECHNOMUNDO

// 📦 PRODUCTOS GENIALES
const productos = [
    {
        id: 1,
        nombre: "Auriculares Mágicos Pro",
        precio: 89.99,
        emoji: "🎧",
        descripcion: "Cancelación de ruido que te teletransporta a otro mundo"
    },
    {
        id: 2,
        nombre: "SmartWatch Ultra",
        precio: 199.99,
        emoji: "⌚",
        descripcion: "Un reloj tan inteligente que casi piensa por ti"
    },
    {
        id: 3,
        nombre: "Control Gaming Elite",
        precio: 79.99,
        emoji: "🎮",
        descripcion: "Para ser el mejor gamer del universo conocido"
    },
    {
        id: 4,
        nombre: "Smartphone Pro Max",
        precio: 599.99,
        emoji: "📱",
        descripcion: "Más inteligente que algunos humanos que conozco"
    },
    {
        id: 5,
        nombre: "Laptop Gaming Beast",
        precio: 1299.99,
        emoji: "💻",
        descripcion: "Una bestia tecnológica que devora cualquier juego"
    },
    {
        id: 6,
        nombre: "Gafas VR Mágicas",
        precio: 399.99,
        emoji: "🥽",
        descripcion: "Portal a realidades que ni sabías que existían"
    }
];

// 🛒 CARRITO DE COMPRAS
let carrito = [];

// 🔢 FUNCIONES DEL CARRITO
function contarProductos() {
    return carrito.reduce((total, item) => total + item.cantidad, 0);
}

function calcularTotal() {
    return carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
}

// 🎯 ACTUALIZAR CARRITO CON EFECTOS GENIALES
function actualizarCarrito() {
    const botonCarrito = document.getElementById('boton-carrito');
    const cantidadProductos = contarProductos();
    const total = calcularTotal().toFixed(2);
    
    botonCarrito.textContent = `🛒 Carrito (${cantidadProductos}) - $${total}`;
    
    // ✨ EFECTO SÚPER GENIAL
    botonCarrito.style.transform = 'scale(1.2) rotate(10deg)';
    botonCarrito.style.background = 'linear-gradient(45deg, #ffeb3b, #ff9800)';
    
    setTimeout(() => {
        botonCarrito.style.transform = 'scale(1) rotate(0deg)';
        botonCarrito.style.background = 'linear-gradient(45deg, #ff7043, #ff5722)';
    }, 400);
}

// ➕ AÑADIR AL CARRITO CON MAGIA
function añadirAlCarrito(idProducto) {
    const producto = productos.find(p => p.id === idProducto);
    
    if (producto) {
        const itemExistente = carrito.find(item => item.id === idProducto);
        
        if (itemExistente) {
            itemExistente.cantidad += 1;
            mostrarMensaje(`➕ ${producto.emoji} ¡Cantidad actualizada! Tienes ${itemExistente.cantidad}`, 'info');
        } else {
            carrito.push({
                ...producto,
                cantidad: 1
            });
            mostrarMensaje(`🎉 ¡${producto.emoji} ${producto.nombre} añadido al carrito!`, 'exito');
        }
        
        actualizarCarrito();
        crearConfettiGenial();
        hacerVibrarPagina();
    }
}

// 🎨 SISTEMA DE MENSAJES SÚPER BONITOS
function mostrarMensaje(texto, tipo) {
    const colores = {
        exito: 'linear-gradient(135deg, #4caf50, #66bb6a)',
        info: 'linear-gradient(135deg, #2196f3, #42a5f5)',
        advertencia: 'linear-gradient(135deg, #ff9800, #ffb74d)',
        error: 'linear-gradient(135deg, #f44336, #ef5350)'
    };
    
    const iconos = {
        exito: '🎉',
        info: 'ℹ️',
        advertencia: '⚠️',
        error: '❌'
    };
    
    const mensaje = document.createElement('div');
    mensaje.innerHTML = `
        <div style="display: flex; align-items: center; gap: 15px;">
            <span style="font-size: 1.5rem;">${iconos[tipo]}</span>
            <span>${texto}</span>
        </div>
    `;
    
    mensaje.style.cssText = `
        position: fixed;
        top: 120px;
        right: 30px;
        background: ${colores[tipo]};
        color: white;
        padding: 20px 30px;
        border-radius: 20px;
        box-shadow: 0 15px 40px rgba(0,0,0,0.3);
        z-index: 10000;
        transform: translateX(400px);
        transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        font-weight: 600;
        font-size: 1.1rem;
        backdrop-filter: blur(15px);
        border: 2px solid rgba(255,255,255,0.2);
        max-width: 350px;
    `;
    
    document.body.appendChild(mensaje);
    
    // Animación de entrada
    setTimeout(() => {
        mensaje.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto-remove
    setTimeout(() => {
        mensaje.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (document.body.contains(mensaje)) {
                document.body.removeChild(mensaje);
            }
        }, 500);
    }, 4000);
    
    // Click para cerrar
    mensaje.addEventListener('click', () => {
        mensaje.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (document.body.contains(mensaje)) {
                document.body.removeChild(mensaje);
            }
        }, 500);
    });
}

// 🎊 CONFETTI SÚPER GENIAL
function crearConfettiGenial() {
    const colores = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd', '#98d8c8'];
    const formas = ['●', '★', '♦', '♥', '♠', '♣', '▲', '◆'];
    
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        const forma = formas[Math.floor(Math.random() * formas.length)];
        const color = colores[Math.floor(Math.random() * colores.length)];
        
        confetti.innerHTML = forma;
        confetti.style.cssText = `
            position: fixed;
            top: -30px;
            left: ${Math.random() * 100}%;
            color: ${color};
            font-size: ${Math.random() * 25 + 20}px;
            font-weight: bold;
            animation: confettiFall ${Math.random() * 4 + 3}s linear forwards;
            z-index: 9999;
            pointer-events: none;
            text-shadow: 0 0 10px ${color};
            transform: rotate(${Math.random() * 360}deg);
        `;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            if (document.body.contains(confetti)) {
                document.body.removeChild(confetti);
            }
        }, 7000);
    }
}

// 📳 HACER VIBRAR LA PÁGINA
function hacerVibrarPagina() {
    document.body.style.animation = 'shake 0.5s ease-in-out';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 500);
}

// 👆 MOSTRAR CARRITO COMPLETO
function mostrarCarrito() {
    if (carrito.length === 0) {
        mostrarMensaje('🛒 Tu carrito está vacío. ¡Añade algunos productos geniales!', 'info');
        return;
    }
    
    // Crear modal súper genial
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        backdrop-filter: blur(15px);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        animation: fadeIn 0.4s ease-out;
    `;
    
    const contenido = document.createElement('div');
    contenido.style.cssText = `
        background: linear-gradient(145deg, #ffffff, #f5f5f5);
        padding: 40px;
        border-radius: 25px;
        max-width: 600px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        box-shadow: 0 25px 80px rgba(0,0,0,0.3);
        border: 3px solid rgba(76, 175, 80, 0.2);
        animation: slideInUp 0.5s ease-out;
    `;
    
    let htmlCarrito = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; border-bottom: 3px solid #e8f5e8; padding-bottom: 20px;">
            <h2 style="color: #1b5e20; font-size: 2.2rem;">🛒 Tu Carrito Genial</h2>
            <button onclick="cerrarModal()" style="background: linear-gradient(45deg, #ff5722, #ff7043); color: white; border: none; font-size: 1.5rem; width: 40px; height: 40px; border-radius: 50%; cursor: pointer; box-shadow: 0 5px 15px rgba(255, 87, 34, 0.3);">×</button>
        </div>
    `;
    
    carrito.forEach(item => {
        htmlCarrito += `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 25px; border: 2px solid #e8f5e8; border-radius: 20px; margin-bottom: 20px; background: linear-gradient(145deg, #f9f9f9, white); box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                <div style="flex: 1;">
                    <h4 style="color: #1b5e20; margin-bottom: 8px; font-size: 1.3rem;">${item.emoji} ${item.nombre}</h4>
                    <p style="color: #558b2f; font-size: 1rem; margin-bottom: 15px;">${item.descripcion}</p>
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <button onclick="cambiarCantidad(${item.id}, -1)" style="background: linear-gradient(45deg, #ffcdd2, #ef9a9a); color: #d32f2f; border: none; padding: 8px 12px; border-radius: 10px; cursor: pointer; font-weight: bold; box-shadow: 0 3px 10px rgba(244, 67, 54, 0.2);">−</button>
                        <span style="font-weight: bold; font-size: 1.1rem; color: #2e7d32; background: #e8f5e8; padding: 8px 15px; border-radius: 15px;">Cantidad: ${item.cantidad}</span>
                        <button onclick="cambiarCantidad(${item.id}, 1)" style="background: linear-gradient(45deg, #c8e6c9, #a5d6a7); color: #1b5e20; border: none; padding: 8px 12px; border-radius: 10px; cursor: pointer; font-weight: bold; box-shadow: 0 3px 10px rgba(76, 175, 80, 0.2);">+</button>
                    </div>
                </div>
                <div style="text-align: right;">
                    <div style="font-size: 1.4rem; font-weight: bold; color: #0277bd; margin-bottom: 15px; background: linear-gradient(45deg, #e1f5fe, #b3e5fc); padding: 10px 15px; border-radius: 15px;">$${(item.precio * item.cantidad).toFixed(2)}</div>
                    <button onclick="eliminarDelCarrito(${item.id})" style="background: linear-gradient(45deg, #ffcdd2, #ffab91); color: #d32f2f; border: none; padding: 10px 15px; border-radius: 12px; cursor: pointer; font-size: 0.9rem; font-weight: bold; box-shadow: 0 3px 10px rgba(244, 67, 54, 0.2);">🗑️ Eliminar</button>
                </div>
            </div>
        `;
    });
    
    htmlCarrito += `
        <div style="border-top: 3px solid #e8f5e8; padding-top: 25px; margin-top: 25px; background: linear-gradient(145deg, #f1f8e9, white); padding: 30px; border-radius: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px;">
                <span style="font-size: 1.8rem; font-weight: bold; color: #1b5e20;">💰 Total:</span>
                <span style="font-size: 2.5rem; font-weight: bold; color: #0277bd; text-shadow: 1px 1px 3px rgba(0,0,0,0.1);">$${calcularTotal().toFixed(2)}</span>
            </div>
            <div style="display: flex; gap: 20px;">
                <button onclick="limpiarCarrito()" style="flex: 1; background: linear-gradient(135deg, #ffcdd2, #ffab91); color: #d32f2f; border: none; padding: 18px; border-radius: 25px; font-size: 1.1rem; font-weight: bold; cursor: pointer; box-shadow: 0 8px 25px rgba(244, 67, 54, 0.3); transition: all 0.3s ease;">🗑️ Limpiar Todo</button>
                <button onclick="procesarPago()" style="flex: 2; background: linear-gradient(135deg, #66bb6a, #4caf50); color: white; border: none; padding: 18px; border-radius: 25px; font-size: 1.2rem; font-weight: bold; cursor: pointer; box-shadow: 0 8px 25px rgba(76, 175, 80, 0.4); transition: all 0.3s ease;">💳 ¡Comprar Ahora!</button>
            </div>
        </div>
    `;
    
    contenido.innerHTML = htmlCarrito;
    modal.appendChild(contenido);
    document.body.appendChild(modal);
    
    // Cerrar al hacer clic fuera
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            cerrarModal();
        }
    });
    
    window.modalActual = modal;
}

// 🚫 CERRAR MODAL
function cerrarModal() {
    if (window.modalActual) {
        window.modalActual.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            if (document.body.contains(window.modalActual)) {
                document.body.removeChild(window.modalActual);
            }
            window.modalActual = null;
        }, 300);
    }
}

// 🔢 CAMBIAR CANTIDAD
function cambiarCantidad(idProducto, cambio) {
    const item = carrito.find(item => item.id === idProducto);
    if (item) {
        item.cantidad += cambio;
        if (item.cantidad <= 0) {
            eliminarDelCarrito(idProducto);
        } else {
            actualizarCarrito();
            // Reabrir modal
            cerrarModal();
            setTimeout(() => mostrarCarrito(), 200);
        }
    }
}

// 🗑️ ELIMINAR DEL CARRITO
function eliminarDelCarrito(idProducto) {
    const producto = productos.find(p => p.id === idProducto);
    carrito = carrito.filter(item => item.id !== idProducto);
    actualizarCarrito();
    mostrarMensaje(`🗑️ ${producto.emoji} ${producto.nombre} eliminado del carrito`, 'advertencia');
    
    if (window.modalActual) {
        cerrarModal();
        setTimeout(() => {
            if (carrito.length > 0) {
                mostrarCarrito();
            }
        }, 200);
    }
}

// 💳 PROCESAR PAGO GENIAL
function procesarPago() {
    const total = calcularTotal().toFixed(2);
    cerrarModal();
    
    const modalPago = document.createElement('div');
    modalPago.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        backdrop-filter: blur(20px);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10001;
        animation: fadeIn 0.5s ease-out;
    `;
    
    modalPago.innerHTML = `
        <div style="background: linear-gradient(145deg, #e8f5e8, white); padding: 60px; border-radius: 30px; text-align: center; max-width: 500px; width: 90%; box-shadow: 0 30px 100px rgba(0,0,0,0.4); border: 3px solid rgba(76, 175, 80, 0.3);">
            <div style="font-size: 5rem; margin-bottom: 25px; animation: bounce 1s infinite;">💳</div>
            <h2 style="color: #1b5e20; margin-bottom: 25px; font-size: 2.5rem;">¡Procesando tu Pago!</h2>
            <p style="color: #558b2f; font-size: 1.3rem; margin-bottom: 30px;">Total a pagar: <strong style="color: #0277bd; font-size: 2rem;">$${total}</strong></p>
            <div style="background: linear-gradient(90deg, #66bb6a, #4caf50, #81c784, #66bb6a); height: 10px; border-radius: 5px; margin-bottom: 30px; animation: loading 2s infinite;"></div>
            <p style="color: #666; font-size: 1.1rem; animation: pulse 1.5s infinite;">🔐 Conectando con el banco...</p>
        </div>
    `;
    
    document.body.appendChild(modalPago);
    
    // Simular proceso
    setTimeout(() => {
        modalPago.innerHTML = `
            <div style="background: linear-gradient(145deg, #e8f5e8, white); padding: 60px; border-radius: 30px; text-align: center; max-width: 500px; width: 90%; box-shadow: 0 30px 100px rgba(0,0,0,0.4); border: 3px solid rgba(76, 175, 80, 0.3);">
                <div style="font-size: 6rem; margin-bottom: 25px; animation: bounce 0.6s ease-out;">🎉</div>
                <h2 style="color: #1b5e20; margin-bottom: 25px; font-size: 2.5rem;">¡PAGO EXITOSO!</h2>
                <p style="color: #558b2f; font-size: 1.2rem; margin-bottom: 20px;">¡Gracias por tu compra de <strong style="color: #0277bd;">$${total}</strong>!</p>
                <p style="color: #666; font-size: 1rem; margin-bottom: 35px;">📧 Te enviaremos la confirmación por email</p>
                <button onclick="finalizarCompra()" style="background: linear-gradient(135deg, #66bb6a, #4caf50); color: white; border: none; padding: 20px 50px; border-radius: 30px; font-size: 1.3rem; font-weight: bold; cursor: pointer; box-shadow: 0 10px 30px rgba(76, 175, 80, 0.4); transition: all 0.3s ease;">✨ ¡Increíble!</button>
            </div>
        `;
        
        // Confetti de celebración
        for (let i = 0; i < 5; i++) {
            setTimeout(() => crearConfettiGenial(), i * 200);
        }
    }, 3500);
    
    window.modalActual = modalPago;
}

// ✅ FINALIZAR COMPRA
function finalizarCompra() {
    carrito = [];
    actualizarCarrito();
    cerrarModal();
    mostrarMensaje('🎊 ¡Compra finalizada! ¡Eres increíble!', 'exito');
    
    // Efecto en toda la página
    document.body.style.animation = 'rainbow 2s ease-out';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 2000);
}

// 🧹 LIMPIAR CARRITO
function limpiarCarrito() {
    if (confirm('¿Estás seguro de que quieres limpiar todo el carrito?')) {
        carrito = [];
        actualizarCarrito();
        cerrarModal();
        mostrarMensaje('🧹 ¡Carrito limpiado completamente!', 'advertencia');
    }
}

// 📧 PROCESAR FORMULARIO DE CONTACTO
function procesarFormulario(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const datos = {
        nombre: formData.get('nombre'),
        email: formData.get('email'),
        mensaje: formData.get('mensaje')
    };
    
    const botonEnviar = event.target.querySelector('button');
    const textoOriginal = botonEnviar.textContent;
    
    // Animación de envío
    botonEnviar.textContent = '📤 Enviando...';
    botonEnviar.disabled = true;
    botonEnviar.style.animation = 'pulse 1s infinite';
    
    setTimeout(() => {
        botonEnviar.textContent = '✅ ¡Enviado!';
        botonEnviar.style.animation = 'bounce 0.6s ease-out';
        botonEnviar.style.background = 'linear-gradient(135deg, #66bb6a, #4caf50)';
        
        mostrarMensaje(`📧 ¡Mensaje enviado! Gracias ${datos.nombre}, te responderemos pronto 😊`, 'exito');
        
        // Limpiar formulario
        event.target.reset();
        crearConfettiGenial();
        
        // Restaurar botón
        setTimeout(() => {
            botonEnviar.textContent = textoOriginal;
            botonEnviar.disabled = false;
            botonEnviar.style.animation = '';
            botonEnviar.style.background = 'linear-gradient(135deg, #4caf50 0%, #66bb6a 100%)';
        }, 3000);
        
    }, 2500);
}

// 🎭 ANIMACIONES CSS DINÁMICAS
const estilosAnimaciones = document.createElement('style');
estilosAnimaciones.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
        40% { transform: translateY(-20px); }
        60% { transform: translateY(-10px); }
    }
    
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
    
    @keyframes loading {
        0% { background-position: -200px 0; }
        100% { background-position: calc(200px + 100%) 0; }
    }
    
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(estilosAnimaciones);

// 🚀 INICIALIZAR TODO CUANDO LA PÁGINA ESTÉ LISTA
function inicializar() {
    console.log('🎉 ¡TechnoMundo cargado con súper poderes!');
    
    // Configurar botón del carrito
    const botonCarrito = document.getElementById('boton-carrito');
    if (botonCarrito) {
        botonCarrito.onclick = mostrarCarrito;
    }
    
    // Configurar formulario
    const formulario = document.getElementById('formulario-contacto');
    if (formulario) {
        formulario.addEventListener('submit', procesarFormulario);
    }
    
    // Mensaje de bienvenida
    setTimeout(() => {
        mostrarMensaje('🌟 ¡Bienvenido a TechnoMundo! Tu tienda genial está lista', 'exito');
    }, 1000);
    
    // Efectos en los botones
    const botones = document.querySelectorAll('.btn-comprar');
    botones.forEach(boton => {
        boton.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        boton.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// ⌨️ ATAJOS DE TECLADO GENIALES
document.addEventListener('keydown', function(event) {
    if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        return;
    }
    
    switch(event.key.toLowerCase()) {
        case 'c':
            event.preventDefault();
            mostrarCarrito();
            break;
            
        case 'l':
            event.preventDefault();
            if (carrito.length > 0) {
                limpiarCarrito();
            }
            break;
            
        case 'escape':
            event.preventDefault();
            cerrarModal();
            break;
    }
});

// 🎬 EJECUTAR TODO CUANDO ESTÉ LISTO
document.addEventListener('DOMContentLoaded', inicializar);

console.log('🚀 ¡JavaScript súper genial cargado!');
console.log('💡 Atajos: C = Ver carrito, L = Limpiar carrito, ESC = Cerrar modal');