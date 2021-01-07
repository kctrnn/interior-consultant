window.addEventListener('load', () => {
  const navToggle = document.querySelector('.navbar__toggle');

  navToggle?.addEventListener('click', () => {
    const menu = document.querySelector('.menu');

    menu.classList.toggle('active');
  });
});
