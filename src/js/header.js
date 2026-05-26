export function initHeaderMenu() {
  const toggleButton = document.getElementById('menu');
  const nav = document.querySelector('.nav');  // toggle sobre .nav, no .nav-links

  if (toggleButton && nav) {
    toggleButton.addEventListener('click', () => {
      nav.classList.toggle('activo');
      // Cambia el ícono según estado
      toggleButton.textContent = nav.classList.contains('activo') ? '✕' : '☰';
    });

    // Cierra el menú si se hace click fuera
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && e.target !== toggleButton) {
        nav.classList.remove('activo');
        toggleButton.textContent = '☰';
      }
    });
  }
}
