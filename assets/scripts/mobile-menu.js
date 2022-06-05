export function mobileMenu () {
    const headerBlockElem = document.querySelector('.header__block');
    const headerLogoElem = document.querySelector('.header__logo');
    const navigationMobileElem = document.querySelector('.navigation__mobile');
    const menuButtonElem = document.querySelector('#menu-toggle');
    const overlay = document.createElement('div');
    const linksElems = document.querySelectorAll('a');
    
    const createOverflowElem = () => {
        overlay.classList.add('overflow');
        overlay.style.width = '100%';
        overlay.style.height = '100vh';
        overlay.style.position = 'absolute';
        overlay.style.top = '0';
        overlay.style.backgroundColor = '#292929';
        overlay.style.opacity = '0.6';
        overlay.style.zIndex = '5';
        document.body.style.overflow = 'hidden';
        document.body.prepend(overlay);
    }
    
    const moveLogoInsideMobileMenu = () => {
        if (menuButtonElem.checked == 1) {
            navigationMobileElem.prepend(headerLogoElem);
            createOverflowElem();
        } else {
            headerBlockElem.prepend(headerLogoElem);
            document.body.style.overflow = 'auto';
            overlay.remove();
        }
        
    }
    
    const closeMobileMenu = () => {
        if (menuButtonElem.checked == 1) {
            menuButtonElem.checked = false;
            headerBlockElem.prepend(headerLogoElem);
            document.body.style.overflow = 'auto';
            overlay.remove();
        }
    }
    
    linksElems.forEach(e => {
        e.addEventListener('click', closeMobileMenu)
    })
    menuButtonElem.addEventListener('click', moveLogoInsideMobileMenu);
    overlay.addEventListener('click', closeMobileMenu);
}

