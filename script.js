document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const imgAmpliada = document.getElementById('img-ampliada');
    const btnCerrar = document.querySelector('.cerrar-lightbox');

    // 1. Seleccionar todas las imágenes dentro de los contenedores de galería
    const imagenesGaleria = document.querySelectorAll('.foto-miniatura img, .card-galeria img');

    imagenesGaleria.forEach(imagen => {
        // Evitar que el botón de "Ver Galería Completa" abra el visor si no es necesario
        if (!imagen.closest('#btn-ir-fotos')) {
            imagen.addEventListener('click', () => {
                imgAmpliada.src = imagen.src; 
                lightbox.style.display = 'flex'; 
                document.body.style.overflow = 'hidden'; // Bloquea el scroll del fondo
            });
        }
    });

    // 2. Función para cerrar el visor
    const cerrarVisor = () => {
        lightbox.style.display = 'none';
        imgAmpliada.src = ""; // Limpia la imagen para la próxima apertura
        document.body.style.overflow = 'auto'; // Devuelve el scroll
    };

    // Eventos para cerrar
    btnCerrar.addEventListener('click', cerrarVisor);
    
    // Cerrar al hacer clic en el fondo negro (fuera de la imagen)
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            cerrarVisor();
        }
    });

    // Cerrar con la tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") cerrarVisor();
    });

    // --- Lógica de navegación SPA (Manteniendo tu funcionalidad original) ---
    const secciones = document.querySelectorAll('.seccion-spa');
    const enlacesNav = document.querySelectorAll('.nav-link');
    const btnIrFotos = document.getElementById('btn-ir-fotos');

    function cambiarVista(targetId) {
        secciones.forEach(s => s.style.display = 'none');
        const objetivo = document.getElementById(targetId);
        if (objetivo) {
            objetivo.style.display = 'block';
            window.scrollTo(0, 0);
        }
    }

    enlacesNav.forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            const target = enlace.getAttribute('data-target');
            if (target) {
                e.preventDefault();
                cambiarVista(target);
            }
        });
    });

    if (btnIrFotos) {
        btnIrFotos.addEventListener('click', () => cambiarVista('vista-fotos-detallada'));
    }
});