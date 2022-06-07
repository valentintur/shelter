import {data} from '../data/pets.js';

export function createBigArr () {
    let tempArr1 = [].concat(data.slice(-1),data.slice(0,-1));
    let tempArr2 = [].concat(tempArr1.slice(-1),tempArr1.slice(0,-1));
    let tempArr3 = [].concat(tempArr2.slice(-1),tempArr2.slice(0,-1));
    let tempArr4 = [].concat(tempArr3.slice(-1),tempArr3.slice(0,-1));
    let tempArr5 = [].concat(tempArr4.slice(-1),tempArr4.slice(0,-1));
    let tempArr6 = [].concat(tempArr5.slice(-1),tempArr5.slice(0,-1));

    let newBigArr = [].concat(tempArr1,tempArr2,tempArr3,tempArr4,tempArr5,tempArr6);

    return newBigArr;
}