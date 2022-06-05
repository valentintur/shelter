import {data} from '../data/pets.js';
import {renderHtml} from './render-html.js';

export function renderAnimalCards () {

    const renderPetCart = (petIndex, data, parentNode) => {
        renderHtml('article', ['section-our-friends__slide-element', 'slide-element'], parentNode);
        renderHtml('img', ['slide-element__image', 'text-align-center'], '.section-our-friends__slide-element', petIndex);
        renderHtml('h4', ['h4', 'slide-element__title', 'text-align-center'], '.section-our-friends__slide-element', petIndex);
        renderHtml('button', ['button', 'button-secondary', 'button-animal', 'text-align-center'], '.section-our-friends__slide-element', petIndex);
        renderHtml('div', ['modal-window'], '.section-our-friends__slide-element', petIndex);
        renderHtml('button', ['modal-window__close'], '.modal-window', petIndex);
        renderHtml('div', ['modal-window__block'], '.modal-window', petIndex);
        renderHtml('img', ['modal-window__image'], '.modal-window__block', petIndex);
        renderHtml('div', ['modal-window__description'], '.modal-window__block', petIndex);
        renderHtml('h3', ['modal-window__title'], '.modal-window__description', petIndex);
        renderHtml('h4', ['modal-window__type-block'], '.modal-window__description', petIndex);
        renderHtml('p', ['modal-window__description-text'], '.modal-window__description', petIndex);
        renderHtml('ul', ['modal-window__list'], '.modal-window__description', petIndex);
        renderHtml('li', ['modal-window__list-item', 'age'], '.modal-window__list', petIndex);
        renderHtml('li', ['modal-window__list-item', 'inoculations'], '.modal-window__list', petIndex);
        renderHtml('li', ['modal-window__list-item', 'diseases'], '.modal-window__list', petIndex);
        renderHtml('li', ['modal-window__list-item', 'parasites'], '.modal-window__list', petIndex);

        document.querySelectorAll('.slide-element__image')[petIndex].src = data[petIndex].img;
        document.querySelectorAll('.slide-element__image')[petIndex].alt = data[petIndex].name;
        document.querySelectorAll('.slide-element__title')[petIndex].innerHTML = data[petIndex].name;
        document.querySelectorAll('.button-animal')[petIndex].innerHTML = 'Learn More';

        
        document.querySelectorAll('.modal-window__close')[petIndex].innerHTML = 'close';
        document.querySelectorAll('.modal-window__image')[petIndex].src = data[petIndex].img;
        document.querySelectorAll('.modal-window__image')[petIndex].alt = data[petIndex].name;
        document.querySelectorAll('.modal-window__title')[petIndex].alt = data[petIndex].name;
        document.querySelectorAll('.modal-window__type-block')[petIndex].innerHTML = `${data[petIndex].type} - ${data[petIndex].breed}`;
        document.querySelectorAll('.modal-window__description-text')[petIndex].innerHTML = data[petIndex].description;
        document.querySelectorAll('.age')[petIndex].innerHTML = `<span>Age</span>: ${data[petIndex].age}`;
        document.querySelectorAll('.inoculations')[petIndex].innerHTML = `<span>Inoculations</span>: ${data[petIndex].inoculations}`;
        document.querySelectorAll('.diseases')[petIndex].innerHTML = `<span>Diseases</span>: ${data[petIndex].diseases}`;
        document.querySelectorAll('.parasites')[petIndex].innerHTML = `<span>Parasites</span>: ${data[petIndex].parasites}`;
    }


    function actionAnimalCards () {
        const buttonAnimalPopup = document.querySelectorAll('.section-our-friends__slide-element');
        const modalWindow = document.querySelectorAll('.modal-window'); 
        const modalWindowClose = document.querySelectorAll('.modal-window__close');
        
        buttonAnimalPopup.forEach( (btnElem, btnIndex) => {
            btnElem.addEventListener('click', () => {
                console.log('clock');
                modalWindow[btnIndex].classList.add('active');
            })
        })
        modalWindowClose.forEach( (btnElem, btnIndex) => {
            btnElem.addEventListener('click', (el) => {
                console.log('clock');
                modalWindow[btnIndex].classList.remove('active');
                el.stopPropagation();
            })
        })
    }
    
    data.forEach( (el, index) => {
        renderPetCart(index, data, '.section-our-friends__slides');
    })
    actionAnimalCards();

}

