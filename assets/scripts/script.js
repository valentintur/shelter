import { data } from '../../assets/data/pets.js';
import { mobileMenu } from './mobile-menu.js';
import { renderAnimalCards } from './render-animals-cards.js';
import { randomSlider } from './random-slider.js';
import { paginationSlider } from './pagination-slider.js';

mobileMenu();
renderAnimalCards();

if (window.location.href.indexOf('main') != -1) {
    randomSlider();
} else {
    paginationSlider();
}



