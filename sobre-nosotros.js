const swiper = new Swiper(".swiper", {
  autoplay: true,

  slidesPerView: 3,

  spaceBetween: 30,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    860: {
      slidesPerView: 3,
    },

    150: {
      slidesPerView: 1,
    },
  },
});
