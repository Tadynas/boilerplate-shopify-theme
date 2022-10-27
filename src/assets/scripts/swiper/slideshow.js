const swiperData = document.querySelector(".slideshow__swiper").dataset
  
let custom
let type
if (swiperData.pagination === "custom") {
  custom = function (index, className) {
    return '<span class="swiper-pagination-custom ' + className + '">' + (index + 1) + "</span>"
  }
  type = "bullets"
} else { 
  custom = null 
  type = swiperData.pagination
}

const swiper = new Swiper('.slideshow__swiper', {
  navigation: {
    nextEl: '.slideshow__button-next',
    prevEl: '.slideshow__button-prev',
  },
  pagination: {
    el: '.slideshow__pagination',
    type: type,
    clickable: true,
    renderBullet: custom
  },
  autoplay: swiperData.autoplay,
  delay: parseInt(swiperData.delay) * 1000,
  loop: true
})