
// Espera hasta que el contenido del documento haya cargado completamente
document.addEventListener('DOMContentLoaded', function() {
    
    // Selecciona todos los elementos que tengan la clase 'fade-in-section'
    const faders = document.querySelectorAll('.fade-in-section');

    // Opciones para el IntersectionObserver:
    const appearOptions = {
        // El threshold (umbral) es del 10%, lo que significa que el efecto se activará cuando el 10% del elemento esté visible
        threshold: 0.1,

        // Agrega un margen inferior de -50px para activar el efecto justo antes de que el elemento sea completamente visible
        rootMargin: '0px 0px -50px 0px'
    };

    // Define el IntersectionObserver, que observará cuando los elementos seleccionados entren en la vista del usuario
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            // Si el elemento no está intersectando (visible en el viewport), simplemente se salta al siguiente
            if (!entry.isIntersecting) {
                return;
            } else {
                // Si está visible, añade la clase 'visible' al elemento para activar el efecto CSS
                entry.target.classList.add('visible');
                
                // Deja de observar este elemento para que la animación solo ocurra una vez
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    // Aplica el observador a cada uno de los elementos que tienen la clase 'fade-in-section'
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});


