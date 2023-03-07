function ibg() {
  let ibg = document.querySelectorAll('.ibg');
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}
ibg();

const itemsMenu = document.querySelectorAll('.menu__item');

const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}
itemsMenu.forEach((e) => {
  e.addEventListener('click', () => {
    document.body.classList.remove('_lock');
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
  });
});
const voiceContent = document.querySelector('.header__container');
const voiceContainer = document.querySelector('.menu__body');
const transferItem = document.querySelector('.header__socials');

const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

window.addEventListener('resize', defineWidth);
function defineWidth() {
  const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  if (width <= 991) {
    voiceContainer.appendChild(transferItem);
    transferItem.classList.add('active');
    console.log('small');
  } else {
    if (transferItem.classList.contains('active')) {
      voiceContent.appendChild(transferItem);
      transferItem.classList.remove('active');
    }
  }
}
defineWidth();

const galleryContent = document.querySelectorAll('.gallery__item');
const galleryContainer = document.querySelector('.gallery__wrapper');
const transferGalleryItem = document.querySelectorAll('.gallery__card');
const fake = document.querySelector('.fake');

if (galleryContainer) {
  window.addEventListener('resize', galleryWidth);
  function galleryWidth() {
    const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (width <= 767) {
      for (let i = 0; i < transferGalleryItem.length; i++) {
        galleryContainer.appendChild(transferGalleryItem[i]);
        transferGalleryItem[i].classList.add('swiper-slide');
        transferGalleryItem[0].classList.add('swiper-slide-active');
      }
      for (let i = 0; i < galleryContent.length; i++) {
        fake.appendChild(galleryContent[i]);
      }

      console.log('small');
    } else {
      if (transferGalleryItem[0].classList.contains('swiper-slide')) {
        for (let i = 0; i < galleryContent.length; i++) {
          galleryContainer.appendChild(galleryContent[i]);
        }
        for (let i = 0; i < transferGalleryItem.length; i++) {
          console.log('ok');
          if (i < 6) {
            galleryContent[0].appendChild(transferGalleryItem[i]);
          } else {
            galleryContent[1].appendChild(transferGalleryItem[i]);
          }

          transferGalleryItem[i].classList.remove('swiper-slide');
        }
      }
    }
  }
  defineWidth();
  galleryWidth();
}
