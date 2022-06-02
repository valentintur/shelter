const headerBlockElem = document.querySelector('.header__block');
const headerLogoElem = document.querySelector('.header__logo');
const navigationMobileElem = document.querySelector('.navigation__mobile');
const menuButtonElem = document.querySelector('#menu-toggle');
const overflow = document.createElement('div');

const createOverflowElem = () => {
    overflow.classList.add('overflow');
    overflow.style.width = '100%';
    overflow.style.height = '100vh';
    overflow.style.position = 'absolute';
    overflow.style.top = '0';
    overflow.style.backgroundColor = '#292929';
    overflow.style.opacity = '0.6';
    overflow.style.zIndex = '5';
    document.body.prepend(overflow);
}

const moveLogoInsideMobileMenu = () => {
    if (menuButtonElem.checked == 1) {
        navigationMobileElem.prepend(headerLogoElem);
        createOverflowElem();
    } else {
        headerBlockElem.prepend(headerLogoElem);
        overflow.remove()
    }
    
}

menuButtonElem.addEventListener('click', moveLogoInsideMobileMenu)