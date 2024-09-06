// Función para manejar el clic en los botones
function manejarClick(idBoton) {
    const btnSi = document.getElementById('btnSi');
    const btnNo = document.getElementById('btnNo');
    const mensaje = document.getElementById('mensaje');
    const gifTenor = document.getElementById('love2Gif'); // El GIF love2.gif
    const loveGif = document.getElementById('loveGif');   // El GIF love.gif

    // Intercambiar la posición de los botones
    const btnSiPosition = btnSi.style.order || '1';
    const btnNoPosition = btnNo.style.order || '2';

    btnSi.style.order = btnNoPosition;
    btnNo.style.order = btnSiPosition;

    if (idBoton === 'btnSi') {
        // Mostrar el mensaje y ocultar el GIF love2.gif cuando se elige "Sí"
        mensaje.textContent = "¡No puedo creerloooo!, me gustas mucho cachetoncita hermosa 😻, te prometo hacerte feliz cada día. 💖";
        gifTenor.style.display = 'none';  // Ocultar el GIF love2.gif
        loveGif.style.display = 'block';  // Mostrar el GIF love.gif
    } else {
        // Mostrar el GIF love2.gif y ocultar el GIF love.gif cuando se elige "No"
        mensaje.textContent = "";
        gifTenor.style.display = 'block';  // Mostrar el GIF love2.gif
        loveGif.style.display = 'none';    // Ocultar el GIF love.gif
    }
}

// Función para crear corazones flotantes
function crearCorazon() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw'; // Posición aleatoria horizontal en toda la pantalla
    heart.style.top = Math.random() * 100 + 'vh'; // Posición aleatoria vertical en toda la pantalla
    heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // Duración aleatoria
    document.querySelector('.hearts-container').appendChild(heart);

    // Eliminar el corazón después de que termine la animación
    setTimeout(() => {
        heart.remove();
    }, 5000); // Eliminar el corazón después de 5 segundos
}

// Generar corazones cada 300ms
setInterval(crearCorazon, 300);