document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const imgAmpliada = document.getElementById('img-ampliada');
    const btnCerrar = document.querySelector('.cerrar-lightbox');

    // 1. Seleccionar todas las imágenes dentro de los contenedores de galería
    const imagenesGaleria = document.querySelectorAll('.foto-miniatura img, .card-galeria img');

    imagenesGaleria.forEach(imagen => {
        // Evitar que el botón "Ver Galería Completa" abra el visor
        if (!imagen.closest('#btn-ir-fotos')) {
            imagen.addEventListener('click', () => {
                imgAmpliada.src = imagen.src; 
                lightbox.style.display = 'flex'; 
                document.body.style.overflow = 'hidden';
            });
        }
    });

    // 2. Función para cerrar el visor
    const cerrarVisor = () => {
        lightbox.style.display = 'none';
        imgAmpliada.src = "";
        document.body.style.overflow = 'auto';
    };

    btnCerrar.addEventListener('click', cerrarVisor);
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) cerrarVisor();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") cerrarVisor();
    });

    // --- Lógica de navegación SPA ---
    const secciones = document.querySelectorAll('.seccion-spa');
    const enlacesNav = document.querySelectorAll('.nav-link');
    const btnIrFotos = document.getElementById('btn-ir-fotos');

    // ✅ CORRECCIÓN: Títulos de página actualizados al cambiar de vista
    const titulos = {
        'vista-inicio': 'Vitrales Chía | Arte y Diseño en Vidrio',
        'vista-nuestros-trabajos': 'Galería de Trabajos | Vitrales Chía',
        'vista-fotos-detallada': 'Fotos Detalladas | Vitrales Chía'
    };

    function cambiarVista(targetId, scrollTargetId = null) {
        secciones.forEach(s => s.style.display = 'none');
        const objetivo = document.getElementById(targetId);
        if (objetivo) {
            objetivo.style.display = 'block';
            // ✅ CORRECCIÓN: Actualiza el título del navegador
            if (titulos[targetId]) document.title = titulos[targetId];

            if (scrollTargetId) {
                // ✅ CORRECCIÓN: Scroll al elemento de contacto después de mostrar la vista
                setTimeout(() => {
                    const scrollEl = document.getElementById(scrollTargetId);
                    if (scrollEl) scrollEl.scrollIntoView({ behavior: 'smooth' });
                }, 50);
            } else {
                window.scrollTo(0, 0);
            }
        }
    }

    enlacesNav.forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            const target = enlace.getAttribute('data-target');
            if (target) {
                e.preventDefault();
                // ✅ CORRECCIÓN: Soporte para data-scroll (enlace de Contacto)
                const scrollTarget = enlace.getAttribute('data-scroll');
                cambiarVista(target, scrollTarget);
            }
        });
    });

    if (btnIrFotos) {
        btnIrFotos.addEventListener('click', () => cambiarVista('vista-fotos-detallada'));
    }
});
