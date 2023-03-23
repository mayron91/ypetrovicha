
var swiper = new Swiper('.swiper-brands', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 5,
    initialSlide: 2,
    breakpoints: {
   320: {
     slidesPerView: 3,
     spaceBetween: 25,
     initialSlide: 0,
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

  var swiper = new Swiper('.swiper-lic', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 5,
    initialSlide: 2,
    breakpoints: {
   320: {
     slidesPerView: 3,
     spaceBetween: 17,
     initialSlide: 1,
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

  var swiper = new Swiper('.swiper-partners', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 5,
    initialSlide: 2,
    breakpoints: {
   320: {
     slidesPerView: 3,
     spaceBetween: 10,
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

  var swiper = new Swiper('.swiper-members', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 3,
    initialSlide: 0,
    breakpoints: {
   320: {
     slidesPerView: 1,
     spaceBetween: 25,
   },
   800: {
     slidesPerView: 3,
     spaceBetween: 50,
   },
    1000: {
     slidesPerView: 3,
     spaceBetween: 50
   },
 },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var swiper = new Swiper('.swiper-brigada', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 3,
    initialSlide: 0,
    breakpoints: {
   320: {
     slidesPerView: 3,
     spaceBetween: 5,
   },
   800: {
     slidesPerView: 3,
     spaceBetween: 50,
   },
    1000: {
     slidesPerView: 3,
     spaceBetween: 50
   },
 },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  var swiper3 = new Swiper('#swiper-member', {
    loop: true,
    slidesPerView: 5,
    initialSlide: none,
    navigation: {
      nextEl: '.swiper-button-next-member',
      prevEl: '.swiper-button-prev-member',
    }
  });