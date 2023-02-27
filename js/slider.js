new Swiper('.rooms__block', {
  slidesPerView: 3,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    760: {
      slidesPerView: 2,
    },
    1190: {
      slidesPerView: 3,
    },
  },
  spaceBetween: 30,
  navigation: {
    nextEl: '.rooms-pagination-right',
    prevEl: '.rooms-pagination-left',
  },
});

new Swiper('.gallery__block', {
  slidesPerView: 1,
  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //   },
  //   760: {
  //     slidesPerView: 2,
  //   },
  //   1190: {
  //     slidesPerView: 3,
  //   },
  // },
  // spaceBetween: 10,
  navigation: {
    nextEl: '.gallery-pagination-right',
    prevEl: '.gallery-pagination-left',
  },
});
