/* ============================================
   Grupo PAS — Aula Virtual · Dibujo de las charlas
   ============================================
   MAQUETA: dibuja las plaquitas de próximas charlas en el campus.

   Lo único que funciona de verdad es "Agregar al calendario": arma el
   link de Google Calendar, que es una dirección común y no necesita
   servidor. "Anotarme" por ahora solo se marca en este navegador.
============================================ */
(function () {
  'use strict';

  const cont = document.getElementById('charlas');
  if (!cont || typeof CHARLAS === 'undefined') return;

  const LLAVE = 'grupopas_aula_anotado';
  const MESES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  const DIAS  = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];

  const ORGANIZA = {
    grupopas: { nombre: 'Grupo PAS', clase: 'es-grupopas' },
    polko:    { nombre: 'Polko',     clase: 'es-polko' }
  };

  function anotados() {
    try { return JSON.parse(localStorage.getItem(LLAVE)) || []; } catch (e) { return []; }
  }

  function anotar(id) {
    const a = anotados();
    const i = a.indexOf(id);
    if (i === -1) a.push(id); else a.splice(i, 1);
    try { localStorage.setItem(LLAVE, JSON.stringify(a)); } catch (e) {}
    return i === -1;
  }

  function esc(t) {
    const d = document.createElement('div');
    d.textContent = t == null ? '' : t;
    return d.innerHTML;
  }

  /* Convierte "2026-09-16" + "18:00" en una fecha local. */
  function cuando(ch) {
    const [a, m, d] = ch.fecha.split('-').map(Number);
    const [h, min] = (ch.hora || '00:00').split(':').map(Number);
    return new Date(a, m - 1, d, h, min);
  }

  function termina(ch) {
    return new Date(cuando(ch).getTime() + (ch.duracion || 60) * 60000);
  }

  /* "Faltan 3 días", "Es hoy", "En vivo ahora" */
  function cuentaRegresiva(ch) {
    const ahora = new Date(), ini = cuando(ch), fin = termina(ch);
    if (ahora >= ini && ahora <= fin) return { txt: 'En vivo ahora', estado: 'vivo' };
    if (ahora > fin) return { txt: 'Ya pasó', estado: 'pasado' };

    const hoy = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate());
    const dia = new Date(ini.getFullYear(), ini.getMonth(), ini.getDate());
    const dias = Math.round((dia - hoy) / 86400000);

    if (dias === 0) return { txt: 'Es hoy', estado: 'hoy' };
    if (dias === 1) return { txt: 'Es mañana', estado: 'pronto' };
    if (dias < 7)  return { txt: 'Faltan ' + dias + ' días', estado: 'pronto' };
    return { txt: 'Faltan ' + dias + ' días', estado: 'lejos' };
  }

  function fechaLarga(ch) {
    const f = cuando(ch);
    return DIAS[f.getDay()] + ' ' + f.getDate() + ' de ' + MESES[f.getMonth()];
  }

  function duracionTxt(min) {
    if (!min) return '';
    if (min < 60) return min + ' min';
    const h = Math.floor(min / 60), m = min % 60;
    return h + ' h' + (m ? ' ' + m + ' min' : '');
  }

  /* Link de Google Calendar: es una dirección común, funciona sin servidor. */
  function linkCalendario(ch) {
    const z = n => String(n).padStart(2, '0');
    const utc = f => f.getUTCFullYear() + z(f.getUTCMonth() + 1) + z(f.getUTCDate()) + 'T' +
                     z(f.getUTCHours()) + z(f.getUTCMinutes()) + '00Z';
    const p = new URLSearchParams({
      action: 'TEMPLATE',
      text: ch.titulo,
      dates: utc(cuando(ch)) + '/' + utc(termina(ch)),
      details: (ch.resumen || '') + '\n\nOrganiza: ' + (ORGANIZA[ch.organiza] || {}).nombre +
               '\nDisertante: ' + (ch.disertante || '') + '\n\nConectate acá: ' + (ch.link || ''),
      location: ch.link || ''
    });
    return 'https://calendar.google.com/calendar/render?' + p.toString();
  }

  function iconoCalendario() {
    return '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></svg>';
  }

  function plaquita(ch, grande) {
    const f = cuando(ch);
    const cr = cuentaRegresiva(ch);
    const org = ORGANIZA[ch.organiza] || { nombre: ch.organiza, clase: '' };
    const yaAnotado = anotados().includes(ch.id);
    const lugares = ch.cupo ? Math.max(ch.cupo - (ch.anotados || 0), 0) : null;

    return '' +
      '<article class="charla' + (grande ? ' es-grande' : '') + ' ' + org.clase + '" data-id="' + esc(ch.id) + '">' +
        '<div class="charla-fecha">' +
          '<span class="charla-dia">' + f.getDate() + '</span>' +
          '<span class="charla-mes">' + MESES[f.getMonth()] + '</span>' +
        '</div>' +
        '<div class="charla-cuerpo">' +
          '<div class="charla-alto">' +
            '<span class="charla-org">' + esc(org.nombre) + '</span>' +
            '<span class="charla-cuenta es-' + cr.estado + '">' +
              (cr.estado === 'vivo' ? '<i class="charla-punto"></i>' : '') + esc(cr.txt) +
            '</span>' +
          '</div>' +
          '<h3>' + esc(ch.titulo) + '</h3>' +
          (grande && ch.resumen ? '<p>' + esc(ch.resumen) + '</p>' : '') +
          '<ul class="charla-datos">' +
            '<li>' + esc(fechaLarga(ch)) + ', ' + esc(ch.hora) + ' h</li>' +
            (ch.duracion ? '<li>' + esc(duracionTxt(ch.duracion)) + '</li>' : '') +
            '<li>' + esc(ch.plataforma || '') + '</li>' +
            (ch.disertante ? '<li>' + esc(ch.disertante) + (ch.rol ? ' · ' + esc(ch.rol) : '') + '</li>' : '') +
          '</ul>' +
          (lugares !== null ? '<div class="charla-cupo">' +
              '<div class="charla-cupo-barra"><span style="width:' +
                Math.min(Math.round(((ch.anotados || 0) / ch.cupo) * 100), 100) + '%"></span></div>' +
              '<span>' + (lugares > 0 ? 'Quedan ' + lugares + ' lugares' : 'Cupo completo') + '</span>' +
            '</div>' : '') +
          '<div class="charla-btns">' +
            '<button type="button" class="charla-anotarme' + (yaAnotado ? ' es-anotado' : '') + '">' +
              (yaAnotado ? '✓ Anotado' : 'Anotarme') +
            '</button>' +
            '<a class="charla-cal" href="' + esc(linkCalendario(ch)) + '" target="_blank" rel="noopener">' +
              iconoCalendario() + 'Agregar al calendario' +
            '</a>' +
          '</div>' +
        '</div>' +
      '</article>';
  }

  function dibujar() {
    const proximas = CHARLAS
      .filter(ch => cuentaRegresiva(ch).estado !== 'pasado')
      .sort((a, b) => cuando(a) - cuando(b));

    if (!proximas.length) {
      cont.innerHTML = '<p class="charlas-vacio">No hay charlas programadas por ahora. Te avisamos apenas se publique la próxima.</p>';
      return;
    }

    cont.innerHTML =
      plaquita(proximas[0], true) +
      (proximas.length > 1
        ? '<div class="charlas-resto">' + proximas.slice(1).map(ch => plaquita(ch, false)).join('') + '</div>'
        : '');
  }

  cont.addEventListener('click', e => {
    const btn = e.target.closest('.charla-anotarme');
    if (!btn) return;
    const id = btn.closest('.charla').dataset.id;
    const quedo = anotar(id);
    btn.classList.toggle('es-anotado', quedo);
    btn.textContent = quedo ? '✓ Anotado' : 'Anotarme';
  });

  dibujar();
})();
