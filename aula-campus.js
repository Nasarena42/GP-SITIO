/* ============================================
   Grupo PAS — Aula Virtual · Motor del campus
   ============================================
   Dibuja las clases que estén cargadas en aula-datos.js, filtra,
   busca, reproduce y recuerda lo que cada PAS ya vio.

   Normalmente no hace falta tocar este archivo: para sumar contenido
   alcanza con editar aula-datos.js.
============================================ */
(function () {
  'use strict';

  const grilla    = document.getElementById('grilla');
  const filtros   = document.getElementById('filtros');
  const buscador  = document.getElementById('buscador');
  const vacio     = document.getElementById('vacio');
  const modal     = document.getElementById('modal');
  const LLAVE_VISTAS = 'grupopas_aula_vistas';

  let categoriaActiva = 'todas';
  let busqueda = '';

  /* ---------- Clases ya vistas (se guardan en el navegador) ---------- */

  function leerVistas() {
    try { return JSON.parse(localStorage.getItem(LLAVE_VISTAS)) || []; }
    catch (e) { return []; }
  }

  function marcarVista(id) {
    const vistas = leerVistas();
    if (vistas.includes(id)) return;
    vistas.push(id);
    try { localStorage.setItem(LLAVE_VISTAS, JSON.stringify(vistas)); } catch (e) {}
    actualizarProgreso();
  }

  function actualizarProgreso() {
    const disponibles = CURSOS.filter(tieneContenido);
    const vistas = leerVistas().filter(id => disponibles.some(c => c.id === id));
    const total = disponibles.length;
    const pct = total ? Math.round((vistas.length / total) * 100) : 0;

    document.getElementById('progresoVistas').textContent = vistas.length;
    document.getElementById('progresoTotal').textContent  = total;
    document.getElementById('progresoBarra').style.width  = pct + '%';
  }

  /* ---------- Helpers ---------- */

  function tieneContenido(curso) {
    return Boolean(curso.youtube || curso.archivo || curso.material);
  }

  function nombreCategoria(clave) {
    const cat = CATEGORIAS.find(c => c.clave === clave);
    return cat ? cat.nombre : clave;
  }

  function miniatura(curso) {
    if (curso.poster) return curso.poster;
    /* YouTube publica la miniatura sin necesidad de API ni credenciales. */
    if (curso.youtube) return 'https://img.youtube.com/vi/' + curso.youtube + '/hqdefault.jpg';
    return null;
  }

  /* Saca acentos y mayúsculas para que el buscador no sea quisquilloso. */
  function normalizar(texto) {
    return String(texto).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function escapar(texto) {
    const d = document.createElement('div');
    d.textContent = texto == null ? '' : texto;
    return d.innerHTML;
  }

  /* ---------- Filtros ---------- */

  function dibujarFiltros() {
    const opciones = [{ clave: 'todas', nombre: 'Todas' }].concat(CATEGORIAS);
    filtros.innerHTML = opciones.map(op => {
      const cuantas = op.clave === 'todas'
        ? CURSOS.length
        : CURSOS.filter(c => c.categoria === op.clave).length;
      if (!cuantas) return '';
      return '<button type="button" class="chip' + (op.clave === categoriaActiva ? ' is-active' : '') +
             '" data-cat="' + op.clave + '" aria-pressed="' + (op.clave === categoriaActiva) + '">' +
             escapar(op.nombre) + ' <em>' + cuantas + '</em></button>';
    }).join('');
  }

  function cursosVisibles() {
    const q = normalizar(busqueda).trim();
    return CURSOS
      .filter(c => categoriaActiva === 'todas' || c.categoria === categoriaActiva)
      /* Busca en el titulo, el resumen, el docente y el nombre de la categoria,
         asi "tecnico" tambien trae las clases del rubro tecnico. */
      .filter(c => !q || normalizar(
        [c.titulo, c.resumen, c.docente, nombreCategoria(c.categoria)].join(' ')
      ).includes(q))
      /* Los destacados primero; después, las que ya tienen video. */
      .sort((a, b) => (b.destacado ? 1 : 0) - (a.destacado ? 1 : 0) ||
                      (tieneContenido(b) ? 1 : 0) - (tieneContenido(a) ? 1 : 0));
  }

  /* ---------- Tarjetas ---------- */

  function dibujarGrilla() {
    const lista = cursosVisibles();
    const vistas = leerVistas();

    vacio.hidden = lista.length > 0;
    grilla.innerHTML = lista.map(curso => tarjeta(curso, vistas.includes(curso.id))).join('');
  }

  function tarjeta(curso, vista) {
    const listo = tieneContenido(curso);
    const img   = miniatura(curso);
    const esMaterial = !curso.youtube && !curso.archivo && curso.material;

    const thumb = img
      ? '<img src="' + escapar(img) + '" alt="" loading="lazy">'
      : '<div class="curso-thumb-vacio">' + (esMaterial ? iconoDoc() : iconoReloj()) + '</div>';

    const badge = listo
      ? '<span class="curso-dur">' + escapar(curso.duracion || (esMaterial ? 'Material' : 'Ver')) + '</span>'
      : '<span class="curso-dur curso-dur-pronto">Próximamente</span>';

    const play = listo && !esMaterial
      ? '<span class="curso-play"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span>'
      : '';

    return '' +
      '<article class="curso-card' + (listo ? '' : ' es-pronto') + (curso.destacado ? ' es-destacado' : '') + '"' +
        (listo ? ' data-id="' + escapar(curso.id) + '" tabindex="0" role="button"' : '') + '>' +
        '<div class="curso-thumb">' + thumb + play + badge +
          (vista ? '<span class="curso-visto">✓ Visto</span>' : '') +
        '</div>' +
        '<div class="curso-body">' +
          '<span class="curso-tag">' + escapar(nombreCategoria(curso.categoria)) + '</span>' +
          '<h3>' + escapar(curso.titulo) + '</h3>' +
          (curso.resumen ? '<p>' + escapar(curso.resumen) + '</p>' : '') +
          (curso.docente ? '<span class="curso-docente">Con ' + escapar(curso.docente) + '</span>' : '') +
        '</div>' +
      '</article>';
  }

  function iconoReloj() {
    return '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>';
  }
  function iconoDoc() {
    return '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>';
  }

  /* ---------- Reproductor ---------- */

  function abrir(id) {
    const curso = CURSOS.find(c => c.id === id);
    if (!curso || !tieneContenido(curso)) return;

    /* Un PDF o una carpeta de Drive se abre aparte, no dentro del modal. */
    if (!curso.youtube && !curso.archivo && curso.material) {
      marcarVista(curso.id);
      dibujarGrilla();
      window.open(curso.material, '_blank', 'noopener');
      return;
    }

    const caja = document.getElementById('modalVideo');
    if (curso.youtube) {
      /* nocookie: no deja cookies de seguimiento hasta que se reproduce. */
      caja.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(curso.youtube) +
        '?autoplay=1&rel=0&modestbranding=1" title="' + escapar(curso.titulo) +
        '" allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
    } else {
      caja.innerHTML = '<video src="' + escapar(curso.archivo) + '"' +
        (curso.poster ? ' poster="' + escapar(curso.poster) + '"' : '') +
        ' controls autoplay playsinline></video>';
    }

    document.getElementById('modalTag').textContent     = nombreCategoria(curso.categoria);
    document.getElementById('modalTitulo').textContent  = curso.titulo;
    document.getElementById('modalResumen').textContent = curso.resumen || '';

    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    modal.querySelector('.aula-modal-x').focus();

    marcarVista(curso.id);
    dibujarGrilla();
  }

  function cerrar() {
    modal.hidden = true;
    /* Vaciar el contenedor corta el audio del video. */
    document.getElementById('modalVideo').innerHTML = '';
    document.body.style.overflow = '';
  }

  /* ---------- Eventos ---------- */

  filtros.addEventListener('click', e => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    categoriaActiva = chip.dataset.cat;
    dibujarFiltros();
    dibujarGrilla();
  });

  buscador.addEventListener('input', e => {
    busqueda = e.target.value;
    dibujarGrilla();
  });

  grilla.addEventListener('click', e => {
    const card = e.target.closest('.curso-card[data-id]');
    if (card) abrir(card.dataset.id);
  });

  grilla.addEventListener('keydown', e => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const card = e.target.closest('.curso-card[data-id]');
    if (card) { e.preventDefault(); abrir(card.dataset.id); }
  });

  modal.addEventListener('click', e => {
    if (e.target.closest('[data-cerrar]')) cerrar();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modal.hidden) cerrar();
  });

  document.getElementById('btnSalir').addEventListener('click', aulaSalir);

  const menu = document.getElementById('menuToggle');
  const links = document.getElementById('navLinks');
  if (menu) {
    menu.addEventListener('click', () => {
      const abierto = links.classList.toggle('open');
      menu.setAttribute('aria-expanded', abierto ? 'true' : 'false');
    });
  }

  /* ---------- Arranque ---------- */

  dibujarFiltros();
  dibujarGrilla();
  actualizarProgreso();
})();
