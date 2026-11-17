/* ============================================
   Grupo PAS — Aula Virtual · Catálogo de cursos
   ============================================

   ESTE ES EL ÚNICO ARCHIVO QUE HAY QUE TOCAR PARA CARGAR CONTENIDO.
   No hace falta editar HTML ni CSS: agregás un objeto acá y la clase
   aparece sola en el aula, con su tarjeta, su filtro y su reproductor.

   --------------------------------------------
   CÓMO AGREGAR UNA CLASE NUEVA
   --------------------------------------------
   Copiá este bloque, pegalo dentro de CURSOS y completalo:

     {
       id: 'un-nombre-corto-sin-espacios',
       titulo: 'Cómo cargar una póliza en Polko',
       resumen: 'Una o dos líneas explicando qué se lleva el PAS.',
       categoria: 'polko',          // ver CATEGORIAS más abajo
       duracion: '8 min',
       youtube: 'dQw4w9WgXcQ'       // ver cómo sacar el ID acá abajo
     },

   --------------------------------------------
   DE DÓNDE SALE EL ID DE YOUTUBE
   --------------------------------------------
   Es la parte final del link, después de "v=".

     https://www.youtube.com/watch?v=dQw4w9WgXcQ   ->  dQw4w9WgXcQ
     https://youtu.be/dQw4w9WgXcQ                  ->  dQw4w9WgXcQ

   Pegá SOLO ese código, no el link entero.

   IMPORTANTE: el video tiene que estar en YouTube como "Público" o
   "No listado". Los "Privados" NO se pueden embeber: muestran un
   cartel de error dentro del aula.

   --------------------------------------------
   LOS TRES TIPOS DE CONTENIDO
   --------------------------------------------
   Cada clase puede tener UNO de estos tres campos:

     youtube: 'ID'                        -> video de YouTube
     archivo: 'assets/video/algo.mp4'     -> video subido al sitio
     material: 'https://drive.google...'  -> PDF, planilla o carpeta de Drive

   Si todavía no tenés el video, dejá los tres afuera: la clase se
   muestra igual con el cartel "Próximamente", que sirve para anunciar
   lo que viene.

   --------------------------------------------
   CAMPOS OPCIONALES
   --------------------------------------------
     destacado: true      -> la clase aparece arriba de todo, más grande
     poster: 'ruta.jpg'   -> miniatura propia (si no, se usa la de YouTube)
     docente: 'Nombre'    -> quién dicta la clase
============================================ */

/* Las categorías del aula. El orden de acá es el orden de los filtros.
   Para agregar una, sumá una línea y usá su clave en las clases.       */
const CATEGORIAS = [
  { clave: 'polko',          nombre: 'Plataforma Polko' },
  { clave: 'talleres',       nombre: 'Talleres de Formación' },
  { clave: 'ramos',          nombre: 'Ramos y productos' },
  { clave: 'sistemas',       nombre: 'Sistemas de compañías' },
  { clave: 'comercial',      nombre: 'Comercial y ventas' },
  { clave: 'asesor',         nombre: 'Asesor en Acción' },
  { clave: 'normativa',      nombre: 'Normativa y actualidad' },
  { clave: 'entrevistas',    nombre: 'Entrevistas y charlas' },
  { clave: 'companias',      nombre: 'Compañías' },
  { clave: 'institucional',  nombre: 'Grupo PAS' },
];

/* 180 clases. Las de YouTube salen de los canales @SomosPolko y
   @grupopasmarketing, relevados el 10 de septiembre de 2026.           */
