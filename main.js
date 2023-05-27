const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click' , () => {
        clearActiveClasses()
        slide.classList.add('active')
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}

const restartButton = document.querySelector(".reset");

restartButton.addEventListener(
    "click",
    () => {
        const textAnimation = document.querySelector(".text-stroke");

        setAnimationName(textAnimation, "none");
        requestAnimationFrame(() =>
            setTimeout(() => setAnimationName(textAnimation, ""), 0)
        );
    },
    false
);

const setAnimationName = (element, animationName) => {
    if (element) {
        element.style.animationName = animationName;
    }
};





