// ========================================
// CONSOLA PUNK
// ========================================
console.log('✕ ZKATE SANITARIUM ✕');
console.log('// SIN REGLAS. CON ESTILO. //');
console.log('⛓ SOMOS LA ESCENA ⛓');

// ========================================
// CONTADOR DE CARRITO (ejemplo)
// ========================================
let cartCount = 0;

// ========================================
// EFECTO DE "RUIDO" EN EL FONDO
// ========================================
setInterval(() => {
    const body = document.body;
    const random = Math.random() * 0.02;
    body.style.backgroundImage = `
        radial-gradient(ellipse at ${Math.random() * 100}% ${Math.random() * 100}%, rgba(30,30,30,${random + 0.1}) 0%, transparent 50%),
        radial-gradient(ellipse at ${Math.random() * 100}% ${Math.random() * 100}%, rgba(30,30,30,${random + 0.05}) 0%, transparent 40%)
    `;
}, 4000);

// ========================================
// EFECTO DE TEXTO EN LA CITA
// ========================================
document.querySelector('.slash-line')?.addEventListener('click', function() {
    this.style.color = '#8b0000';
    this.style.transform = 'skewX(-5deg)';
    setTimeout(() => {
        this.style.color = '#444';
        this.style.transform = 'skewX(0)';
    }, 400);
});

// ========================================
// HORA EN EL HEADER (formato 12 horas AM/PM)
// ========================================
function updateTime() {
    const now = new Date();
    const date = now.toLocaleDateString('es-ES', { 
        day: 'numeric', 
        month: 'numeric', 
        year: 'numeric' 
    });
    const time = now.toLocaleTimeString('es-ES', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: true 
    });
    const stamp = document.querySelector('.date-stamp');
    if (stamp) {
        stamp.textContent = `${date} // ${time}`;
    }
}
updateTime();
setInterval(updateTime, 1000);

// ========================================
// EASTER EGG: "somos aburridos... y que?"
// ========================================
document.querySelector('.boring')?.addEventListener('click', (e) => {
    e.preventDefault();
    alert('✕ aburridos? ✕\n// mejor ponte a patinar //');
});

// ========================================
// DESTELLO ALEATORIO EN STICKERS
// ========================================
setInterval(() => {
    const stickers = document.querySelectorAll('.sticker');
    stickers.forEach((sticker) => {
        if (Math.random() > 0.85) {
            sticker.style.color = '#fff';
            setTimeout(() => {
                sticker.style.color = '#555';
            }, 150);
        }
    });
}, 3000);
