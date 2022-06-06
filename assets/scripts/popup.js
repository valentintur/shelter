import {renderHtml} from './render-html.js';


export function renderPopUp () {
    const renderPopUp = (petIndex, data, parentNode) => {
        renderHtml('article', ['section-our-friends__slide-element', 'slide-element'], parentNode);
        renderHtml('img', ['slide-element__image', 'text-align-center'], '.section-our-friends__slide-element', petIndex);
        renderHtml('h4', ['h4', 'slide-element__title', 'text-align-center'], '.section-our-friends__slide-element', petIndex);
        renderHtml('button', ['button', 'button-secondary', 'button-animal', 'text-align-center'], '.section-our-friends__slide-element', petIndex);
        document.querySelectorAll('.slide-element__image')[petIndex].src = data[petIndex].img;
        document.querySelectorAll('.slide-element__image')[petIndex].alt = data[petIndex].name;
        document.querySelectorAll('.slide-element__title')[petIndex].innerHTML = data[petIndex].name;
        document.querySelectorAll('.button-animal')[petIndex].innerHTML = 'Learn More' + data[petIndex].name;
        document.body.
    }

}