import { data } from '../data/pets.js';

export function paginationSlider() {
    const petsPaginationBlock = document.querySelector('#pets-pagination-block');

    petsPaginationBlock.addEventListener('click', () => {
        console.log(data);
    })
    console.log(petsPaginationBlock)
}

