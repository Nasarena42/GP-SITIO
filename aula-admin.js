/* ============================================
   Grupo PAS — Aula Virtual · Panel de carga (MAQUETA)
   ============================================
   Permite cargar, editar y borrar clases sin escribir código, y exporta
   el aula-datos.js listo para subir a GitHub.

   Los cambios viven en el navegador (localStorage). Si el panel se
   conectara a una base de datos, esta misma pantalla guardaría directo
   y el paso de exportar desapareceria.
============================================ */
(function () {
  'use strict';

  const LLAVE = 'grupopas_aula_admin';

  /* Copia de trabajo: arranca del catalogo real y se puede modificar. */
  let cats, cursos, editando = null, filtro = 'todas', busca = '';

  function cargar() {
    try {
      const g = JSON.parse(localStorage.getItem(LLAVE));
      if (g && g.cursos && g.cats) { cats = g.cats; cursos = g.cursos; return true; }
    } catch (e) {}
    cats = JSON.parse(JSON.stringify(CATEGORIAS));
    cursos = JSON.parse(JSON.stringify(CURSOS));
    return false;
  }

  function guardar() {
    try { localStorage.setItem(LLAVE, JSON.stringify({ cats: cats, cursos: cursos })); }
    catch (e) { avisar('No se pudo guardar en este navegador.', true); }
    pintarCifras();
  }

  /* ---------- Utilidades ---------- */

  const $ = id => document.getElementById(id);

  function esc(t) {
    const d = document.createElement('div');
    d.textContent = t == null ? '' : t;
    return d.innerHTML;
  }

  function normalizar(t) {
    return String(t).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function slug(t) {
    return normalizar(t).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
      .split('-').slice(0, 6).join('-').slice(0, 46).replace(/-$/, '') || 'clase';
  }

  function idLibre(base) {
    let s = base, n = 2;
    while (cursos.some(c => c.id === s && c !== editando)) { s = base + '-' + n; n++; }
    return s;
  }

  /* Saca el código del video de cualquier forma de link de YouTube. */
  function idYoutube(txt) {
    txt = String(txt).trim();
    if (/^[A-Za-z0-9_-]{11}$/.test(txt)) return txt;
    const patrones = [
      /[?&]v=([A-Za-z0-9_-]{11})/,
      /youtu\.be\/([A-Za-z0-9_-]{11})/,
      /\/embed\/([A-Za-z0-9_-]{11})/,
      /\/shorts\/([A-Za-z0-9_-]{11})/,
      /\/live\/([A-Za-z0-9_-]{11})/
    ];
    for (const p of patrones) {
      const m = txt.match(p);
      if (m) return m[1];
    }
    return null;
  }

  function nombreCat(clave) {
    const c = cats.find(x => x.clave === clave);
    return c ? c.nombre : clave;
  }

  let tiempoToast;
  function avisar(msg, malo) {
    const t = $('toast');
    t.textContent = msg;
    t.className = 'admin-toast' + (malo ? ' es-malo' : '');
    t.hidden = false;
    clearTimeout(tiempoToast);
    tiempoToast = setTimeout(() => { t.hidden = true; }, 3200);
  }

  /* ---------- Tipo de contenido ---------- */

  let tipo = 'youtube';

  document.querySelectorAll('.admin-tipos .chip').forEach(b => {
    b.addEventListener('click', () => {
      tipo = b.dataset.tipo;
      document.querySelectorAll('.admin-tipos .chip').forEach(x => x.classList.toggle('is-active', x === b));
      document.querySelectorAll('[data-campo]').forEach(c => { c.hidden = c.dataset.campo !== tipo; });
      if (tipo !== 'youtube') $('preview').hidden = true;
      else mirarLink();
    });
  });

  /* ---------- Vista previa del video ---------- */

  function mirarLink() {
    const v = idYoutube($('fLink').value);
    const pre = $('preview'), est = $('linkEstado');

    if (!$('fLink').value.trim()) {
      pre.hidden = true;
      est.textContent = 'Pegá el link completo o solo el código del video.';
      est.className = 'admin-ayuda';
      return;
    }
    if (!v) {
      pre.hidden = true;
      est.textContent = 'No reconozco ese link. Tiene que ser de YouTube.';
      est.className = 'admin-ayuda es-malo';
      return;
    }
    est.textContent = '';
    est.className = 'admin-ayuda';
    $('previewImg').src = 'https://img.youtube.com/vi/' + v + '/hqdefault.jpg';
    $('previewId').textContent = v;
    $('previewLink').href = 'https://www.youtube.com/watch?v=' + v;
    pre.hidden = false;

    const repe = cursos.find(c => c.youtube === v && c !== editando);
    if (repe) avisar('Ojo: ese video ya está cargado como "' + repe.titulo + '".', true);
  }

  $('fLink').addEventListener('input', mirarLink);

  /* ---------- Alta y edición ---------- */

  function limpiar() {
    editando = null;
    $('formClase').reset();
    $('preview').hidden = true;
    $('formTitulo').textContent = 'Agregar una clase';
    $('btnGuardar').textContent = 'Agregar clase';
    $('btnCancelar').hidden = true;
    $('linkEstado').textContent = 'Pegá el link completo o solo el código del video.';
    $('linkEstado').className = 'admin-ayuda';
  }

  $('btnCancelar').addEventListener('click', limpiar);

  $('formClase').addEventListener('submit', e => {
    e.preventDefault();

    const titulo = $('fTitulo').value.trim();
    if (!titulo) { avisar('Falta el título de la clase.', true); $('fTitulo').focus(); return; }

    const clase = {
      id: editando ? editando.id : idLibre(slug(titulo)),
      titulo: titulo,
      categoria: $('fCategoria').value,
    };
    const resumen = $('fResumen').value.trim();
    if (resumen) clase.resumen = resumen;
    const dur = $('fDuracion').value.trim();
    if (dur) clase.duracion = dur;

    if (tipo === 'youtube') {
      const v = idYoutube($('fLink').value);
      if (!v) { avisar('Falta un link de YouTube válido.', true); $('fLink').focus(); return; }
      clase.youtube = v;
    } else if (tipo === 'archivo') {
      const a = $('fArchivo').value.trim();
      if (!a) { avisar('Falta la ruta del archivo.', true); return; }
      clase.archivo = a;
    } else {
      const m = $('fMaterial').value.trim();
      if (!m) { avisar('Falta el link al material.', true); return; }
      clase.material = m;
    }

    if ($('fDestacado').checked) clase.destacado = true;

    if (editando) {
      /* Conservar el poster si ya lo tenía */
      if (editando.poster) clase.poster = editando.poster;
      if (editando.docente) clase.docente = editando.docente;
      cursos[cursos.indexOf(editando)] = clase;
      avisar('Clase actualizada.');
    } else {
      cursos.unshift(clase);
      avisar('Clase agregada.');
    }

    guardar();
    limpiar();
    pintarTabla();
    pintarFiltros();
  });

  function editar(id) {
    const c = cursos.find(x => x.id === id);
    if (!c) return;
    editando = c;

    tipo = c.youtube ? 'youtube' : (c.archivo ? 'archivo' : 'material');
    document.querySelectorAll('.admin-tipos .chip').forEach(x => x.classList.toggle('is-active', x.dataset.tipo === tipo));
    document.querySelectorAll('[data-campo]').forEach(x => { x.hidden = x.dataset.campo !== tipo; });

    $('fLink').value = c.youtube || '';
    $('fArchivo').value = c.archivo || '';
    $('fMaterial').value = c.material || '';
    $('fTitulo').value = c.titulo || '';
    $('fResumen').value = c.resumen || '';
    $('fCategoria').value = c.categoria;
    $('fDuracion').value = c.duracion || '';
    $('fDestacado').checked = !!c.destacado;

    $('formTitulo').textContent = 'Editando una clase';
    $('btnGuardar').textContent = 'Guardar cambios';
    $('btnCancelar').hidden = false;
    if (tipo === 'youtube') mirarLink();

    if ($('formClase').scrollIntoView) $('formClase').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function borrar(id, fila) {
    /* Confirmación en dos pasos, sin ventanas del navegador. */
    if (fila.dataset.confirmando !== 'si') {
      fila.dataset.confirmando = 'si';
      fila.querySelector('.admin-borrar').textContent = '¿Seguro?';
      fila.classList.add('es-peligro');
      setTimeout(() => {
        if (fila.dataset.confirmando === 'si') {
          fila.dataset.confirmando = '';
          fila.classList.remove('es-peligro');
          const b = fila.querySelector('.admin-borrar');
          if (b) b.textContent = 'Borrar';
        }
      }, 4000);
      return;
    }
    const c = cursos.find(x => x.id === id);
    cursos = cursos.filter(x => x.id !== id);
    if (editando && editando.id === id) limpiar();
    guardar();
    pintarTabla();
    pintarFiltros();
    avisar('Se borró "' + (c ? c.titulo : id) + '".');
  }

  /* ---------- Categorías ---------- */

  $('btnCatNueva').addEventListener('click', () => {
    const n = $('fCatNueva').value.trim();
    if (!n) return;
    const clave = slug(n);
    if (cats.some(c => c.clave === clave)) { avisar('Esa categoría ya existe.', true); return; }
    cats.push({ clave: clave, nombre: n });
    $('fCatNueva').value = '';
    guardar();
    pintarCats();
    pintarFiltros();
    avisar('Categoría "' + n + '" creada.');
  });

  function pintarCats() {
    const sel = $('fCategoria');
    const antes = sel.value;
    sel.innerHTML = cats.map(c => '<option value="' + esc(c.clave) + '">' + esc(c.nombre) + '</option>').join('');
    if (antes && cats.some(c => c.clave === antes)) sel.value = antes;

    $('listaCats').innerHTML = cats.map(c => {
      const n = cursos.filter(x => x.categoria === c.clave).length;
      return '<li><span>' + esc(c.nombre) + '</span><em>' + n + '</em></li>';
    }).join('');
  }

  /* ---------- Filtros y tabla ---------- */

  function pintarFiltros() {
    const ops = [{ clave: 'todas', nombre: 'Todas' }].concat(cats);
    $('filtrosAdmin').innerHTML = ops.map(o => {
      const n = o.clave === 'todas' ? cursos.length : cursos.filter(c => c.categoria === o.clave).length;
      if (!n && o.clave !== 'todas') return '';
      return '<button type="button" class="chip' + (o.clave === filtro ? ' is-active' : '') +
             '" data-cat="' + esc(o.clave) + '">' + esc(o.nombre) + ' <em>' + n + '</em></button>';
    }).join('');
    pintarCats();
  }

  $('filtrosAdmin').addEventListener('click', e => {
    const c = e.target.closest('.chip');
    if (!c) return;
    filtro = c.dataset.cat;
    pintarFiltros();
    pintarTabla();
  });

  $('buscadorAdmin').addEventListener('input', e => { busca = e.target.value; pintarTabla(); });

  function visibles() {
    const q = normalizar(busca).trim();
    return cursos
      .filter(c => filtro === 'todas' || c.categoria === filtro)
      .filter(c => !q || normalizar([c.titulo, c.resumen, nombreCat(c.categoria)].join(' ')).includes(q));
  }

  function pintarTabla() {
    const lista = visibles();
    $('tablaVacia').hidden = lista.length > 0;

    $('tabla').innerHTML = lista.map(c => {
      const mini = c.poster ? c.poster
                 : (c.youtube ? 'https://img.youtube.com/vi/' + c.youtube + '/default.jpg' : '');
      const tipoTxt = c.youtube ? 'YouTube' : (c.archivo ? 'Video propio' : (c.material ? 'Material' : 'Sin video'));
      return '' +
        '<div class="admin-fila" data-id="' + esc(c.id) + '">' +
          '<div class="admin-mini">' + (mini ? '<img src="' + esc(mini) + '" alt="" loading="lazy">' : '<span></span>') + '</div>' +
          '<div class="admin-fila-txt">' +
            '<strong>' + esc(c.titulo) + (c.destacado ? ' <span class="admin-badge">Destacada</span>' : '') + '</strong>' +
            '<span>' + esc(nombreCat(c.categoria)) + ' · ' + tipoTxt + (c.duracion ? ' · ' + esc(c.duracion) : '') + '</span>' +
          '</div>' +
          '<div class="admin-fila-btns">' +
            '<button type="button" class="admin-editar">Editar</button>' +
            '<button type="button" class="admin-borrar">Borrar</button>' +
          '</div>' +
        '</div>';
    }).join('');
  }

  $('tabla').addEventListener('click', e => {
    const fila = e.target.closest('.admin-fila');
    if (!fila) return;
    if (e.target.closest('.admin-editar')) editar(fila.dataset.id);
    if (e.target.closest('.admin-borrar')) borrar(fila.dataset.id, fila);
  });

  /* ---------- Cifras ---------- */

  function pintarCifras() {
    $('cifraTotal').textContent = cursos.length;
    $('cifraCats').textContent = cats.length;
    const cambios = Math.abs(cursos.length - CURSOS.length) +
                    (JSON.stringify(cursos) !== JSON.stringify(CURSOS) ? 1 : 0);
    $('cifraCambios').textContent = JSON.stringify(cursos) === JSON.stringify(CURSOS) &&
                                    JSON.stringify(cats) === JSON.stringify(CATEGORIAS) ? '0' : String(cambios || 1);
  }

  /* ---------- Exportar ---------- */

  function textoJs(t) {
    return String(t).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\r?\n/g, ' ');
  }

  function generar() {
    let s = '/* ============================================\n' +
            '   Grupo PAS — Aula Virtual · Catálogo de cursos\n' +
            '   ============================================\n\n' +
            '   Generado desde el panel de carga.\n' +
            '   Para editarlo sin tocar código, abrí aula-admin.html\n' +
            '============================================ */\n\n' +
            'const CATEGORIAS = [\n';

    s += cats.map(c => "  { clave: '" + textoJs(c.clave) + "', nombre: '" + textoJs(c.nombre) + "' }").join(',\n');
    s += '\n];\n\nconst CURSOS = [\n';

    const bloques = [];
    cats.forEach(cat => {
      const g = cursos.filter(c => c.categoria === cat.clave);
      if (!g.length) return;
      let b = '\n  /* ---------- ' + cat.nombre + ' (' + g.length + ') ---------- */\n\n';
      b += g.map(c => {
        const f = ["    id: '" + textoJs(c.id) + "'",
                   "    titulo: '" + textoJs(c.titulo) + "'"];
        if (c.resumen)  f.push("    resumen: '" + textoJs(c.resumen) + "'");
        f.push("    categoria: '" + textoJs(c.categoria) + "'");
        if (c.duracion) f.push("    duracion: '" + textoJs(c.duracion) + "'");
        if (c.youtube)  f.push("    youtube: '" + textoJs(c.youtube) + "'");
        if (c.archivo)  f.push("    archivo: '" + textoJs(c.archivo) + "'");
        if (c.material) f.push("    material: '" + textoJs(c.material) + "'");
        if (c.poster)   f.push("    poster: '" + textoJs(c.poster) + "'");
        if (c.docente)  f.push("    docente: '" + textoJs(c.docente) + "'");
        if (c.destacado) f.push('    destacado: true');
        return '  {\n' + f.join(',\n') + '\n  }';
      }).join(',\n');
      bloques.push(b);
    });

    s += bloques.join(',\n') + '\n\n];\n';
    return s;
  }

  $('btnDescargar').addEventListener('click', () => {
    const blob = new Blob([generar()], { type: 'text/javascript;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'aula-datos.js';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    avisar('Archivo descargado. Subilo a GitHub para publicar.');
  });

  $('btnCopiar').addEventListener('click', () => {
    const txt = generar();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(txt)
        .then(() => avisar('Copiado. Pegalo en aula-datos.js.'))
        .catch(() => avisar('No se pudo copiar. Usá "Descargar".', true));
    } else {
      avisar('Este navegador no deja copiar. Usá "Descargar".', true);
    }
  });

  let reseteando = false;
  $('btnReset').addEventListener('click', () => {
    if (!reseteando) {
      reseteando = true;
      $('btnReset').textContent = '¿Seguro? Se pierden los cambios';
      setTimeout(() => { reseteando = false; $('btnReset').textContent = 'Descartar cambios'; }, 4000);
      return;
    }
    try { localStorage.removeItem(LLAVE); } catch (e) {}
    cargar();
    limpiar();
    pintarFiltros();
    pintarTabla();
    pintarCifras();
    reseteando = false;
    $('btnReset').textContent = 'Descartar cambios';
    avisar('Volvimos al catálogo original.');
  });

  /* ---------- Arranque ---------- */

  $('btnSalir').addEventListener('click', aulaSalir);

  const menu = $('menuToggle'), links = $('navLinks');
  if (menu) menu.addEventListener('click', () => {
    const a = links.classList.toggle('open');
    menu.setAttribute('aria-expanded', a ? 'true' : 'false');
  });

  const habia = cargar();
  pintarFiltros();
  pintarTabla();
  pintarCifras();
  if (habia) avisar('Retomamos los cambios que tenías sin exportar.');
})();
