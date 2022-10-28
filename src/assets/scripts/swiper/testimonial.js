const swiperData = document.querySelector(".testimonials__swiper").dataset

const swiper = new Swiper('.testimonials__swiper', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.testimonials__button-next',
    prevEl: '.testimonials__button-prev',
  },
  breakpoints: {
    1120: {
      slidesPerView: 3,
      spaceBetween: 16
    }
  },
  autoplay: swiperData.autoplay,
  delay: parseInt(swiperData.delay) * 1000,
  loop: true
})