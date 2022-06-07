export function paginationSlider() {
    const petsPaginationBlock = document.querySelector('#pets-pagination-block');
    const allSlides = petsPaginationBlock.querySelectorAll('.section-our-friends__slide-element');
    console.log(allSlides);

    let numberOfActiveSlides = 0;

    // for (let i = 0; i < allSlides.length; i++) {
    //     if (allSlides[i].classList.contains('active')) {
    //         previousArr.push(i); 
    //     }
    // }

    if (window.innerWidth >= 1280 ) {
        numberOfActiveSlides = 8;
    } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
        numberOfActiveSlides = 6;
    } else {
        numberOfActiveSlides = 3;
    }

}

