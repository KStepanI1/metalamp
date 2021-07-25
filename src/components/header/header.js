import "@components/header/__buttons/__buttons.js"
import "@components/header/header.scss"
import "@components/header/__main-nav/__main-nav.js"
import "@components/header/__menu-burger/__menu-burger.js"

const header = document.querySelector('.header')
const menuBurger = document.querySelector('.header__burger')

function toggleMenuActive() {
    header.classList.toggle('header__menu_active')
}

menuBurger.addEventListener('click', toggleMenuActive)