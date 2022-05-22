new Swiper('.swiper ', {
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
  slidesPerView: 6,
  spaceBetween: 20,
  loop: true,
  slideToClikedSlide: true,
  speed: 350,
  keyboard: {
    enabled: true,
    onlyOnViewport: true,
    pageDownUp: true
  },
  mousewheel: {
    sensitivity: 2

  },

  breakpoints: {
    320: {
      slidesPerView: 1
    },
    480: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1080: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 6,
    }
  }
});