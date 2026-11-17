/* Formulario de contacto → Google Sheets (vía Apps Script).
   Instrucciones en apps-script/Codigo.gs.
   Pegá acá la URL de la App web que termina en /exec: */
const CONTACTO_ENDPOINT = 'https://script.google.com/macros/s/AKfycbz8jQKSJ_ZV0mNwQ8H25aQhD_v_B5p61VYn1OCFwgA6jcsyePPlOm0XBEaEwuPBdmEjjw/exec';

(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;
  const btn = form.querySelector('button[type="submit"]');
  const estado = document.getElementById('contactStatus');
  const textoBtn = btn.textContent;

  const mostrar = (tipo, html) => {
    estado.className = 'form-status ' + tipo;
    estado.innerHTML = html;
    estado.hidden = false;
  };

  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    if (!form.reportValidity()) return;

    if (!/^https:\/\/script\.google\.com\//.test(CONTACTO_ENDPOINT)) {
      mostrar('is-error', 'El formulario todavía no está conectado. Escribinos por <a href="https://wa.me/5493516180510" target="_blank" rel="noopener">WhatsApp</a>.');
      return;
    }

    const datos = new URLSearchParams(new FormData(form));
    datos.set('origen', 'Sitio web — ' + location.pathname.split('/').pop());

    btn.disabled = true;
    btn.textContent = 'Enviando…';
    estado.hidden = true;

    try {
      const r = await fetch(CONTACTO_ENDPOINT, { method: 'POST', body: datos });
      const json = await r.json().catch(() => ({ ok: r.ok }));
      if (!json.ok) throw new Error(json.error || 'Error');
      form.reset();
      mostrar('is-ok', '¡Gracias! Recibimos tu mensaje y el equipo comercial se va a comunicar con vos a la brevedad.');
    } catch (err) {
      mostrar('is-error', 'No pudimos enviar el mensaje. Probá de nuevo o escribinos por <a href="https://wa.me/5493516180510" target="_blank" rel="noopener">WhatsApp</a>.');
    } finally {
      btn.disabled = false;
      btn.textContent = textoBtn;
    }
  });
})();
