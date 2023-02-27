function ibg() {
  let ibg = document.querySelectorAll('.ibg');
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}
ibg();

const iconMenu = document.querySelector('.header__burger');
if (iconMenu) {
  const menuBody = document.querySelector('.menu__body');
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

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
