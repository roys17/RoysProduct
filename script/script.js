let btnToggler = document.querySelector('.nav__toggler');
let navMenu = document.querySelector('.header__list-wrapper');

btnToggler.addEventListener('click', function() {
    this.classList.toggle('close');
    navMenu.classList.toggle('show');
})


// var swiper = new Swiper(".main__commnets", {
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 7500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   loop: true,
// });


var swiper = new Swiper(".main__commnets", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop:true,
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});