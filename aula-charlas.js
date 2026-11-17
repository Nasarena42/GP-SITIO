/* ============================================
   Grupo PAS — Aula Virtual · Próximas charlas
   ============================================

   MAQUETA. Estas charlas son de ejemplo, para ver cómo queda la sección.

   La idea es que este archivo lo genere el panel a partir del Excel,
   así que NO hace falta escribirlo a mano. Las columnas que tendría
   que tener ese Excel son las que ves acá abajo:

     Fecha        2026-09-16   (año-mes-día)
     Hora         18:00        (24 horas)
     Duración     90           (en minutos)
     Título       Taller de Formación — Agro
     Disertante   Nombre y apellido
     Rol          Cargo o compañía
     Organiza     grupopas  |  polko
     Plataforma   Zoom  |  YouTube en vivo  |  Google Meet
     Link         https://...  (donde se conecta el PAS)
     Resumen      Una o dos líneas
     Cupo         200          (opcional, vacío = sin límite)

============================================ */

const CHARLAS = [

  {
    id: 'agro-campana-gruesa',
    titulo: 'Taller de Formación — Agro: campaña gruesa 2026',
    resumen: 'Coberturas de granizo y resiembra, cómo cotizar una superficie y los errores que más caro salen.',
    organiza: 'grupopas',
    disertante: 'Equipo Técnico Sancor',
    rol: 'Sancor Seguros',
    fecha: '2026-09-16',
    hora: '18:00',
    duracion: 90,
    plataforma: 'Zoom',
    link: 'https://zoom.us/j/000000000',
    cupo: 200,
    anotados: 143
  },
  {
    id: 'polko-modulo-siniestros',
    titulo: 'Novedades de Polko: nuevo módulo de Siniestros',
    resumen: 'Presentamos la carga y el seguimiento de siniestros desde la plataforma, con demo en vivo.',
    organiza: 'polko',
    disertante: 'Equipo Polko',
    rol: 'Producto',
    fecha: '2026-09-18',
    hora: '17:00',
    duracion: 60,
    plataforma: 'YouTube en vivo',
    link: 'https://www.youtube.com/@SomosPolko',
    anotados: 87
  },
  {
    id: 'art-ripte-cambios',
    titulo: 'ART: cambios en el RIPTE y qué tenés que informar',
    resumen: 'Qué cambió en el último ajuste, cómo impacta en las pólizas vigentes y qué avisarle al cliente.',
    organiza: 'grupopas',
    disertante: 'Raúl Fraire',
    rol: 'Grupo PAS',
    fecha: '2026-09-24',
    hora: '18:30',
    duracion: 75,
    plataforma: 'Zoom',
    link: 'https://zoom.us/j/000000000',
    cupo: 150,
    anotados: 31
  },
  {
    id: 'caucion-sin-ser-especialista',
    titulo: 'Cómo vender Caución sin ser especialista',
    resumen: 'Los tres tipos de caución que más se piden, cómo detectar la oportunidad y a quién derivar lo complejo.',
    organiza: 'grupopas',
    disertante: 'Marcela Ruiz',
    rol: 'Seguros Corporativos',
    fecha: '2026-10-01',
    hora: '18:00',
    duracion: 90,
    plataforma: 'Zoom',
    link: 'https://zoom.us/j/000000000',
    cupo: 150,
    anotados: 12
  },
  {
    id: 'polko-cascada-aplicada',
    titulo: 'Cotización en cascada: sacarle el jugo en 20 minutos',
    resumen: 'Taller corto y práctico: comparar seis compañías de una y cerrar en el momento.',
    organiza: 'polko',
    disertante: 'Equipo Polko',
    rol: 'Capacitación',
    fecha: '2026-10-08',
    hora: '17:30',
    duracion: 45,
    plataforma: 'Google Meet',
    link: 'https://meet.google.com/abc-defg-hij',
    anotados: 5
  }

];
