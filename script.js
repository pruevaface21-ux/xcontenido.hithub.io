document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleccionar elementos del DOM
    const videoDestacado = document.getElementById('video-destacado');
    const enlacesVideos = document.querySelectorAll('.enlace-video');
    
    // 2. Iterar sobre todos los enlaces de la galería
    enlacesVideos.forEach(enlace => {
        // 3. Añadir un "escuchador" de eventos de clic a cada enlace
        enlace.addEventListener('click', (evento) => {
            // Evitar que el enlace navegue a otra página
            evento.preventDefault();
            
            // 4. Obtener la ruta del video desde el atributo 'data-src' del enlace
            const nuevaFuenteVideo = enlace.getAttribute('data-src');
            
            // 5. Actualizar la fuente del video principal
            videoDestacado.src = nuevaFuenteVideo;
            
            // 6. Cargar y reproducir el nuevo video
            videoDestacado.load();
            videoDestacado.play();
        });
    });
});