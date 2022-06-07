export function randomSlider() {

    const ourFriendsElem = document.querySelector('#our-friends');
    const allSlides = ourFriendsElem.querySelectorAll('.section-our-friends__slide-element');
    const previousSlides = ourFriendsElem.querySelector('.button-arrow_back');
    const nextSlides = ourFriendsElem.querySelector('.button-arrow_next');
    
    const generateNewSlides = () => {

        let randomClickArr = [];
        let numberOfActiveSlides = 0;
        let previousArr = [];

        for (let i = 0; i < allSlides.length; i++) {
            if (allSlides[i].classList.contains('active')) {
                previousArr.push(i); 
            }
        }

        if (window.innerWidth >= 1280 ) {
            numberOfActiveSlides = 3;
        } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
            numberOfActiveSlides = 2;
        } else {
            numberOfActiveSlides = 1;
        }
    
        while (randomClickArr.length < numberOfActiveSlides) {

            let randomNumber = Math.floor(Math.random() * (allSlides.length));
            
            if ((randomClickArr.indexOf(randomNumber) === -1) && (previousArr.indexOf(randomNumber) === -1) ) {
                randomClickArr.push(randomNumber);
            }
        }
    
        deleteActiveClasses();

        for (let i = 0; i < allSlides.length; i++) {
            for (let j = 0; j < randomClickArr.length; j++) {
                if (randomClickArr[j] == i) {
                    allSlides[i].classList.add('active');
                }
            }
        }
        return randomClickArr;
    }

    const deleteActiveClasses = () => {
        allSlides.forEach(el => {
            el.classList.remove('active');
        })
    }

    generateNewSlides();

    previousSlides.addEventListener('click', generateNewSlides);
    nextSlides.addEventListener('click', generateNewSlides);
}