$(document).ready(function () {
	var mySwiper = new Swiper(".swiper-time-line", {
	  autoHeight: true,
	  autoplay: {
		delay: 5000,
		disableOnInteraction: false
	  },
	  speed: 500,
	  direction: "horizontal",
	  navigation: {
		nextEl: ".swiper-button-next-time-line",
		prevEl: ".swiper-button-prev-time-line"
	  },
	  pagination: {
		el: ".swiper-pagination",
		type: "progressbar"
	  },
	  loop: false,
	  effect: "slide",
	  spaceBetween: 30,
	  on: {
		init: function () {
		  $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
		  $(".swiper-pagination-custom .swiper-pagination-switch").eq(0).addClass("active");
		},
		slideChangeTransitionStart: function () {
		  $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
		  $(".swiper-pagination-custom .swiper-pagination-switch").eq(mySwiper.realIndex).addClass("active");
		}
	  }
	});
	$(".swiper-pagination-custom .swiper-pagination-switch").click(function () {
	  mySwiper.slideTo($(this).index());
	  $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
	  $(this).addClass("active");
	});
  });
  