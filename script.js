document.addEventListener('DOMContentLoaded', () => {

    // =========================================================================
    // MEJORA 1: Lista de imágenes de la galería definida en JS.
    // Se inyectan en el DOM SOLO cuando el usuario abre la galería,
    // evitando descargar ~140 imágenes al cargar la página.
    // =========================================================================
    const IMAGENES_GALERIA = [
        { src: "https://i.postimg.cc/FR2xycVy/Whats-App-Image-2026-02-19-at-9-17-40-PM.jpg",         alt: "Exhibición de vitrales artísticos terminados en Chía" },
        { src: "https://i.postimg.cc/C1yZJ49T/20220430-143725-scaled-e1656986621401.jpg",             alt: "Vitral decorativo de gran formato para ventanal" },
        { src: "https://i.postimg.cc/MZFXJRDN/Whats-App-Image-2026-02-19-at-3-24-48-PM-(2).jpg",         alt: "Vitral artístico con colores vivos en Chía" },
        { src: "https://i.postimg.cc/xqL9KXBk/Whats-App-Image-2026-02-19-at-3-24-49-PM-2.jpg",       alt: "Vitral decorativo para espacios residenciales" },
        { src: "https://i.postimg.cc/8k0sgWHy/Whats-App-Image-2026-02-19-at-3-24-50-PM-(1).jpg",         alt: "Vitral artesanal de colores en ventana" },
        { src: "https://i.postimg.cc/tRM7GP5S/Whats-App-Image-2026-02-19-at-3-24-50-PM-(3).jpg",         alt: "Vitral religioso para iglesias colombianas" },
        { src: "https://i.postimg.cc/wxG3YJVb/Whats-App-Image-2026-02-19-at-3-24-51-PM.jpg",       alt: "Diseño exclusivo de vitral artístico" },
        { src: "https://i.postimg.cc/8c9CdQcV/Whats-App-Image-2026-02-19-at-3-24-52-PM.jpg",         alt: "Vitral para fachadas y ventanales" },
        { src: "https://i.postimg.cc/C5XKCT5y/Whats-App-Image-2026-02-19-at-3-24-52-PM-(1).jpg",       alt: "Maestría en arte vitralista colombiano" },
        { src: "https://i.postimg.cc/VsV5PMRh/Whats-App-Image-2026-02-19-at-3-24-52-PM-(2).jpg",         alt: "Vitral artístico moderno multicolor" },
        { src: "https://i.postimg.cc/VvpN9Qvm/Whats-App-Image-2026-02-19-at-3-24-54-PM-(1).jpg",     alt: "Vitral clásico para lucernarios" },
        { src: "https://i.postimg.cc/fWrkQXKJ/Whats-App-Image-2026-02-19-at-3-24-54-PM-(2).jpg",     alt: "Taller de vitrales artísticos en Cundinamarca" },
        { src: "https://i.postimg.cc/VsV5PMRt/Whats-App-Image-2026-02-19-at-3-24-55-PM.jpg",         alt: "Vitral con texturas y vidrios especiales" },
        { src: "https://i.postimg.cc/xj4qVHRk/Whats-App-Image-2026-02-19-at-3-24-55-PM-(1).jpg",     alt: "Diseño de vitral heráldico personalizado" },
        { src: "https://i.postimg.cc/DfMm3sg4/Whats-App-Image-2026-02-19-at-3-24-55-PM-(2).jpg",     alt: "Vitral religioso de la Virgen María" },
        { src: "https://i.postimg.cc/mZ5hWMwF/Whats-App-Image-2026-02-19-at-3-24-55-PM-(3).jpg",     alt: "Vitral sacro decorativo para capillas" },
        { src: "https://i.postimg.cc/CMQdpDNG/Whats-App-Image-2026-02-19-at-3-24-56-PM.jpg",         alt: "Vitral artístico con simbología espiritual" },
        { src: "https://i.postimg.cc/SQvjb8rc/Whats-App-Image-2026-02-19-at-3-24-56-PM-(1).jpg",     alt: "Ensamble de vitral con cañuela de plomo" },
        { src: "https://i.postimg.cc/66mTxR0d/Whats-App-Image-2026-02-19-at-3-24-56-PM-(2).jpg",     alt: "Vitral artesanal diseño exclusivo Chía" },
        { src: "https://i.postimg.cc/SQvjb8rD/Whats-App-Image-2026-02-19-at-3-24-57-PM.jpg",         alt: "Luz filtrada a través de vitral multicolor" },
        { src: "https://i.postimg.cc/sfN1CScP/Whats-App-Image-2026-02-19-at-3-24-57-PM-(1).jpg",     alt: "Proceso de soldadura en vitral profesional" },
        { src: "https://i.postimg.cc/mZ5hWMwy/Whats-App-Image-2026-02-19-at-3-24-57-PM-(2).jpg",     alt: "Vitral decorativo para cúpulas residenciales" },
        { src: "https://i.postimg.cc/1Rj416HB/Whats-App-Image-2026-02-19-at-3-24-57-PM-(4).jpg",     alt: "Vitral estilo Tiffany para decoración" },
        { src: "https://i.postimg.cc/7hf6TYxZ/Whats-App-Image-2026-02-19-at-3-25-00-PM.jpg",         alt: "Vitral artístico para fachada de edificio" },
        { src: "https://i.postimg.cc/SRJszNyS/Whats-App-Image-2026-02-19-at-3-25-00-PM-(1).jpg",     alt: "Trabajo terminado de vitral sacro" },
        { src: "https://i.postimg.cc/0jbQJ285/Whats-App-Image-2026-02-19-at-3-25-00-PM-(2).jpg",     alt: "Estructura metálica para soporte de vitrales" },
        { src: "https://i.postimg.cc/prpTnX2T/Whats-App-Image-2026-02-19-at-3-25-00-PM-(4).jpg",     alt: "Vitral para oratorios privados" },
        { src: "https://i.postimg.cc/prpTnX28/Whats-App-Image-2026-02-19-at-3-25-01-PM.jpg",         alt: "Vidrio catedral de colores para vitrales" },
        { src: "https://i.postimg.cc/ZnCRyKTn/Whats-App-Image-2026-02-19-at-3-25-01-PM-(1).jpg",     alt: "Detalle artístico en vitral de alta gama" },
        { src: "https://i.postimg.cc/5y60FNxQ/Whats-App-Image-2026-02-19-at-3-25-01-PM-(4).jpg",     alt: "Vitral temático personalizado para regalo" },
        { src: "https://i.postimg.cc/Wzh3Jb2F/Whats-App-Image-2026-02-19-at-3-25-01-PM-(6).jpg",     alt: "Técnicas modernas en el arte del vitral" },
        { src: "https://i.postimg.cc/T1pwWYRW/Whats-App-Image-2026-02-19-at-3-25-01-PM-(7).jpg",     alt: "Vitral abstracto de gran colorido" },
        { src: "https://i.postimg.cc/rsKmtF89/Whats-App-Image-2026-02-19-at-3-25-02-PM.jpg",         alt: "Restauración de piezas de vidrio antiguas" },
        { src: "https://i.postimg.cc/GtH2shcD/Whats-App-Image-2026-02-19-at-3-25-02-PM-(1).jpg",     alt: "Vitral artesanal estilo colonial" },
        { src: "https://i.postimg.cc/5y60FNx8/Whats-App-Image-2026-02-19-at-3-25-02-PM-(2).jpg",     alt: "Instalación de vitral en ventana de madera" },
        { src: "https://i.postimg.cc/90rMqFWp/Whats-App-Image-2026-02-19-at-3-25-03-PM.jpg",         alt: "Arte sacro en vidrio para parroquias" },
        { src: "https://i.postimg.cc/hvfj7PS1/Whats-App-Image-2026-02-19-at-3-25-03-PM-(1).jpg",     alt: "Vitral decorativo para baño con privacidad" },
        { src: "https://i.postimg.cc/fyJL0TwB/Whats-App-Image-2026-02-19-at-3-25-04-PM.jpg",         alt: "Vitral con diseño floral delicado" },
        { src: "https://i.postimg.cc/8cj5rP14/Whats-App-Image-2026-02-19-at-3-25-04-PM-(1).jpg",     alt: "Diseño de vitral para tragaluz" },
        { src: "https://i.postimg.cc/MHNG02T0/Whats-App-Image-2026-02-19-at-3-25-05-PM.jpg",         alt: "Maestro vitralista trabajando en Chía" },
        { src: "https://i.postimg.cc/zvVBRXJx/Whats-App-Image-2026-02-19-at-3-25-05-PM-(1).jpg",     alt: "Vitral artístico con degradados de color" },
        { src: "https://i.postimg.cc/SRJszNyV/Whats-App-Image-2026-02-19-at-3-25-05-PM-(2).jpg",     alt: "Vitral para comedor con diseño elegante" },
        { src: "https://i.postimg.cc/L5wskKXz/Whats-App-Image-2026-02-19-at-3-25-05-PM-(3).jpg",     alt: "Panel de vitral decorativo para puerta" },
        { src: "https://i.postimg.cc/90KfP5Md/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2005%20PM%20(4).jpg", alt: "Vitral artístico con técnica de grisalla" },
        { src: "https://i.postimg.cc/sxq2PdX4/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2005%20PM%20(7).jpg", alt: "Vitral moderno estilo minimalista" },
        { src: "https://i.postimg.cc/QCwMgGtf/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2006%20PM.jpg",      alt: "Pieza de vitral artesanal terminada" },
        { src: "https://i.postimg.cc/qqS7cVRG/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2006%20PM%20(1).jpg",alt: "Vitral para nichos decorativos" },
        { src: "https://i.postimg.cc/T1FPjMw0/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2006%20PM%20(3).jpg",alt: "Vitral sacro con figuras bíblicas" },
        { src: "https://i.postimg.cc/NFS08qMJ/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2007%20PM.jpg",      alt: "Vitral artesanal para hogares en Colombia" },
        { src: "https://i.postimg.cc/D0HzQkZt/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2008%20PM.jpg",      alt: "Muestra de vidrios importados para vitrales" },
        { src: "https://i.postimg.cc/fypb7nLH/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2008%20PM%20(1).jpg",alt: "Vitral artístico diseño personalizado exclusivo" },
        { src: "https://i.postimg.cc/sxq2PdXb/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2008%20PM%20(4).jpg",alt: "Restauración de ventanales de vitral históricos" },
        { src: "https://i.postimg.cc/C5XKCT13/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2009%20PM.jpg",      alt: "Vitral moderno para oficinas y locales comerciales" },
        { src: "https://i.postimg.cc/fbNJgNvg/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2014%20PM.jpg",      alt: "Panel decorativo de vitral artístico" },
        { src: "https://i.postimg.cc/ZqSCDSL7/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2015%20PM%20(1).jpg",alt: "Vitral sacro de San Francisco de Asís" },
        { src: "https://i.postimg.cc/R0BNbBT8/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2015%20PM%20(2).jpg",alt: "Vitral sacro de la Crucifixión" },
        { src: "https://i.postimg.cc/R0BNbBTy/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2015%20PM%20(3).jpg",alt: "Vitral sacro del Espíritu Santo" },
        { src: "https://i.postimg.cc/tgjYmjz8/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2015%20PM%20(4).jpg",alt: "Vitral sacro representación bíblica" },
        { src: "https://i.postimg.cc/R0BNbBTj/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2015%20PM%20(5).jpg",alt: "Vitral sacro religioso artesanal" },
        { src: "https://i.postimg.cc/DzT8YTc9/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2015%20PM%20(6).jpg",alt: "Vitral sacro el buen pastor" },
        { src: "https://i.postimg.cc/wBp7bpV8/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2015%20PM%20(7).jpg",alt: "Vitral sacro diseño para templos" },
        { src: "https://i.postimg.cc/rpkKYkJT/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2015%20PM%20(8).jpg",alt: "Vitral sacro escena de la natividad" },
        { src: "https://i.postimg.cc/k5vD0p17/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2016%20PM.jpg",      alt: "Vitral sacro ángel mensajero" },
        { src: "https://i.postimg.cc/FK47n4Zh/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2016%20PM%20(2).jpg",alt: "Vitral sacro de la Sagrada Familia" },
        { src: "https://i.postimg.cc/ZqSCDScY/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2016%20PM%20(3).jpg",alt: "Vitral sacro rostro de Cristo" },
        { src: "https://i.postimg.cc/25DVXDw8/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2016%20PM%20(4).jpg",alt: "Vitral sacro San José" },
        { src: "https://i.postimg.cc/GpCHSCQp/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2016%20PM%20(6).jpg",alt: "Vitral sacro diseño tradicional" },
        { src: "https://i.postimg.cc/6QfTkmjZ/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2017%20PM.jpg",      alt: "Vitral sacro para altar mayor" },
        { src: "https://i.postimg.cc/fbfkGr2W/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2017%20PM%20(2).jpg",alt: "Vitral sacro arte en vidrio para iglesias" },
        { src: "https://i.postimg.cc/Zqx0GM79/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2017%20PM%20(5).jpg",alt: "Vitral sacro figuras religiosas" },
        { src: "https://i.postimg.cc/76Pbwnd1/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2018%20PM.jpg",      alt: "Vitral sacro diseño para baptisterios" },
        { src: "https://i.postimg.cc/g0HrCTS3/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2018%20PM%20(1).jpg",alt: "Vitral sacro Juan Bautista" },
        { src: "https://i.postimg.cc/7LnbFWs1/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2018%20PM%20(2).jpg",alt: "Vitral sacro con paloma y símbolos" },
        { src: "https://i.postimg.cc/N0kL3zJ7/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2018%20PM%20(4).jpg",alt: "Vitral sacro arte vitralista profesional" },
        { src: "https://i.postimg.cc/MTZXqmNf/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2018%20PM%20(5).jpg",alt: "Vitral sacro vidriería artística religiosa" },
        { src: "https://i.postimg.cc/SsQjkf39/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2018%20PM%20(6).jpg",alt: "Vitral sacro de la Eucaristía" },
        { src: "https://i.postimg.cc/SsQjkf3c/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2018%20PM%20(7).jpg",alt: "Vitral sacro arte en cristal pintado" },
        { src: "https://i.postimg.cc/C1MdSsXH/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2018%20PM%20(8).jpg",alt: "Vitral sacro decorativo tradicional" },
        { src: "https://i.postimg.cc/wvx3gQZV/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2019%20PM%20(3).jpg",alt: "Vitral sacro de santos y mártires" },
        { src: "https://i.postimg.cc/B6Zt4BkN/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2019%20PM%20(4).jpg",alt: "Vitral sacro para ventanas laterales de iglesia" },
        { src: "https://i.postimg.cc/rmyzMN3n/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2019%20PM%20(6).jpg",alt: "Vitral sacro con ornamentos clásicos" },
        { src: "https://i.postimg.cc/0Q5rP0FB/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2020%20PM.jpg",      alt: "Vitral sacro arte con plomo y vidrio catedral" },
        { src: "https://i.postimg.cc/SsQjkf35/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2021%20PM%20(2).jpg",alt: "Vitral sacro de San Pedro" },
        { src: "https://i.postimg.cc/d1QDwjpg/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2021%20PM%20(3).jpg",alt: "Vitral sacro de la Inmaculada Concepción" },
        { src: "https://i.postimg.cc/RFCq4L2r/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2021%20PM%20(5).jpg",alt: "Vitral sacro para comunidades religiosas" },
        { src: "https://i.postimg.cc/0QtjQJ1t/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2022%20PM%20(2).jpg",alt: "Vitral sacro con ángeles custodios" },
        { src: "https://i.postimg.cc/SsZRszb1/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2022%20PM%20(3).jpg",alt: "Vitral sacro decoración de templos modernos" },
        { src: "https://i.postimg.cc/76Bh6Tyv/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2024%20PM.jpg",      alt: "Vitral moderno diseño de autor" },
        { src: "https://i.postimg.cc/gJMjJ6bB/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2024%20PM%20(1).jpg",alt: "Vitral decorativo para iluminación interior" },
        { src: "https://i.postimg.cc/xCs8CbVZ/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2024%20PM%20(3).jpg",alt: "Vitral artesanal para puertas de madera" },
        { src: "https://i.postimg.cc/mDdkDFWq/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2024%20PM%20(4).jpg",alt: "Vitral artístico con vidrios texturizados" },
        { src: "https://i.postimg.cc/pT0rTnMg/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2024%20PM%20(5).jpg",alt: "Vitral decorativo para salones y recepciones" },
        { src: "https://i.postimg.cc/B6hb61fr/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2024%20PM%20(7).jpg",alt: "Obra en vitral con colores cálidos" },
        { src: "https://i.postimg.cc/XJ2qJy04/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2025%20PM.jpg",      alt: "Maestro artesano del vitral en Chía" },
        { src: "https://i.postimg.cc/j5825JrY/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2025%20PM%20(1).jpg",alt: "Vitral artístico con vidrios opalescentes" },
        { src: "https://i.postimg.cc/4d8ydhTG/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2025%20PM%20(2).jpg",alt: "Vitral decorativo con diseño orgánico" },
        { src: "https://i.postimg.cc/mDdkDFGt/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2026%20PM.jpg",      alt: "Vitral para ventanas de estilo gótico" },
        { src: "https://i.postimg.cc/W39z3JPp/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2026%20PM%20(2).jpg",alt: "Vidrio pintado a mano para vitrales" },
        { src: "https://i.postimg.cc/xCs8CbSf/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2026%20PM%20(3).jpg",alt: "Vitral artístico con técnica de Tiffany" },
        { src: "https://i.postimg.cc/d1W31TK3/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2026%20PM%20(4).jpg",alt: "Vitral decorativo para oficinas modernas" },
        { src: "https://i.postimg.cc/9Mx0MqjM/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2026%20PM%20(5).jpg",alt: "Detalle artístico en vidrio para vitrales" },
        { src: "https://i.postimg.cc/cHDCH8Nv/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2026%20PM%20(6).jpg",alt: "Restauración de vidriería artística antigua" },
        { src: "https://i.postimg.cc/D08Zby27/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2027%20PM.jpg",      alt: "Vitral artesanal para tragaluces de techo" },
        { src: "https://i.postimg.cc/bJ6rJ2jG/Whats%20App%20Image%202026%2002%2019%20at%203%2025%2027%20PM%20(1).jpg",alt: "Vitral artístico con diseño de paisaje" },
        { src: "https://i.postimg.cc/kXLVK8RR/Whats%20App%20Image%202026%2002%2019%20at%203%2043%2046%20PM.jpg",      alt: "Vitral decorativo con marcos de madera" },
        { src: "https://i.postimg.cc/4NjKVtHp/Whats%20App%20Image%202026%2002%2019%20at%203%2043%2046%20PM%20(1).jpg",alt: "Vitral artístico con flores silvestres" },
        { src: "https://i.postimg.cc/2Sv1w6nL/Whats%20App%20Image%202026%2002%2019%20at%203%2043%2047%20PM.jpg",      alt: "Vitral moderno para mamparas divisorias" },
        { src: "https://i.postimg.cc/rF7dxWRr/Whats%20App%20Image%202026%2002%2019%20at%203%2043%2047%20PM%20(1).jpg",alt: "Vitral artesanal con técnica tradicional" },
        { src: "https://i.postimg.cc/TYBygm5g/Whats%20App%20Image%202026%2002%2019%20at%203%2043%2047%20PM%20(2).jpg",alt: "Vitral artístico para lucernarios residenciales" },
        { src: "https://i.postimg.cc/sgSMcX5x/Whats%20App%20Image%202026%2002%2019%20at%203%2043%2047%20PM%20(3).jpg",alt: "Vitral decorativo con rombos y cristales" },
        { src: "https://i.postimg.cc/K8L1NztK/Whats%20App%20Image%202026%2002%2019%20at%203%2043%2047%20PM%20(4).jpg",alt: "Detalle de unión de plomo en vitral profesional" },
        { src: "https://i.postimg.cc/mgMPwD7z/Whats%20App%20Image%202026%2002%2019%20at%203%2043%2047%20PM%20(5).jpg",alt: "Vitral artístico con diseño para escaleras" },
        { src: "https://i.postimg.cc/0ymzfQ7X/Whats%20App%20Image%202026%2002%2019%20at%203%2043%2048%20PM.jpg",      alt: "Vitral decorativo para puertas interiores" },
        { src: "https://i.postimg.cc/wjJ1VvDs/Whats%20App%20Image%202026%2002%2019%20at%203%2043%2048%20PM%20(1).jpg",alt: "Vitral artístico con vidrios de colores traslúcidos" },
        { src: "https://i.postimg.cc/htxXrjVT/Whats%20App%20Image%202026%2002%2019%20at%203%2043%2048%20PM%20(2).jpg",alt: "Vitral artesanal para casas de campo" },
        { src: "https://i.postimg.cc/K8L1Nztt/Whats%20App%20Image%202026%2002%2019%20at%203%2043%2048%20PM%20(3).jpg",alt: "Vitral artístico con ensamble de calidad" },
        { src: "https://i.postimg.cc/sgSMcX5S/Whats%20App%20Image%202026%2002%2019%20at%203%2043%2048%20PM%20(4).jpg",alt: "Vitral decorativo para ambientes clásicos" },
        { src: "https://i.postimg.cc/MpRnDT1s/Whats%20App%20Image%202026%2002%2019%20at%203%2043%2048%20PM%20(6).jpg",alt: "Vitral artístico con vidrios martillados" },
        { src: "https://i.postimg.cc/cLYvmHfX/Whats%20App%20Image%202026%2002%2019%20at%203%2043%2048%20PM%20(7).jpg",alt: "Vitral artesanal para muebles empotrados" },
        { src: "https://i.postimg.cc/T3mK9wnF/Whats%20App%20Image%202026%2002%2019%20at%203%2043%2049%20PM.jpg",      alt: "Vitral artístico para separadores de sala" },
        { src: "https://i.postimg.cc/bwbZTJ1F/Whats%20App%20Image%202026%2002%2019%20at%203%2043%2049%20PM%20(1).jpg",alt: "Vitral decorativo con cristales facetados" },
        { src: "https://i.postimg.cc/xd2cF2PR/Whats%20App%20Image%202026%2002%2019%20at%203%2043%2049%20PM%20(2).jpg",alt: "Vitral artístico con bordes biselados" },
        { src: "https://i.postimg.cc/LXsjrw3t/logo1.png",                                             alt: "Logotipo oficial de Vitrales Chía" },
        { src: "https://i.postimg.cc/vZcHYy2Q/Whats-App-Image-2026-03-12-at-8-00-19-PM.jpg",          alt: "Vitral artesanal diseño contemporáneo Chía" },
        { src: "https://i.postimg.cc/wj7Tqz4p/Whats-App-Image-2026-03-12-at-8-00-19-PM-(1).jpg",      alt: "Vitral decorativo artístico profesional" },
        { src: "https://i.postimg.cc/t4YCqbvb/Whats-App-Image-2026-03-12-at-8-00-19-PM-(2).jpg",      alt: "Vitral artístico con técnica de pintura en frío" },
        { src: "https://i.postimg.cc/g2nkzptP/Whats-App-Image-2026-03-12-at-8-00-19-PM-(3).jpg",      alt: "Vitral artesanal para lucernarios modernos" },
        { src: "https://i.postimg.cc/YqXCB0RS/Whats-App-Image-2026-03-12-at-8-00-19-PM-(4).jpg",      alt: "Vitral sacro vidriería artística para parroquias" },
        { src: "https://i.postimg.cc/Nj5fstCY/Whats-App-Image-2026-03-12-at-8-00-19-PM-(5).jpg",      alt: "Vitral artístico con diseño de paloma espiritual" },
        { src: "https://i.postimg.cc/9QrFm2gm/Whats-App-Image-2026-03-12-at-8-00-19-PM-(6).jpg",      alt: "Vitral decorativo con flores de colores vivos" },
        { src: "https://i.postimg.cc/dVLtsFNk/Whats-App-Image-2026-03-12-at-8-00-20-PM.jpg",          alt: "Vitral artístico para ventanas residenciales Chía" },
        { src: "https://i.postimg.cc/dVLtsFNt/Whats-App-Image-2026-03-12-at-8-00-20-PM-(1).jpg",      alt: "Restauración técnica de vitrales históricos profesionales" },
        { src: "https://i.postimg.cc/HkVsYmvL/Whats-App-Image-2026-03-12-at-8-00-20-PM-(2).jpg",      alt: "Ensamble artístico de vitral con técnica de plomo" },
        { src: "https://i.postimg.cc/VkdLfwZv/Whats-App-Image-2026-03-12-at-8-00-20-PM-(3).jpg",      alt: "Vitral artesanal con vidrios de catedral" },
        { src: "https://i.postimg.cc/XYp7jW1X/Whats-App-Image-2026-03-12-at-8-00-20-PM-(4).jpg",      alt: "Vitral artístico diseño para puertas y ventanas" },
        { src: "https://i.postimg.cc/pLpXWvcm/Whats-App-Image-2026-03-12-at-8-00-20-PM-(5).jpg",      alt: "Vitral decorativo con ornamentos artesanales" },
    ];

    // =========================================================================
    // LIGHTBOX — Visor de imágenes
    // =========================================================================
    const lightbox     = document.getElementById('lightbox');
    const imgAmpliada  = document.getElementById('img-ampliada');
    const btnCerrar    = document.querySelector('.cerrar-lightbox');

    function abrirLightbox(src, alt) {
        imgAmpliada.src = src;
        imgAmpliada.alt = alt || 'Imagen de vitral';
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    const cerrarVisor = () => {
        lightbox.style.display = 'none';
        imgAmpliada.src = '';
        document.body.style.overflow = 'auto';
    };

    btnCerrar.addEventListener('click', cerrarVisor);
    lightbox.addEventListener('click', e => { if (e.target === lightbox) cerrarVisor(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') cerrarVisor(); });

    // Delegar clic en la galería (funciona para imágenes creadas dinámicamente)
    document.getElementById('galeria-fotos').addEventListener('click', e => {
        const img = e.target.closest('img');
        if (img) abrirLightbox(img.src, img.alt);
    });

    // También permitir clic en las imágenes estáticas de otras secciones
    document.querySelectorAll('.card-galeria img').forEach(img => {
        if (!img.closest('#btn-ir-fotos')) {
            img.addEventListener('click', () => abrirLightbox(img.src, img.alt));
        }
    });

    // =========================================================================
    // NAVEGACIÓN SPA
    // =========================================================================
    const secciones   = document.querySelectorAll('.seccion-spa');
    const enlacesNav  = document.querySelectorAll('.nav-link');
    const btnIrFotos  = document.getElementById('btn-ir-fotos');

    // MEJORA 5: Títulos actualizados al navegar
    const titulos = {
        'vista-inicio':           'Vitrales Chía | Arte y Diseño en Vidrio',
        'vista-nuestros-trabajos':'Galería de Trabajos | Vitrales Chía',
        'vista-fotos-detallada':  'Galería Completa | Vitrales Chía'
    };

    // MEJORA 3: Marcar enlace activo en el nav
    function actualizarNavActivo(vista) {
        enlacesNav.forEach(a => {
            a.classList.remove('nav-activo');
            if (a.getAttribute('data-vista') === vista ||
                a.getAttribute('data-target') === vista) {
                a.classList.add('nav-activo');
            }
        });
    }

    // MEJORA 2: Transición fade suave entre secciones
    function cambiarVista(targetId, scrollTargetId = null) {
        const objetivo = document.getElementById(targetId);
        if (!objetivo) return;

        // Ocultar todas con fade-out
        secciones.forEach(s => {
            if (s.style.display !== 'none') {
                s.style.opacity = '0';
                setTimeout(() => { s.style.display = 'none'; s.style.opacity = ''; }, 180);
            } else {
                s.style.display = 'none';
            }
        });

        // Mostrar la nueva con fade-in después de 180ms
        setTimeout(() => {
            objetivo.style.display  = 'block';
            objetivo.style.opacity  = '0';
            objetivo.style.transition = 'opacity 0.2s ease';
            requestAnimationFrame(() => {
                requestAnimationFrame(() => { objetivo.style.opacity = '1'; });
            });

            if (titulos[targetId]) document.title = titulos[targetId];
            actualizarNavActivo(targetId);

            if (scrollTargetId) {
                setTimeout(() => {
                    const el = document.getElementById(scrollTargetId);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 220);
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }, 180);
    }

    // Registrar clics en todos los nav-link
    enlacesNav.forEach(enlace => {
        enlace.addEventListener('click', e => {
            const target = enlace.getAttribute('data-target');
            if (target) {
                e.preventDefault();
                cambiarVista(target, enlace.getAttribute('data-scroll'));
            }
        });
    });

    // =========================================================================
    // MEJORA 1: Carga diferida de galería
    // Las imágenes se inyectan SOLO al abrir "Ver Galería Completa"
    // =========================================================================
    let galeriaYaCargada = false;

    function cargarGaleria() {
        if (galeriaYaCargada) return;
        galeriaYaCargada = true;

        const contenedor = document.getElementById('galeria-fotos');
        const loading    = document.getElementById('galeria-loading');
        loading.style.display = 'block';

        // Usar requestIdleCallback si está disponible, sino setTimeout
        const encolar = window.requestIdleCallback || (cb => setTimeout(cb, 50));

        let i = 0;
        function insertarLote() {
            const lote = 20; // insertar de a 20 para no bloquear el hilo principal
            const fin  = Math.min(i + lote, IMAGENES_GALERIA.length);
            for (; i < fin; i++) {
                const { src, alt } = IMAGENES_GALERIA[i];
                const div = document.createElement('div');
                div.className = 'foto-miniatura card-galeria';
                // MEJORA 9: onerror en cada imagen de galería
                div.innerHTML = `<img loading="lazy" src="${src}" alt="${alt}"
                    onerror="this.src='https://i.postimg.cc/wxZWBKGg/icon%20page.png'; this.alt='Imagen no disponible';">`;
                contenedor.appendChild(div);
            }
            if (i < IMAGENES_GALERIA.length) {
                encolar(insertarLote);
            } else {
                loading.style.display = 'none';
            }
        }
        encolar(insertarLote);
    }

    if (btnIrFotos) {
        btnIrFotos.addEventListener('click', () => {
            cambiarVista('vista-fotos-detallada');
            cargarGaleria();
        });
    }

    // Estado inicial: marcar "Inicio" como activo
    actualizarNavActivo('vista-inicio');
});