const CURSOS = [

  /* ---------- Videos propios del sitio (no son de YouTube) ---------- */

  {
    id: 'que-es-polko',
    titulo: '¿Qué es Polko?',
    resumen: 'La plataforma digital de Grupo PAS explicada en dos minutos: qué resuelve y por qué te conviene operar desde ahí.',
    categoria: 'polko',
    duracion: '2 min',
    archivo: 'assets/video/que-es-polko.mp4',
    poster: 'assets/video/polko-poster.jpg',
    destacado: true
  },
  {
    id: 'bienvenida-raul',
    titulo: 'Bienvenida a Grupo PAS',
    resumen: 'Raúl te cuenta de dónde venimos, cómo trabajamos y qué podés esperar de la organización.',
    categoria: 'institucional',
    duracion: '3 min',
    archivo: 'assets/video/raul.mp4',
    poster: 'assets/video/raul-poster.jpg',
    docente: 'Raúl',
    destacado: true
  },

  /* ---------- Plataforma Polko (32) ---------- */
  {
    id: 'modulo-estadisticas-charla-informativa',
    titulo: 'Módulo "ESTADÍSTICAS" - Charla Informativa',
    categoria: 'polko',
    duracion: '35:34',
    youtube: 'ntH--ZNA0qk'
  },
  {
    id: 'nuevo-modulo-mis-estadisticas',
    titulo: 'Nuevo Módulo Mis Estadísticas',
    categoria: 'polko',
    duracion: '3:07',
    youtube: 'dVxDfjGrupU'
  },
  {
    id: 'presentacion-compra-protegida',
    titulo: 'Presentación Compra Protegida',
    categoria: 'polko',
    duracion: '7:57',
    youtube: '657S9EhNjzE'
  },
  {
    id: 'cotizacion-en-cascada',
    titulo: 'Cotización en Cascada',
    categoria: 'polko',
    duracion: '0:26',
    youtube: '54DOwhFDjEY'
  },
  {
    id: 'nosis',
    titulo: 'NOSIS',
    categoria: 'polko',
    duracion: '0:36',
    youtube: '1tj9Lrx2cFU'
  },
  {
    id: 'compra-protegida',
    titulo: 'Compra Protegida',
    categoria: 'polko',
    duracion: '1:28',
    youtube: 'tlucEpFzgq4'
  },
  {
    id: 'como-solicitar-codigo-desde-polko-guia',
    titulo: '¿Cómo solicitar Código desde Polko? - Guía Rápida',
    categoria: 'polko',
    duracion: '1:32',
    youtube: 'bswrGVpAEIo'
  },
  {
    id: 'cotizar-y-emitir-asistencia-al-viajero',
    titulo: 'Cotizar y Emitir Asistencia al Viajero - Guía Rápida',
    categoria: 'polko',
    duracion: '1:37',
    youtube: 'W8lb7sykKd8'
  },
  {
    id: 'como-emitir-hogar-desde-polko-guia',
    titulo: '¿Cómo emitir hogar desde Polko? - Guía rápida',
    categoria: 'polko',
    duracion: '0:39',
    youtube: 'yrbqS7Js7vw'
  },
  {
    id: 'cotizar-hogar-guia-rapida',
    titulo: 'Cotizar hogar - Guía Rápida',
    categoria: 'polko',
    duracion: '1:44',
    youtube: 'OV6VVttHiNI'
  },
  {
    id: 'como-emitir-microseguros',
    titulo: '¿Cómo emitir Microseguros?',
    categoria: 'polko',
    duracion: '1:37',
    youtube: '8OFxqIwBKHU'
  },
  {
    id: 'cotizar-microseguros-guia-rapida',
    titulo: 'Cotizar microseguros - Guía Rápida',
    categoria: 'polko',
    duracion: '1:06',
    youtube: 's-lRAjYUfq8'
  },
  {
    id: 'como-aplicar-descuentos-por-retencion-guia',
    titulo: '¿Cómo aplicar descuentos por retención? - Guía Rápida',
    categoria: 'polko',
    duracion: '1:20',
    youtube: '7wYY9w_PZ3Q'
  },
  {
    id: 'vinculacion-de-polkistas-guia-rapida',
    titulo: 'Vinculación de Polkistas - Guía Rápida',
    categoria: 'polko',
    duracion: '1:20',
    youtube: 'dnJqxKw-VUY'
  },
  {
    id: 'como-funciona-el-modulo-de-billetera',
    titulo: '¿Cómo funciona el módulo de Billetera? - Guía rápida',
    categoria: 'polko',
    duracion: '0:56',
    youtube: 'W-UO8ORvKh4'
  },
  {
    id: 'suscribir-un-acuerdo-desde-polko-guia',
    titulo: 'Suscribir un Acuerdo desde Polko - Guía rápida',
    categoria: 'polko',
    duracion: '1:10',
    youtube: 'jX17luEy2jo'
  },
  {
    id: 'cotizar-en-polko-guia-rapida',
    titulo: 'Cotizar en Polko - Guía rápida',
    categoria: 'polko',
    duracion: '2:38',
    youtube: 'hsD887i-gE4'
  },
  {
    id: 'como-armar-tu-canal-digital-en',
    titulo: '¿Cómo armar tu Canal Digital en Polko? - Tu propia página web',
    categoria: 'polko',
    duracion: '2:07',
    youtube: 'CZUFfNBS3uw'
  },
  {
    id: 'todo-sobre-asistencia-al-viajero-con',
    titulo: '💼 Todo sobre Asistencia al Viajero con Terrawind | Capacitación Polko',
    categoria: 'polko',
    duracion: '57:02',
    youtube: '-fyVaFQ-F-o'
  },
  {
    id: 'conoce-polko',
    titulo: 'Conocé Polko 🚀',
    categoria: 'polko',
    duracion: '0:50',
    youtube: 'SgHthuIZ5I0'
  },
  {
    id: 'como-crear-tu-usuario-en-polko',
    titulo: '¿Cómo crear tu usuario en Polko?',
    categoria: 'polko',
    duracion: '1:36',
    youtube: 'YpePnBm7Ht0'
  },
  {
    id: 'webinar-polko-novedades-y-lanzamientos',
    titulo: 'Webinar Polko - Novedades y Lanzamientos',
    categoria: 'polko',
    duracion: '52:43',
    youtube: 'heHw7IczbGg'
  },
  {
    id: 'canal-digital-emitir-auto',
    titulo: 'Canal Digital | Emitir Auto',
    categoria: 'polko',
    duracion: '0:29',
    youtube: 'Zo1nQLczH7o'
  },
  {
    id: 'canal-digital-cotizar-auto',
    titulo: 'Canal Digital | Cotizar Auto',
    categoria: 'polko',
    duracion: '0:23',
    youtube: 'KiinSwIk0xc'
  },
  {
    id: 'modulo-producto-cotizar-auto',
    titulo: 'Módulo: Producto | Cotizar Auto',
    categoria: 'polko',
    duracion: '0:34',
    youtube: 'vPle3IbkDjs'
  },
  {
    id: 'modulo-productos-emitir-auto',
    titulo: 'Módulo: Productos | Emitir Auto',
    categoria: 'polko',
    duracion: '0:37',
    youtube: 'wFW7m9AQ9wc'
  },
  {
    id: 'modulo-master-vinculacion-polkista',
    titulo: 'Módulo: Master | Vinculación Polkista',
    categoria: 'polko',
    duracion: '0:13',
    youtube: 'Vwou1av0fG4'
  },
  {
    id: 'modulo-marketing',
    titulo: 'Módulo: Marketing',
    categoria: 'polko',
    duracion: '0:15',
    youtube: 'RR20d2zxkI4'
  },
  {
    id: 'modulo-documentacion',
    titulo: 'Módulo: Documentación',
    categoria: 'polko',
    duracion: '0:14',
    youtube: 'sVjESRcjf_M'
  },
  {
    id: 'modulo-billetera',
    titulo: 'Módulo: Billetera',
    categoria: 'polko',
    duracion: '0:17',
    youtube: 'cril4r3kW7o'
  },
  {
    id: 'modulo-canal-digital',
    titulo: 'Módulo: Canal Digital',
    categoria: 'polko',
    duracion: '0:40',
    youtube: 'PccZ5l3yDRI'
  },
  {
    id: 'modulo-academia',
    titulo: 'Módulo: Academia',
    categoria: 'polko',
    duracion: '0:27',
    youtube: 'A8wosQXqCEQ'
  },

  /* ---------- Talleres de Formación (17) ---------- */
  {
    id: 'taller-de-formacion-art',
    titulo: 'Taller de Formación - ART',
    categoria: 'talleres',
    duracion: '1:08:39',
    youtube: 'An19TuVKqzw'
  },
  {
    id: 'taller-de-formacion-integral-de-comercio',
    titulo: 'Taller de Formación - Integral de Comercio + RC Sancor',
    categoria: 'talleres',
    duracion: '1:05:59',
    youtube: 'LiPCBvy0F3Q'
  },
  {
    id: 'taller-de-formacion-agro',
    titulo: 'Taller de Formación - Agro',
    categoria: 'talleres',
    duracion: '1:09:09',
    youtube: 'LOylh7GNcow'
  },
  {
    id: 'taller-de-formacion-flotas-automotor',
    titulo: 'Taller de Formación - Flotas Automotor',
    categoria: 'talleres',
    duracion: '36:46',
    youtube: 'TfWAUjQlDGs'
  },
  {
    id: 'taller-de-formacion-flotas',
    titulo: 'Taller de Formación - Flotas',
    categoria: 'talleres',
    duracion: '1:04:07',
    youtube: 'yqZEoKYCs2E'
  },
  {
    id: 'taller-de-formacion-finanzas-y-siniestros',
    titulo: 'Taller de Formación - Finanzas y Siniestros TRIUNFO',
    categoria: 'talleres',
    duracion: '39:44',
    youtube: 'bcUmXxfKYRQ'
  },
  {
    id: 'taller-de-formacion-caucion',
    titulo: 'Taller de Formación - Caución',
    categoria: 'talleres',
    duracion: '59:43',
    youtube: 'ZVIYTfP767E'
  },
  {
    id: 'taller-de-accidentes-personales-sancor',
    titulo: 'Taller de Accidentes Personales - Sancor',
    categoria: 'talleres',
    duracion: '1:17:55',
    youtube: 'gF1dNkWQ0MM'
  },
  {
    id: 'taller-de-formacion-mercantil-andina',
    titulo: 'Taller de Formación - Mercantil Andina',
    categoria: 'talleres',
    duracion: '38:37',
    youtube: 'M03RH0XdvjU'
  },
  {
    id: 'taller-de-formacion-finanzas-atm',
    titulo: 'Taller de Formación - Finanzas ATM',
    categoria: 'talleres',
    duracion: '58:45',
    youtube: 'hcjFCQvBPmE'
  },
  {
    id: 'taller-de-formacion-prevencion-salud',
    titulo: 'Taller de Formación - Prevención Salud',
    categoria: 'talleres',
    duracion: '1:04:20',
    youtube: 'clt-tTZ9MMI'
  },
  {
    id: 'taller-de-formacion-art-2',
    titulo: 'Taller de Formación - ART',
    categoria: 'talleres',
    duracion: '1:02:47',
    youtube: 'OkYYI1XcCO0'
  },
  {
    id: 'taller-de-formacion-sancor-finanzas-y',
    titulo: 'Taller de Formación - Sancor: Finanzas y Siniestros',
    categoria: 'talleres',
    duracion: '1:07:42',
    youtube: 'byNiyWVpDKc'
  },
  {
    id: 'taller-de-formacion-flota',
    titulo: 'Taller de Formación - Flota',
    categoria: 'talleres',
    duracion: '30:21',
    youtube: 'sM7JHtf8xZs'
  },
  {
    id: 'taller-de-formacion-zurich-siniestros-y',
    titulo: 'Taller de Formación Zurich - Siniestros y Finanzas',
    categoria: 'talleres',
    duracion: '57:27',
    youtube: 'tPn7l_BI9VA'
  },
  {
    id: '1-taller-de-formacion-2026-sancor',
    titulo: '1° TALLER DE FORMACIÓN 2026 – SANCOR SEGUROS',
    categoria: 'talleres',
    duracion: '47:03',
    youtube: '3VWQLsDVD0k'
  },
  {
    id: 'wokshop-escuela-de-negocios-2025-potencia',
    titulo: 'Wokshop: Escuela de Negocios 2025 - Potencía tus ventas como Productor de Seguros 🚀',
    categoria: 'talleres',
    duracion: '1:28:43',
    youtube: '1uObQJ2y944'
  },

  /* ---------- Ramos y productos (42) ---------- */
  {
    id: 'capacitacion-especial-art',
    titulo: 'Capacitación Especial - ART',
    categoria: 'ramos',
    duracion: '1:20:20',
    youtube: 'FPJkFL245gk'
  },
  {
    id: 'charla-informativa-art-campana-del-mes',
    titulo: 'Charla Informativa ART - Campaña del Mes de Febrero 2026',
    categoria: 'ramos',
    duracion: '54:09',
    youtube: 'HxkYI9IQ_qE'
  },
  {
    id: 'asistencia-al-viajero-con-tu-poliza',
    titulo: 'Asistencia al Viajero con tu póliza de Sancor - Cómo descargar',
    categoria: 'ramos',
    duracion: '0:44',
    youtube: 'RUuu3LXWG7w'
  },
  {
    id: 'accidentes-personales',
    titulo: 'Accidentes Personales',
    categoria: 'ramos',
    duracion: '1:08',
    youtube: 'giTuzy-vWEo'
  },
  {
    id: 'como-se-liquidan-los-siniestros-en',
    titulo: '¿Cómo se liquidan los Siniestros en seguros?',
    categoria: 'ramos',
    duracion: '37:02',
    youtube: 'qIqmm83PiO4'
  },
  {
    id: 'preparate-para-la-temporada-asistencia-al',
    titulo: 'Preparate para la temporada: Asistencia al Viajero con Terrawind',
    categoria: 'ramos',
    duracion: '22:35',
    youtube: 'uEwWoVy0GGA'
  },
  {
    id: 'flotas-oportunidades-comerciales-cotizacion-y',
    titulo: 'FLOTAS - Oportunidades Comerciales, Cotización y Emisión',
    categoria: 'ramos',
    duracion: '31:50',
    youtube: 'bfokiDG1GCw'
  },
  {
    id: 'integral-de-comercio-vs-tro-con',
    titulo: 'Integral de Comercio vs TRO con Raúl Fraire',
    categoria: 'ramos',
    duracion: '1:20:07',
    youtube: 'QzdPm8V8BT8'
  },
  {
    id: 'primera-jornada-seguroscorporativos-ap-y-ley',
    titulo: 'Primera Jornada SegurosCorporativos - AP y Ley de Riesgos del Trabajo',
    categoria: 'ramos',
    duracion: '57:12',
    youtube: 'QgplKrJQPMs'
  },
  {
    id: 'aprende-a-vender-seguros-de-agro',
    titulo: 'Aprendé a vender seguros de Agro en Federación Patronal',
    categoria: 'ramos',
    duracion: '1:20:15',
    youtube: 'LPVjQT9cOzo'
  },
  {
    id: 'aprende-a-vender-seguros-de-agro-2',
    titulo: 'Aprendé a vender seguros de Agro en Sancor',
    categoria: 'ramos',
    duracion: '1:10:45',
    youtube: 'yzB4Ixysc84'
  },
  {
    id: 'preparate-para-la-temporada-de-viajes',
    titulo: 'PREPARATE PARA LA TEMPORADA DE VIAJES - TERRAWIND',
    categoria: 'ramos',
    duracion: '1:18:34',
    youtube: '_kG_oXICqFg'
  },
  {
    id: 'todo-lo-que-tenes-que-saber',
    titulo: 'Todo lo que tenés que saber para vender Seguros de Vida con Caruso Seguros 💼',
    categoria: 'ramos',
    duracion: '57:47',
    youtube: '-FYQs8p33Ns'
  },
  {
    id: 'lanzamiento-ap-accidentes-personales-2025',
    titulo: 'Lanzamiento AP (Accidentes Personales) 2025 🚀',
    categoria: 'ramos',
    duracion: '38:38',
    youtube: 'acWkbb8D9SQ'
  },
  {
    id: 'como-vender-seguros-de-vida-y',
    titulo: 'Cómo vender seguros de Vida y Retiro | Estrategias y claves para PAS',
    categoria: 'ramos',
    duracion: '1:33:30',
    youtube: 'vwkEf4x4LEU'
  },
  {
    id: 'lanzamiento-de-retiro-en-grupo-pas',
    titulo: '🚀 Lanzamiento de Retiro en Grupo PAS | Cotizador exclusivo y equipo 2025',
    categoria: 'ramos',
    duracion: '1:03:26',
    youtube: 'B7lGie1452E'
  },
  {
    id: 'accidentes-personales-balance-del-ano-y',
    titulo: '🛡️ Accidentes Personales: Balance del año y un caso de éxito imperdible',
    categoria: 'ramos',
    duracion: '44:51',
    youtube: 'Q2rLKcPHwvA'
  },
  {
    id: 'creditos-prendarios-como-aprovecharlos-para-po',
    titulo: 'Créditos prendarios: Cómo aprovecharlos para potenciar tus ventas | Estrategias para PAS 💼',
    categoria: 'ramos',
    duracion: '1:11:03',
    youtube: 'DimXtzqW0TA'
  },
  {
    id: 'como-vender-seguros-de-vida-caruso',
    titulo: '🤔 ¿Cómo vender seguros de vida? - Caruso x Grupo PAS',
    categoria: 'ramos',
    duracion: '1:05:54',
    youtube: 'LdnVP4tgk2c'
  },
  {
    id: 'seguros-para-directores-y-gerentes',
    titulo: 'Seguros para directores y gerentes 🤝',
    categoria: 'ramos',
    duracion: '6:01',
    youtube: 'LQHVDcMIYh8'
  },
  {
    id: '5to-ciclo-ap-listo-para-los',
    titulo: '5to Ciclo AP - ¿Listo para los tips que aseguran tu éxito? 🔑',
    categoria: 'ramos',
    duracion: '55:56',
    youtube: 'NaNXrBmeXrs'
  },
  {
    id: 'seguro-para-comercios-lo-valioso-de',
    titulo: 'Seguro para comercios: Lo valioso de su contratación',
    categoria: 'ramos',
    duracion: '9:27',
    youtube: '4w7i_DXWqHM'
  },
  {
    id: 'ap-siniestros-como-actuar-en-caso',
    titulo: 'AP Siniestros: ¿Cómo actuar en caso de uno?',
    categoria: 'ramos',
    duracion: '48:24',
    youtube: '1iCLjE2cpcc'
  },
  {
    id: 'aprende-sobre-accidentes-personales-en-deporte',
    titulo: 'Aprendé sobre Accidentes Personales en Deportes, colegios y eventos 🏃',
    categoria: 'ramos',
    duracion: '1:06:32',
    youtube: '-iWymIVLeiU'
  },
  {
    id: 'seguro-de-agro-como-comercializarlo',
    titulo: 'Seguro de AGRO ¿Cómo comercializarlo?',
    categoria: 'ramos',
    duracion: '1:09:58',
    youtube: 'h2X7NM6zWlk'
  },
  {
    id: 'seguros-para-consocrios-cual-ofrecer',
    titulo: 'SEGUROS PARA CONSOCRIOS ¿Cuál ofrecer?',
    categoria: 'ramos',
    duracion: '8:29',
    youtube: 'fXd59gLutGw'
  },
  {
    id: 'incrementa-tus-ingresos-con-ap-y',
    titulo: 'Incrementá tus ingresos con AP y Vida - Caruso',
    categoria: 'ramos',
    duracion: '47:42',
    youtube: '3ITXXlaishQ'
  },
  {
    id: 'ap-actualizaciones-y-mejoras',
    titulo: 'AP - Actualizaciones y Mejoras ⬆️',
    categoria: 'ramos',
    duracion: '1:14:25',
    youtube: 'Qcc35cPrGq4'
  },
  {
    id: 'conoce-mas-sobre-seguros-de-caucion',
    titulo: 'Conocé más sobre seguros de caución - Sancor',
    categoria: 'ramos',
    duracion: '1:11:10',
    youtube: 'e9P_TCKSND4'
  },
  {
    id: 'aprende-sobre-automotor-en-rivadavia',
    titulo: 'Aprendé sobre automotor en Rivadavia',
    categoria: 'ramos',
    duracion: '1:04:58',
    youtube: '42cAUjf6egY'
  },
  {
    id: 'incrementa-tus-ventas-con-vida-y',
    titulo: 'Incrementa tus ventas con Vida y AP en Caruso',
    categoria: 'ramos',
    duracion: '42:18',
    youtube: 'HoJBmUyL-4o'
  },
  {
    id: 'lo-que-tenes-que-saber-sobre',
    titulo: 'Lo que tenés que saber sobre Banco del Sol como PAS',
    categoria: 'ramos',
    duracion: '51:33',
    youtube: '2sTvHBgRBvE'
  },
  {
    id: 'como-vender-vida-con-capitalizacion-y',
    titulo: '¿Cómo vender vida con capitalización y retiro?',
    categoria: 'ramos',
    duracion: '1:22:13',
    youtube: 'YPk75EVHgQY'
  },
  {
    id: 'ap-cafe-2-edicion-accidentes-personales',
    titulo: 'AP Café 2° Edición - Accidentes Personales y Siniestros',
    categoria: 'ramos',
    duracion: '46:45',
    youtube: '5XNGNx1XCfw'
  },
  {
    id: 'seguro-de-vida-en-caruso-dominalo',
    titulo: 'Seguro de Vida en Caruso - Dominalo a la perfección',
    categoria: 'ramos',
    duracion: '58:17',
    youtube: 'l0MsIlW6uA4'
  },
  {
    id: 'aprende-a-vender-art',
    titulo: 'Aprende a vender ART',
    categoria: 'ramos',
    duracion: '1:23:01',
    youtube: 'tr87RBhy8tw'
  },
  {
    id: 'ap-cafe-todo-lo-que-tenes',
    titulo: 'AP Café: Todo lo que tenés que saber para comercializar Accidentes Personales',
    categoria: 'ramos',
    duracion: '40:50',
    youtube: 'VR3YBhNjAVE'
  },
  {
    id: 'lo-que-tenes-que-saber-para',
    titulo: 'Lo que tenés que saber para vender Hogar Más - Rivadavia',
    categoria: 'ramos',
    duracion: '58:43',
    youtube: 'E6RT_GLwbJ4'
  },
  {
    id: 'ap-sancor-manejalo-a-la-perfeccion',
    titulo: 'AP SANCOR - Manejalo a la perfección',
    categoria: 'ramos',
    duracion: '1:10:20',
    youtube: 'hQ5I4QOTJiU'
  },
  {
    id: 'ap-rivadavia-dominalo-a-la-perfeccion',
    titulo: 'AP Rivadavia - Dominalo a la perfección',
    categoria: 'ramos',
    duracion: '44:27',
    youtube: '-2QLxNiC8D0'
  },
  {
    id: 'seguro-de-hogar-cobertura-premium-en',
    titulo: 'Seguro de Hogar: Cobertura Premium en SANCOR',
    categoria: 'ramos',
    duracion: '50:49',
    youtube: 'p8-1CqD_Bnc'
  },
  {
    id: 'seguro-de-agro-aprovecha-la-temporada',
    titulo: 'Seguro de AGRO - Aprovechá la temporada',
    categoria: 'ramos',
    duracion: '1:25:04',
    youtube: 'TcCCKd4B4Uc'
  },

  /* ---------- Sistemas de compañías (19) ---------- */
  {
    id: 'capacitacion-de-sistema-federacion-patronal-20',
    titulo: 'Capacitación de Sistema - Federación Patronal 2025',
    categoria: 'sistemas',
    duracion: '1:19:36',
    youtube: 'W1gW93f3ILs'
  },
  {
    id: 'conoce-el-sistema-de-zurich',
    titulo: 'Conocé el sistema de Zurich',
    categoria: 'sistemas',
    duracion: '29:22',
    youtube: 'rZjXfInKMpw'
  },
  {
    id: 'capacitacion-de-equis-nuevo-sistema-de',
    titulo: 'Capacitacion de EQUIS - Nuevo sistema de Caruso (Parte 1)',
    categoria: 'sistemas',
    duracion: '1:23:17',
    youtube: 'twMM9g3oYH0'
  },
  {
    id: 'capacitacion-de-equis-nuevo-sistema-de-2',
    titulo: 'Capacitacion de EQUIS - Nuevo sistema de Caruso (Parte 2)',
    categoria: 'sistemas',
    duracion: '1:19:49',
    youtube: 'JJV4swE8fXE'
  },
  {
    id: 'portal-de-cobranzas-aprende-a-usar',
    titulo: 'Portal de Cobranzas - Aprendé a usar el sistema NEO de Sancor Seguros',
    categoria: 'sistemas',
    duracion: '0:44',
    youtube: 'MJMtj9vBSBs'
  },
  {
    id: 'analisis-de-cuentas-morosidad-y-documentacion',
    titulo: 'Análisis de cuentas, morosidad y documentación en NEO | Charla Finanzas',
    categoria: 'sistemas',
    duracion: '1:56:23',
    youtube: 'VZbBlfZt7xU'
  },
  {
    id: 'portal-contacto-aprende-a-usar-el',
    titulo: 'Portal Contacto - Aprendé a usar el sistema NEO de Sancor Seguros',
    categoria: 'sistemas',
    duracion: '1:37',
    youtube: 'owQrIVsPnvk'
  },
  {
    id: 'modificar-poliza-aprende-a-usar-el',
    titulo: 'Modificar Póliza - Aprendé a usar el sistema NEO de Sancor Seguros',
    categoria: 'sistemas',
    duracion: '1:18',
    youtube: 'eU45IePuprI'
  },
  {
    id: 'buscar-poliza-aprende-a-usar-el',
    titulo: 'Buscar Póliza - Aprendé a usar el sistema NEO de Sancor Seguros',
    categoria: 'sistemas',
    duracion: '0:27',
    youtube: '3grm8E7j3Fs'
  },
  {
    id: 'documentacion-aprende-a-usar-el-sistema',
    titulo: 'Documentación - Aprendé a usar el sistema NEO de Sancor Seguros',
    categoria: 'sistemas',
    duracion: '1:05',
    youtube: 'R0G6nMtixFo'
  },
  {
    id: 'como-emitir-aprende-a-usar-el',
    titulo: '¿Cómo emitir? - Aprendé a usar el sistema NEO de Sancor Seguros',
    categoria: 'sistemas',
    duracion: '1:45',
    youtube: 'rdFHJHnLw30'
  },
  {
    id: 'como-cotizar-aprende-a-usar-el',
    titulo: '¿Cómo cotizar? - Aprendé a usar el sistema NEO de Sancor Seguros',
    categoria: 'sistemas',
    duracion: '1:28',
    youtube: '0auMkjXzCXQ'
  },
  {
    id: 'inicio-aprende-a-usar-el-sistema',
    titulo: 'Inicio - Aprendé a usar el sistema NEO de Sancor Seguros',
    categoria: 'sistemas',
    duracion: '1:08',
    youtube: 'Dx1AJiwB10o'
  },
  {
    id: 'aprende-a-usar-el-nuevo-sistema',
    titulo: 'Aprendé a usar el nuevo sistema NEO de Sancor',
    categoria: 'sistemas',
    duracion: '47:36',
    youtube: 'K9sHjZ4UyDQ'
  },
  {
    id: 'como-optimizar-tus-gestiones-con-el',
    titulo: 'Cómo optimizar tus gestiones con el Portal de Contacto (Neo) - Sancor',
    categoria: 'sistemas',
    duracion: '37:23',
    youtube: 'xicGdFAi_BI'
  },
  {
    id: 'conoce-el-sistema-cleas-a-fondo',
    titulo: 'Conocé el sistema CLEAS a fondo',
    categoria: 'sistemas',
    duracion: '27:51',
    youtube: 'Ey3SWorn_sM'
  },
  {
    id: 'aprende-a-usar-el-sistema-de',
    titulo: '🚨 Aprendé a usar el sistema de Sancor - Neo',
    categoria: 'sistemas',
    duracion: '34:34',
    youtube: 'Dcpcn1vZfAY'
  },
  {
    id: 'nuevo-sistema-en-sancor-aprende-a',
    titulo: 'Nuevo sistema en Sancor - Aprendé a usar NEO',
    categoria: 'sistemas',
    duracion: '1:06:18',
    youtube: 'bXZLayTXI50'
  },
  {
    id: 'nueva-visualizacion-de-consulta-de-saldos',
    titulo: 'Nueva visualización de consulta de saldos en Sancor - Finanzas Grupo PAS',
    categoria: 'sistemas',
    duracion: '54:08',
    youtube: 'QSCEyPWPoXQ'
  },

  /* ---------- Comercial y ventas (13) ---------- */
  {
    id: 'masterclass-para-vender-con-sancor-seguros',
    titulo: 'MasterClass para vender con Sancor Seguros',
    categoria: 'comercial',
    duracion: '40:22',
    youtube: 'sVaTJMnKKPY'
  },
  {
    id: 'estrategias-de-retencion',
    titulo: 'Estrategias de Retención',
    categoria: 'comercial',
    duracion: '1:10:38',
    youtube: '--GtA_LayBA'
  },
  {
    id: 'del-diferencial-a-la-supervivencia-futuro',
    titulo: 'Del DIFERENCIAL a la SUPERVIVENCIA: FUTURO TECNOLÓGICO del Productor de Seguros – Agustina De Carre',
    categoria: 'comercial',
    duracion: '38:57',
    youtube: 'z0TA_5fdKdk'
  },
  {
    id: 'secretos-de-coaching-para-pas',
    titulo: 'Secretos de Coaching para PAS',
    categoria: 'comercial',
    duracion: '32:15',
    youtube: 'CP9DaQ5zITI'
  },
  {
    id: 'saca-provecho-a-la-ia-siendo',
    titulo: 'Sacá provecho a la IA siendo PAS',
    categoria: 'comercial',
    duracion: '27:55',
    youtube: 'lCp8EHEFpJg'
  },
  {
    id: 'que-puede-aprender-la-industria-aseguradora',
    titulo: '¿Qué puede aprender la Industria Aseguradora del E-commerce?',
    categoria: 'comercial',
    duracion: '20:59',
    youtube: 'Obd5oEzFRZ0'
  },
  {
    id: 'como-abordar-comercialmente-a-inmobiliarias-si',
    titulo: 'Como abordar comercialmente a inmobiliarias siendo PAS',
    categoria: 'comercial',
    duracion: '13:58',
    youtube: 'qR9BTluYrYI'
  },
  {
    id: 'repasa-la-charla-completa-retencion-de',
    titulo: 'Repasá la charla completa: Retención de Cartera, Cobranza y Anulaciones en Sancor',
    categoria: 'comercial',
    duracion: '1:15:10',
    youtube: 'IDLHDY_hbCw'
  },
  {
    id: 'como-generar-relaciones-duraderas-con-tus',
    titulo: '🤝 Cómo generar relaciones duraderas con tus clientes | Claves para fidelizar y evitar cancelaciones',
    categoria: 'comercial',
    duracion: '54:22',
    youtube: 'fLkkfj5pSRk'
  },
  {
    id: 'descuentos-por-retenciones-no-pierdas-clientes',
    titulo: 'DESCUENTOS POR RETENCIONES ¡No pierdas clientes!',
    categoria: 'comercial',
    duracion: '34:27',
    youtube: 'ikNe3tbq4mw'
  },
  {
    id: 'la-importancia-del-pas-en-las',
    titulo: 'La importancia del PAS en las contrataciones',
    categoria: 'comercial',
    duracion: '5:55',
    youtube: 'mzkRaoMKvp0'
  },
  {
    id: 'estrategias-directas-e-indirectas-para-retener',
    titulo: 'Estrategias Directas e Indirectas para retener Clientes',
    categoria: 'comercial',
    duracion: '1:26:52',
    youtube: '7qqyy-IHpRw'
  },
  {
    id: 'cotiza-aprovechando-los-maximos-descuentos-en',
    titulo: 'Cotizá aprovechando los máximos descuentos en Caruso',
    categoria: 'comercial',
    duracion: '38:36',
    youtube: 'FPDGqz0qAuA'
  },

  /* ---------- Asesor en Acción (19) ---------- */
  {
    id: 'daniel-assale-el-rol-del-pas',
    titulo: 'Daniel Assale: El rol del PAS, APAS y la evolución del seguro en Argentina | Asesor en Acción 2.0',
    categoria: 'asesor',
    duracion: '24:15',
    youtube: 'S-COjfgSYck'
  },
  {
    id: 'como-liberar-seguros-prendarios-siendo-product',
    titulo: 'Cómo liberar Seguros Prendarios siendo Productor de Seguros - Asesor en Acción 2.0',
    categoria: 'asesor',
    duracion: '19:07',
    youtube: 'CbJBU6mmmBU'
  },
  {
    id: 'oportunidades-comerciales-para-productores-ase',
    titulo: 'Oportunidades comerciales para Productores Asesores de Seguros con Rivadavia - Asesor en Acción 2.0',
    categoria: 'asesor',
    duracion: '23:10',
    youtube: 'IfpGwMJkOeA'
  },
  {
    id: 'responsabilidad-civil-lo-que-todo-productor',
    titulo: 'Responsabilidad Civil: Lo que todo Productor de Seguros debe saber - Asesor En Acción 2.0',
    categoria: 'asesor',
    duracion: '14:59',
    youtube: '1v7fi01g1I8'
  },
  {
    id: 'como-iniciar-en-instagram-para-pas',
    titulo: 'Cómo iniciar en Instagram para PAS | Asesor en Acción #15',
    categoria: 'asesor',
    duracion: '22:43',
    youtube: 'KL7NBUcB8RU'
  },
  {
    id: 'como-hacer-el-balance-de-tu',
    titulo: '📊 Cómo hacer el balance de tu 2024 y definir objetivos para un 2025 exitoso | Asesor en Acción #14',
    categoria: 'asesor',
    duracion: '6:12',
    youtube: 'rkHpQ3JHE_c'
  },
  {
    id: 'como-mantener-relaciones-a-largo-plazo',
    titulo: '🎯 Cómo mantener relaciones a largo plazo con tus clientes | Asesor en Acción #13',
    categoria: 'asesor',
    duracion: '11:39',
    youtube: 'p-SrIlW8Eq8'
  },
  {
    id: 'aumentos-en-la-responsabilidad-civil-asesor',
    titulo: 'Aumentos en la Responsabilidad Civil - Asesor en Ación - Episodio #12',
    categoria: 'asesor',
    duracion: '10:22',
    youtube: 'vAFmQvLrUno'
  },
  {
    id: 'evita-la-mala-praxis-asesor-en',
    titulo: '❌ Evitá la mala praxis - Asesor en Acción - Episodio #11',
    categoria: 'asesor',
    duracion: '9:54',
    youtube: 'vpvXQ4fRBVU'
  },
  {
    id: 'como-vender-mas-consejos-y-estrategias',
    titulo: '🎯 Cómo vender más: Consejos y estrategias efectivas para empezar 🚀Asesor en Acción - Episodio #10',
    categoria: 'asesor',
    duracion: '8:27',
    youtube: 'ioVvzh6svzM'
  },
  {
    id: 'tecnologia-ventas-y-seguros-asesor-en',
    titulo: '🤑 Tecnologìa, ventas y seguros - Asesor en Acción - Episodio #09',
    categoria: 'asesor',
    duracion: '6:36',
    youtube: 'eBrebelX-1A'
  },
  {
    id: 'lo-que-tenes-que-saber-sobre-2',
    titulo: 'Lo que tenes que saber sobre las Licencias de Conducir - Asesor en Acción - Episodio #08',
    categoria: 'asesor',
    duracion: '17:37',
    youtube: 'CQlhd77NOTw'
  },
  {
    id: 'el-rol-clave-del-productor-asesor',
    titulo: 'El Rol Clave del Productor - Asesor en Acción - Episodio #07',
    categoria: 'asesor',
    duracion: '17:40',
    youtube: 'jmDApsyduN0'
  },
  {
    id: 'eli-el-desafio-de-ser-madre',
    titulo: 'Eli, el desafío de ser madre y ejercer como PAS 🤱 Asesor en Acción - Episodio #06',
    categoria: 'asesor',
    duracion: '19:45',
    youtube: 'fkOxVg9H_Jk'
  },
  {
    id: 'hablamos-con-el-presidente-de-apas',
    titulo: 'Hablamos con el Presidente de APAS - Asesor en Acción - Episodio #05',
    categoria: 'asesor',
    duracion: '21:28',
    youtube: 'pb-ZPAhbuHQ'
  },
  {
    id: 'un-especialista-en-derecho-en-seguro',
    titulo: '🧑‍⚖️ Un especialista en Derecho en Seguro te cuenta... Asesor en Acción - Episodio #04',
    categoria: 'asesor',
    duracion: '17:44',
    youtube: 't_h5h5B645M'
  },
  {
    id: 'pas-tradicional-vs-pas-nuevo-asesor',
    titulo: 'PAS Tradicional vs PAS Nuevo 🥊 Asesor en Acción - Episodio #03',
    categoria: 'asesor',
    duracion: '10:49',
    youtube: 'RZtEgSjS_cM'
  },
  {
    id: 'aumentan-las-penas-en-los-fraudes',
    titulo: '¿Aumentan las penas en los Fraudes de Seguros? 🤔 Asesor en Acción - Episodio #02',
    categoria: 'asesor',
    duracion: '5:35',
    youtube: 'qNvbUwyT1Uc'
  },
  {
    id: 'la-ley-de-bases-es-una',
    titulo: '¿La LEY DE BASES es una oportunidad para los PAS? 🤑 Asesor en Acción - Episodio #1',
    categoria: 'asesor',
    duracion: '8:26',
    youtube: 'Ra3pEOqGnyg'
  },

  /* ---------- Normativa y actualidad (11) ---------- */
  {
    id: 'la-derecha-no-siempre-tiene-prioridad',
    titulo: 'La derecha NO siempre tiene prioridad',
    categoria: 'normativa',
    duracion: '12:30',
    youtube: 'HiOUDO81WrY'
  },
  {
    id: 'obligaciones-impositivas-del-pas-desde-que',
    titulo: 'Obligaciones Impositivas del PAS: Desde que arrancás hasta que te retirás de la profesión',
    categoria: 'normativa',
    duracion: '31:31',
    youtube: 'bFK-rNnXfmI'
  },
  {
    id: 'aseguradoras-al-borde-de-la-liquidacion',
    titulo: '¿Aseguradoras al borde de la liquidación? | Abogado Especialista en Seguros responde',
    categoria: 'normativa',
    duracion: '23:13',
    youtube: 'TFKn1uRx-7Y'
  },
  {
    id: 'nuevo-ripte-2025-en-accidentes-personales',
    titulo: 'Nuevo RIPTE 2025 en Accidentes Personales: ¿Qué cambia para los PAS?',
    categoria: 'normativa',
    duracion: '1:07:20',
    youtube: 'YC8dVPhoxVs'
  },
  {
    id: 'oportunidades-para-el-pas-nueva-ley',
    titulo: 'Oportunidades para el PAS | Nueva ley de Jubilaciones - Retiro',
    categoria: 'normativa',
    duracion: '49:49',
    youtube: 'luqh6Rp8zSA'
  },
  {
    id: 'aumentos-en-los-limites-de-responsabilidad',
    titulo: '🚗📢 Aumentos en los límites de Responsabilidad Civil 2025',
    categoria: 'normativa',
    duracion: '10:10',
    youtube: 'sEJkcV4MfRw'
  },
  {
    id: 'aumentos-en-la-responsabilidad-civil-analisis',
    titulo: '🤑🚗 Aumentos en la Responsabilidad Civil - Análisis profundo y expectativas para 2025',
    categoria: 'normativa',
    duracion: '56:14',
    youtube: 'o3m9SvGi6mA'
  },
  {
    id: 'cambios-en-la-ley-de-bases',
    titulo: 'Cambios en la Ley de Bases: Trabajadores Independientes',
    categoria: 'normativa',
    duracion: '5:50',
    youtube: 'yaXZO08XUb8'
  },
  {
    id: '4to-ciclo-ap-que-es-y',
    titulo: '4to Ciclo AP - ¿Qué es y cuál es el nuevo RIPTE? 🤔',
    categoria: 'normativa',
    duracion: '1:03:31',
    youtube: '-jKRmFPnQjs'
  },
  {
    id: 'ripte-integro-max-y-ocasion-de',
    titulo: 'RIPTE, Íntegro Max y Ocasión de Trabajo',
    categoria: 'normativa',
    duracion: '1:07:38',
    youtube: 'zZ46pRzg470'
  },
  {
    id: 'obligaciones-patronales-post-venta-art-todo',
    titulo: '📚 Obligaciones Patronales - Post Venta ART: Todo lo que tenés que saber',
    categoria: 'normativa',
    duracion: '51:45',
    youtube: 'v0R81_4slPo'
  },

  /* ---------- Entrevistas y charlas (11) ---------- */
  {
    id: 'no-tengo-ningun-seguro-entrevista-a',
    titulo: '"NO TENGO ningún SEGURO" - Entrevista a Carlos Maslatón',
    categoria: 'entrevistas',
    duracion: '20:08',
    youtube: 'JPN2TJzwEHE'
  },
  {
    id: 'a-la-mayoria-le-chupas-un',
    titulo: '"A la mayoría LE CHUPÁS UN HUEVO" - ENTREVISTA a Joaquín Vazquez "El Niño Corpo"',
    categoria: 'entrevistas',
    duracion: '25:27',
    youtube: 'ztClkIysj6I'
  },
  {
    id: 'como-vender-cualquier-cosa-el-metodo',
    titulo: 'Cómo VENDER CUALQUIER COSA: el método que SÍ FUNCIONA - Entrevista a Beltrán Briones',
    categoria: 'entrevistas',
    duracion: '15:57',
    youtube: 'N4ly-3z43m8'
  },
  {
    id: 'seguros-de-vida-y-retiro-con',
    titulo: 'Seguros de Vida y Retiro con Capitalización - Entrevista a Productores',
    categoria: 'entrevistas',
    duracion: '1:20:02',
    youtube: 'ZG0qA0DwiiM'
  },
  {
    id: 'charlamos-con-el-presidente-de-aapas',
    titulo: 'CHARLAMOS con el PRESIDENTE de AAPAS',
    categoria: 'entrevistas',
    duracion: '24:15',
    youtube: 'zXY7vIkUCBU'
  },
  {
    id: 'ivan-briones-opina-sobre-los-productores',
    titulo: 'IVAN BRIONES OPINA sobre los PRODUCTORES DE SEGUROS',
    categoria: 'entrevistas',
    duracion: '45:34',
    youtube: 'ArUjeJz5Y8Q'
  },
  {
    id: 'marcos-spaccesi-y-su-recorrido-como',
    titulo: 'Marcos Spaccesi y su recorrido como Presidente de APAS Córdoba',
    categoria: 'entrevistas',
    duracion: '18:12',
    youtube: 'Fm72sbhiHVc'
  },
  {
    id: 'in-seguridad-vial-causas-reales-de',
    titulo: '(In)Seguridad Vial: causas reales de los accidentes | Con Juan José Niedfeld - Rivadavia Seguros',
    categoria: 'entrevistas',
    duracion: '24:21',
    youtube: 'xGHzFhUAPDE'
  },
  {
    id: 'conoce-mas-sobre-seguros-de-vida',
    titulo: 'Conocé más sobre seguros de Vida y Retiro - Entrevista con Encargado de Vida y Retiro en Sancor',
    categoria: 'entrevistas',
    duracion: '9:23',
    youtube: 'jQdo8V9kUtY'
  },
  {
    id: 'debate-con-raul-fraire-ola-de',
    titulo: 'DEBATE con Raul Fraire - Ola de Saqueos ¿Cómo funcionan las coberturas?',
    categoria: 'entrevistas',
    duracion: '1:03:14',
    youtube: 'rBl6mIBYQLE'
  },
  {
    id: 'charla-con-dino-chiappetta-grupo-pas',
    titulo: 'Charla con Dino Chiappetta - Grupo PAS x Triunfo',
    categoria: 'entrevistas',
    duracion: '56:11',
    youtube: 'rv7ZtkvIGFA'
  },

  /* ---------- Compañías (7) ---------- */
  {
    id: 'asi-funciona-una-aseguradora-por-dentro',
    titulo: 'Así FUNCIONA una ASEGURADORA por dentro | Visitamos Rivadavia Seguros #Vlog1',
    categoria: 'companias',
    duracion: '20:15',
    youtube: 'mr_BwR5IEME'
  },
  {
    id: 'presentacion-responsable-comercial-triunfo',
    titulo: 'Presentación Responsable Comercial - Triunfo',
    categoria: 'companias',
    duracion: '28:39',
    youtube: '5IHXGkUJ4lM'
  },
  {
    id: 'por-que-trabajar-con-federacion-patronal',
    titulo: '¿Por qué trabajar con Federación Patronal?',
    categoria: 'companias',
    duracion: '25:31',
    youtube: '62VU9cXmy7o'
  },
  {
    id: 'conoce-sancor-seguros-en-profundidad',
    titulo: 'Conocé Sancor Seguros en Profundidad',
    categoria: 'companias',
    duracion: '23:52',
    youtube: 'UKI_cD4qM3I'
  },
  {
    id: 'ranking-de-aseguradoras-conoce-la-calidad',
    titulo: 'Ranking de Aseguradoras: Conocé la Calidad y Solvencia',
    categoria: 'companias',
    duracion: '7:41',
    youtube: '7MZWyLoym6E'
  },
  {
    id: 'presentacion-berkley-art',
    titulo: 'Presentación - Berkley ART',
    categoria: 'companias',
    duracion: '58:15',
    youtube: 'TA4uYHAEYQo'
  },
  {
    id: 'presentacion-y-beneficios-de-zurich-seguros',
    titulo: 'Presentación y Beneficios de Zurich Seguros',
    categoria: 'companias',
    duracion: '1:04:02',
    youtube: 'sCVHKrtyvP8'
  },

  /* ---------- Grupo PAS (7) ---------- */
  {
    id: 'pas-en-accion-el-libro-que',
    titulo: 'PAS en Acción: El LIBRO que llegó para IMPULSAR a los PRODUCTORES',
    categoria: 'institucional',
    duracion: '23:49',
    youtube: 'rb2pMx2R0Qk'
  },
  {
    id: 'microseguros-raul-fraire-en-mitre-club',
    titulo: 'Microseguros - Raúl Fraire en Mitre Club',
    categoria: 'institucional',
    duracion: '8:58',
    youtube: '__o7Oogh7SE'
  },
  {
    id: 'seguros-de-vida-raul-fraire-en',
    titulo: 'Seguros de Vida - Raúl Fraire en Mitre Club',
    categoria: 'institucional',
    duracion: '13:17',
    youtube: 'llCZf6f-Mm0'
  },
  {
    id: 'conoce-nuestra-area-de-siniestros',
    titulo: 'Conocé nuestra área de Siniestros',
    categoria: 'institucional',
    duracion: '35:39',
    youtube: 'g7TlKa_sXUo'
  },
  {
    id: 'la-importancia-de-la-art-raul',
    titulo: 'La importancia de la ART - Raúl Fraire en Mitre Club',
    categoria: 'institucional',
    duracion: '7:10',
    youtube: '-9BxRhJ6s2A'
  },
  {
    id: 'raul-fraire-en-mitre-club-la',
    titulo: 'Raúl Fraire en Mitre Club - La actualidad de los seguros',
    categoria: 'institucional',
    duracion: '8:49',
    youtube: 'fA8yQeDt3kk'
  },
  {
    id: 'hablemos-de-seguros-mitre-club-radio',
    titulo: 'Hablemos de Seguros - Mitre Club - Radio Mitre',
    categoria: 'institucional',
    duracion: '6:20',
    youtube: '0i_fzUIXqd0'
  }

];
