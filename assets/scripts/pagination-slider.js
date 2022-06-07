import { data } from '../data/pets.js';


export function paginationSlider() {
    const petsPaginationBlock = document.querySelector('#pets-pagination-block');
    let bigArr = [];

    for (let i = 0; i < 6; i++) {
        bigArr.push(data.sort(() => Math.random()-0.5));
        console.log(bigArr)
    }
    bigArr = bigArr.flat();
    //console.log(bigArr);
    return bigArr;
}

