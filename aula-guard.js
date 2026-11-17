/* ============================================
   Grupo PAS — Aula Virtual · El candado
   ============================================

   ACÁ SE CAMBIA LA CLAVE DEL AULA. Es la única línea que importa:  */

const AULA_CLAVE = 'grupopas2026';

/* --------------------------------------------
   LEER ESTO ANTES DE PUBLICAR
   --------------------------------------------
   Esta clave está escrita en un archivo que el navegador descarga,
   así que CUALQUIERA puede verla haciendo "ver código fuente".
   No es seguridad: es un mostrador, no una caja fuerte.

   Sirve perfectamente si los videos de YouTube quedan PÚBLICOS,
   porque en ese caso no hay nada que ocultar y la clave solo le da
   marco institucional al material.

   Si en algún momento el material tiene que ser realmente exclusivo
   de los PAS, hay que reemplazar este archivo por una de estas dos:

     · Hosting en Vercel  -> la clave pasa a vivir en el servidor y
                             nunca viaja al navegador. Se cambia desde
                             un panel, sin tocar código.
     · Seguir en GitHub   -> se cifra la página del campus, así el
                             código fuente queda ilegible sin la clave.

   En los dos casos se cambia SOLO este archivo. El aula, las clases y
   el diseño quedan exactamente igual.
============================================ */

/* Cuántos días queda abierta la sesión antes de volver a pedir la clave. */
const AULA_DIAS = 30;

const AULA_LLAVE = 'grupopas_aula';

/* Deja la sesión abierta. */
function aulaEntrar() {
  const vence = Date.now() + AULA_DIAS * 24 * 60 * 60 * 1000;
  try {
    localStorage.setItem(AULA_LLAVE, String(vence));
  } catch (e) {
    /* Navegador en modo incógnito o con el almacenamiento bloqueado:
       la sesión no se recuerda, pero el ingreso funciona igual. */
  }
}

/* ¿La sesión sigue vigente? */
function aulaAbierta() {
  try {
    const vence = Number(localStorage.getItem(AULA_LLAVE));
    if (!vence) return false;
    if (Date.now() > vence) { localStorage.removeItem(AULA_LLAVE); return false; }
    return true;
  } catch (e) {
    return false;
  }
}

/* Cierra la sesión y vuelve al login. */
function aulaSalir() {
  try { localStorage.removeItem(AULA_LLAVE); } catch (e) {}
  window.location.href = 'aula-virtual.html';
}

/* Compara la clave ingresada. */
function aulaClaveValida(ingresada) {
  return String(ingresada).trim() === AULA_CLAVE;
}

/* Protege el campus: si no hay sesión, devuelve al login.
   Se llama desde aula-campus.html, antes de dibujar nada. */
function aulaProteger() {
  if (!aulaAbierta()) {
    window.location.replace('aula-virtual.html');
    return false;
  }
  return true;
}
