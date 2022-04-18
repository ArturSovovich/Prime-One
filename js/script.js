const iconMenu = document.querySelector('.menu_icon');
const menuBody = document.querySelector('.header-wrapper');
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    // и добовляет на(body) сласс ('_lock') заприщая прокрутку контента при открытом бургере
    document.body.classList.toggle('_lock');
    // ------------------------------------------------
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  })
}
