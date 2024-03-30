const navbar = document.querySelector('.navbar')
const burger = document.querySelector('.header__burger')
function openBurger(){
    navbar.classList.toggle('bur_open')
}
burger.addEventListener('click', openBurger)
