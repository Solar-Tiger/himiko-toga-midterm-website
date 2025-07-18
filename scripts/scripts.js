const hamMenu = document.querySelector('.hamburger-menu');
const navMobile = document.querySelector('.nav-mobile');

hamMenu.addEventListener('click', () => {
    if (navMobile.classList.contains('visible')) {
        navMobile.classList.remove('visible');
        hamMenu.classList.remove('active');
    } else {
        navMobile.classList.add('visible');
        hamMenu.classList.add('active');
    }
});
