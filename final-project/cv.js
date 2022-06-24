const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.nav-bar-menu')
const navLogo = document.querySelector('#nav-bar-logo')


const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

const highlightMenu = () => {
    const elementMenu = document.querySelector('.highlight')
    const homeMnu = document.querySelector('#home-page')
    const cvMenu = document.querySelector('#cv-page')
    const projectMenu = document.querySelector('#project-page')
    let scrollPos = window.scrollY
    console.log(scrollPos);

    if (window.innerWidth > 960 && scrollPos < 600) {
        homeMnu.classList.add('highlight')
        cvMenu.classList.remove('highlight')
        projectMenu.classList.remove('highlight')
        return
    }
    else
        if (window.innerWidth > 960 && scrollPos < 1400) {
            cvMenu.classList.add('highlight')
            homeMnu.classList.remove('highlight')
            projectMenu.classList.remove('highlight')

            return
        }
        else
            if (window.innerWidth > 960 && scrollPos < 2345) {
                projectMenu.classList.add('highlight')
                cvMenu.classList.remove('highlight')

                return
            }

    if ((elementMenu && window.innerWidth < 960 && scrollPos < 600) || elementMenu) {
        elementMenu.classList.remove('highlight')
    }
}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}
menuLinks.addEventListener('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu)

  