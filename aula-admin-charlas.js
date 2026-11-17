/* ============================================
   Grupo PAS — Aula Virtual · Panel, pestaña de Charlas (MAQUETA)
   ============================================
   Solo visual: muestra cómo se vería la carga de charlas desde el Excel.
   Nada de esto guarda ni procesa archivos todavía.
============================================ */
(function () {
  'use strict';

  const $ = id => document.getElementById(id);

  /* ---------- Pestañas ---------- */

  const pestanas = document.querySelectorAll('.admin-pestana');
  pestanas.forEach(p => {
    p.addEventListener('click', () => {
      const cual = p.dataset.panel;
      pestanas.forEach(x => {
        const activa = x === p;
        x.classList.toggle('is-active', activa);
        x.setAttribute('aria-selected', activa ? 'true' : 'false');
      });
      document.querySelectorAll('[data-panel]').forEach(el => {
        if (el.classList.contains('admin-pestana')) return;
        el.hidden = el.dataset.panel !== cual;
      });
    });
  });

  /* ---------- Contadores de las pestañas ---------- */

  if ($('pestClases')) $('pestClases').textContent = typeof CURSOS !== 'undefined' ? CURSOS.length : 0;
  if ($('pestCharlas')) $('pestCharlas').textContent = typeof CHARLAS !== 'undefined' ? CHARLAS.length : 0;

  /* ---------- Listado de charlas ---------- */

  const MESES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  const ORG = { grupopas: 'Grupo PAS', polko: 'Polko' };

  function esc(t) {
    const d = document.createElement('div');
    d.textContent = t == null ? '' : t;
    return d.innerHTML;
  }

  function pintar() {
    const cont = $('tablaCharlas');
    if (!cont || typeof CHARLAS === 'undefined') return;

    const orden = CHARLAS.slice().sort((a, b) => a.fecha.localeCompare(b.fecha));

    cont.innerHTML = orden.map(ch => {
      const [a, m, d] = ch.fecha.split('-').map(Number);
      const cupo = ch.cupo ? (ch.anotados || 0) + '/' + ch.cupo + ' anotados' : (ch.anotados || 0) + ' anotados';
      return '' +
        '<div class="admin-fila">' +
          '<div class="admin-fecha-mini">' +
            '<span>' + d + '</span><em>' + MESES[m - 1] + '</em>' +
          '</div>' +
          '<div class="admin-fila-txt">' +
            '<strong>' + esc(ch.titulo) +
              ' <span class="admin-badge admin-badge-' + esc(ch.organiza) + '">' + esc(ORG[ch.organiza] || ch.organiza) + '</span>' +
            '</strong>' +
            '<span>' + esc(ch.hora) + ' h · ' + esc(ch.plataforma || '') +
              (ch.disertante ? ' · ' + esc(ch.disertante) : '') + ' · ' + cupo + '</span>' +
          '</div>' +
          '<div class="admin-fila-btns">' +
            '<button type="button" class="admin-editar">Editar</button>' +
            '<button type="button" class="admin-borrar">Borrar</button>' +
          '</div>' +
        '</div>';
    }).join('');
  }

  /* ---------- Acciones que todavía no hacen nada ---------- */

  function enConstruccion(msg) {
    const t = $('toast');
    if (!t) return;
    t.textContent = msg;
    t.className = 'admin-toast';
    t.hidden = false;
    clearTimeout(enConstruccion.reloj);
    enConstruccion.reloj = setTimeout(() => { t.hidden = true; }, 3600);
  }

  const drop = $('dropCharlas');
  if (drop) {
    drop.addEventListener('click', () => enConstruccion('Maqueta: acá se leería el Excel y se cargarían las charlas solas.'));
    ['dragenter', 'dragover'].forEach(ev => drop.addEventListener(ev, e => {
      e.preventDefault(); drop.classList.add('es-encima');
    }));
    ['dragleave', 'drop'].forEach(ev => drop.addEventListener(ev, e => {
      e.preventDefault(); drop.classList.remove('es-encima');
      if (ev === 'drop') enConstruccion('Maqueta: el archivo todavía no se procesa.');
    }));
  }

  if ($('btnPlantilla')) $('btnPlantilla').addEventListener('click', e => {
    e.preventDefault();
    enConstruccion('Maqueta: acá se bajaría un Excel de ejemplo para completar.');
  });

  if ($('btnCharlaNueva')) $('btnCharlaNueva').addEventListener('click',
    () => enConstruccion('Maqueta: se abriría un formulario igual al de las clases.'));

  const tabla = $('tablaCharlas');
  if (tabla) tabla.addEventListener('click', e => {
    if (e.target.closest('.admin-editar')) enConstruccion('Maqueta: acá se editaría la charla.');
    if (e.target.closest('.admin-borrar')) enConstruccion('Maqueta: acá se borraría la charla.');
  });

  pintar();
})();
