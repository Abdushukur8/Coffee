// BURGER start

const navbar = document.querySelector('.navbar')
const burger = document.querySelector('.header__burger')

function openBurger(){
    navbar.classList.toggle('bur_open')
}
burger.addEventListener('click', openBurger)
// BURGER end

// search Header 
const searchHeader = document.querySelector('.header_search')
const searIcon = document.querySelector('.icon_search')
searIcon.addEventListener('click', function(){
    searchHeader.classList.toggle('header_search_active')
})
// search Header 
 

// slider main 

const images = document.querySelectorAll('.slider-img')

const slideControls = document.querySelectorAll('.slideBtn')

let imageIndex = 0
function show(index) {
    images[imageIndex].classList.remove('active')
    images[index].classList.add('active')
    imageIndex = index

}

slideControls.forEach((e) => {
    e.addEventListener('click', () =>{
        if (event.target.classList.contains('prevBtn')){
            let index = imageIndex - 1
            if(index < 0){
                index = images.length - 1
            }
            show(index)
        }else if (event.target.classList.contains('nextBtn')) {
            let index = imageIndex + 1;
            if (index >= images.length) {
                index = 0;
            }
            show(index);
        }
    })
})
show(imageIndex)
// slider main 