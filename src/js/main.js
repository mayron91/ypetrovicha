import { initPhoneMask } from './utils/functions';


document.addEventListener('DOMContentLoaded', function(){
    $('form').parsley();
    initPhoneMask();
});

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