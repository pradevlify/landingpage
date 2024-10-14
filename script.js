// navbar js 
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');
});




//testimonial js
const slides = document.querySelector('.slides');
const cards = document.querySelectorAll('.testimonial-card');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let currentIndex = 0;
const cardsToShow = 3; // Number of cards to show at a time

function updateSlider() {
    const totalCards = cards.length;
    const totalSets = Math.ceil(totalCards / cardsToShow);

    // Calculate the offset for the transform based on currentIndex
    const offset = -currentIndex * (100 / cardsToShow);
    slides.style.transform = `translateX(${offset}%)`;

    // Disable buttons if at the start or end of the slider
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= totalSets - 1;
}

// Next button functionality
nextBtn.addEventListener('click', () => {
    if (currentIndex < Math.ceil(cards.length / cardsToShow) - 1) {
        currentIndex++;
    } else {
        // Wrap to the first set
        currentIndex = 0;
    }
    updateSlider();
});

// Previous button functionality
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        // Wrap to the last set
        currentIndex = Math.ceil(cards.length / cardsToShow) - 1;
    }
    updateSlider();
});

// Initialize the slider
updateSlider();

