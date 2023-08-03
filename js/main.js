$(function () {
  const mainslide = new Swiper(".mainvisual .swiper", {
    autoplay: {
      delay: 4000,
    },
    loop: true,
    speed: 1300,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
  });

  $(".mainvisual .arrows .left").on("click", function () {
    mainslide.slidePrev();
  });
  $(".mainvisual .arrows .right").on("click", function () {
    mainslide.slideNext();
  });

  const promotion = new Swiper(".promotion .swiper", {
    loop: true,
    autoplay: {
      delay: 4000,
    },
    speed: 1300,
  });

  $(".promotion .arrows .left").on("click", function () {
    promotion.slidePrev();
  });
  $(".promotion .arrows .right").on("click", function () {
    promotion.slideNext();
  });
});
