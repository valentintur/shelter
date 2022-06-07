export function paginationSlider() {
    const petsPaginationBlock = document.querySelector('#pets-pagination-block');
    const allSlides = petsPaginationBlock.querySelectorAll('.section-our-friends__slide-element');
    const slidesPaginationDoubleBack = document.querySelector('.slides-pagination__double-back');
    const slidesPaginationBack = document.querySelector('.slides-pagination__back');
    const slidesPaginationNext = document.querySelector('.slides-pagination__next');
    const slidesPaginationDoubleNext = document.querySelector('.slides-pagination__double-next');
    let slidesPaginationNumber = document.querySelector('.pagination-number').innerHTML;
    let numberOfActiveSlides = 0;

    if (slidesPaginationNumber == 1) {
        slidesPaginationBack.disabled = true;
        slidesPaginationDoubleBack.disabled = true;
    }

    if (window.innerWidth >= 1280 ) {
        numberOfActiveSlides = 8;
    } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
        numberOfActiveSlides = 6;
    } else {
        numberOfActiveSlides = 3;
    }

    ls
    let numberOfPages = allSlides.length / numberOfActiveSlides;


    allSlides.forEach((el, index) => {
        if (index < (slidesPaginationNumber * numberOfActiveSlides)) {
            allSlides[index].classList.add('active');
        }
    })

    slidesPaginationNext.addEventListener('click', () => {
        if (slidesPaginationNumber < numberOfPages) {
            slidesPaginationNumber = Number(document.querySelector('.pagination-number').innerHTML) + 1;
            document.querySelector('.pagination-number').innerHTML = Number(document.querySelector('.pagination-number').innerHTML) + 1;
            slidesPaginationNext.disabled = false;
            if (slidesPaginationNumber == numberOfPages) {
                slidesPaginationNext.disabled = true;
                slidesPaginationDoubleNext.disabled = true;
            } else if (slidesPaginationNumber != 1) {
                slidesPaginationBack.disabled = false;
                slidesPaginationDoubleBack.disabled = false;
            }
        } 
        
        allSlides.forEach((el, index) => {
            if ((index < (slidesPaginationNumber * numberOfActiveSlides)) && (index >= (slidesPaginationNumber * numberOfActiveSlides) - 8)) {
                allSlides[index].classList.add('active');
            } else {
                allSlides[index].classList.remove('active');
            }
        })
    })

    slidesPaginationBack.addEventListener('click', () => {
        if ((slidesPaginationNumber <= numberOfPages) && (slidesPaginationNumber > 1)) {
            slidesPaginationNumber = Number(document.querySelector('.pagination-number').innerHTML) - 1;
            document.querySelector('.pagination-number').innerHTML = Number(document.querySelector('.pagination-number').innerHTML) - 1;
            if (slidesPaginationNumber == 1) {
                slidesPaginationBack.disabled = true;
                slidesPaginationDoubleBack.disabled = true;
                slidesPaginationNext.disabled = false;
                slidesPaginationDoubleNext.disabled = false;
            } else if ((slidesPaginationNumber != 1) && (slidesPaginationNumber < numberOfPages)) {
                slidesPaginationNext.disabled = false;
                slidesPaginationDoubleNext.disabled = false;
            }
        } 
        
        allSlides.forEach((el, index) => {
            if ((index < (slidesPaginationNumber * numberOfActiveSlides)) && (index >= (slidesPaginationNumber * numberOfActiveSlides) - 8)) {
                allSlides[index].classList.add('active');
            } else {
                allSlides[index].classList.remove('active');
            }
        })
    })

    slidesPaginationDoubleNext.addEventListener('click', () => {
        if (slidesPaginationNumber < numberOfPages) {
            slidesPaginationNumber = numberOfPages;
            document.querySelector('.pagination-number').innerHTML = numberOfPages;
            slidesPaginationNext.disabled = true;
            if (slidesPaginationNumber == numberOfPages) {
                slidesPaginationDoubleNext.disabled = true;
                slidesPaginationBack.disabled = false;
                slidesPaginationDoubleBack.disabled = false;
            } 
        } 
        
        allSlides.forEach((el, index) => {
            if ((index < (slidesPaginationNumber * numberOfActiveSlides)) && (index >= (slidesPaginationNumber * numberOfActiveSlides) - 8)) {
                allSlides[index].classList.add('active');
            } else {
                allSlides[index].classList.remove('active');
            }
        })
    })

    slidesPaginationDoubleBack.addEventListener('click', () => {
        if ((slidesPaginationNumber <= numberOfPages) && (slidesPaginationNumber > 1)) {
            slidesPaginationNumber = 1;
            document.querySelector('.pagination-number').innerHTML = 1;
            if (slidesPaginationNumber == 1) {
                slidesPaginationBack.disabled = true;
                slidesPaginationDoubleBack.disabled = true;
                slidesPaginationNext.disabled = false;
                slidesPaginationDoubleNext.disabled = false;
            }
        } 
        
        allSlides.forEach((el, index) => {
            if ((index < (slidesPaginationNumber * numberOfActiveSlides)) && (index >= (slidesPaginationNumber * numberOfActiveSlides) - 8)) {
                allSlides[index].classList.add('active');
            } else {
                allSlides[index].classList.remove('active');
            }
        })
    })


}

