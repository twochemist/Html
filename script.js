// Toggle del menú móvil
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

if (burger && nav) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('is-open');
    const expanded = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!expanded));
  });
}

// Accesibilidad: activar con Enter en iconos
document.querySelectorAll('.nav-icons a').forEach(a => {
  a.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') a.click();
  });
});