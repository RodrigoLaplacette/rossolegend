const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
    menu.parentElement.classList.toggle('open');
});
