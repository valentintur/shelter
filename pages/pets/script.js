const headerBlockElem = document.querySelector('.header__block');
const headerLogoElem = document.querySelector('.header__logo');
const navigationMobileElem = document.querySelector('.navigation__mobile');
const menuButtonElem = document.querySelector('#menu-toggle');

const moveLogoInsideMobileMenu = () => {
    if (menuButtonElem.checked == 1) {
        navigationMobileElem.prepend(headerLogoElem);
    } else {
        headerBlockElem.prepend(headerLogoElem);
    }
    
}

menuButtonElem.addEventListener('click', moveLogoInsideMobileMenu)