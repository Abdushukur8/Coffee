const navbar = document.querySelector('.navbar')
const burger = document.querySelector('.header__burger')
function openBurger(){
    navbar.classList.toggle('bur_open')
}
burger.addEventListener('click', openBurger)

const searchHeader = document.querySelector('.header_search')
const searIcon = document.querySelector('.icon_search')
searIcon.addEventListener('click', function(){
    searchHeader.classList.toggle('header_search_active')
})