function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)



function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','navbar')

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.list-item')

function linkAction(){
    const navMenu = document.getElementById('navbar')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}






var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 100,
    centeredSlides: true,
    grapcursor: true,
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  });


