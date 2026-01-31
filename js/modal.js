(() => {
  // MENU
  const menuOpenBtn = document.querySelector('[data-menu-open]');
  const menuCloseBtn = document.querySelector('[data-menu-close]');
  const menu = document.querySelector('[data-menu]');

  // ---- menu ----
  menuOpenBtn?.addEventListener('click', () => {
    menu.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  });

  menuCloseBtn?.addEventListener('click', () => {
    menu.classList.remove('is-open');
    document.body.style.overflow = '';
  });
})();
