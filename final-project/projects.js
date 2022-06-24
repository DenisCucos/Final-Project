const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.nav-bar-menu')
const navLogo = document.querySelector('#nav-bar-logo')


const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);