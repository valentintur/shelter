import {data} from '../data/pets.js';
import {renderHtml} from './render-html.js';
import { paginationSlider } from './pagination-slider.js';
import { createBigArr } from './create-big-arr.js';

export function renderAnimalCards () {

    const renderPetCart = (petIndex, data, parentNode) => {
        renderHtml('article', ['section-our-friends__slide-element', 'slide-element'], parentNode);
        renderHtml('img', ['slide-element__image', 'text-align-center'], '.section-our-friends__slide-element', petIndex);
        renderHtml('h4', ['h4', 'slide-element__title', 'text-align-center'], '.section-our-friends__slide-element', petIndex);
        renderHtml('button', ['button', 'button-secondary', 'button-animal', 'text-align-center'], '.section-our-friends__slide-element', petIndex);
        renderHtml('div', ['modal-window'], '.section-our-friends__slide-element', petIndex);
        renderHtml('button', ['button-circle', 'button-arrow', 'modal-window__close'], '.modal-window', petIndex);
        renderHtml('div', ['modal-window__block'], '.modal-window', petIndex);
        renderHtml('img', ['modal-window__image'], '.modal-window__block', petIndex);
        renderHtml('div', ['modal-window__description'], '.modal-window__block', petIndex);
        renderHtml('h3', ['h3', 'modal-window__title'], '.modal-window__description', petIndex);
        renderHtml('h4', ['h4', 'modal-window__type-block'], '.modal-window__description', petIndex);
        renderHtml('p', ['h5', 'modal-window__description-text'], '.modal-window__description', petIndex);
        renderHtml('ul', ['modal-window__list'], '.modal-window__description', petIndex);
        renderHtml('li', ['h5', 'modal-window__list-item', 'age'], '.modal-window__list', petIndex);
        renderHtml('li', ['h5', 'modal-window__list-item', 'inoculations'], '.modal-window__list', petIndex);
        renderHtml('li', ['h5', 'modal-window__list-item', 'diseases'], '.modal-window__list', petIndex);
        renderHtml('li', ['h5', 'modal-window__list-item', 'parasites'], '.modal-window__list', petIndex);

        document.querySelectorAll('.slide-element__image')[petIndex].src = data[petIndex].img;
        document.querySelectorAll('.slide-element__image')[petIndex].alt = data[petIndex].name;
        document.querySelectorAll('.slide-element__title')[petIndex].innerHTML = data[petIndex].name;
        document.querySelectorAll('.button-animal')[petIndex].innerHTML = 'Learn more';
        document.querySelectorAll('.modal-window__image')[petIndex].src = data[petIndex].img;
        document.querySelectorAll('.modal-window__image')[petIndex].alt = data[petIndex].name;
        document.querySelectorAll('.modal-window__title')[petIndex].innerHTML = data[petIndex].name;
        document.querySelectorAll('.modal-window__type-block')[petIndex].innerHTML = `${data[petIndex].type} - ${data[petIndex].breed}`;
        document.querySelectorAll('.modal-window__description-text')[petIndex].innerHTML = data[petIndex].description;
        document.querySelectorAll('.age')[petIndex].innerHTML = `<span>Age</span>: ${data[petIndex].age}`;
        document.querySelectorAll('.inoculations')[petIndex].innerHTML = `<span>Inoculations</span>: ${data[petIndex].inoculations}`;
        document.querySelectorAll('.diseases')[petIndex].innerHTML = `<span>Diseases</span>: ${data[petIndex].diseases}`;
        document.querySelectorAll('.parasites')[petIndex].innerHTML = `<span>Parasites</span>: ${data[petIndex].parasites}`;
    }

    const overlay = document.createElement('div');
    const createOverflowElem = () => {
        overlay.classList.add('overflow');
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.position = 'absolute';
        overlay.style.top = '0';
        overlay.style.backgroundColor = '#292929';
        overlay.style.opacity = '0.6';
        overlay.style.zIndex = '5';
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'relative';
        document.body.prepend(overlay);
    }

    function actionAnimalCards () {
        const buttonAnimalPopup = document.querySelectorAll('.section-our-friends__slide-element');
        const modalWindow = document.querySelectorAll('.modal-window'); 
        const modalWindowClose = document.querySelectorAll('.modal-window__close');

        overlay.addEventListener('mouseover', () => {
            modalWindowClose.forEach(el => {
                el.classList.add('active');
            })      
        })

        modalWindow.forEach(el => {
            el.addEventListener('mouseover', () => {
                modalWindowClose.forEach(el => {
                    el.classList.remove('active');
                })      
            })
        })

        buttonAnimalPopup.forEach( (btnElem, btnIndex) => {
            btnElem.addEventListener('click', () => {
                createOverflowElem();
                modalWindow[btnIndex].classList.add('active');
            })
        })
        modalWindowClose.forEach( (btnElem, btnIndex) => {
            btnElem.addEventListener('click', (el) => {
                modalWindow[btnIndex].classList.remove('active');
                document.body.style.overflow = 'auto';
                overlay.remove();
                el.stopPropagation();
            })
        })
        overlay.addEventListener('click', () => {
            modalWindow.forEach(el => {
                el.classList.remove('active');
                document.body.style.overflow = 'auto';
                overlay.remove();
            })
            
        });
    }
     
    if (window.location.href.indexOf('main') != -1) {
        data.forEach( (el, index) => {
                renderPetCart(index, data, '.section-our-friends__slides');
        })
    } else if (window.location.href.indexOf('pets') != -1) {
        
        // let bigArr = [];

        // for (let i = 0; i < 6; i++) {
        //     let tempArr = data.sort( () => { return Math.random() - 0.5 + (i * 0.01) });
        //     bigArr.push(tempArr);
        // }

        // bigArr = bigArr.flat();

        // bigArr.forEach( (el, index) => {
        //         renderPetCart(index, bigArr, '.section-our-friends__slides');
        // })

        createBigArr()
        createBigArr().forEach( (el, index) => {
                renderPetCart(index, createBigArr(), '.section-our-friends__slides');
        })

    }

    actionAnimalCards();

}

