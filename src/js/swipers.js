   var swiper = new Swiper('.swiper-brands', {
     loop: true,
     centeredSlides: true,
     slidesPerView: 5,
     initialSlide: 2,
     breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 20,
      initialSlide: 2,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
     1000: {
      slidesPerView: 5,
      spaceBetween: 5
    },
  },
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
   });