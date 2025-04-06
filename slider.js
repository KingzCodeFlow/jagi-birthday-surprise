// This file implements the slider feature for the birthday website.
// It contains functions to create and control the image slider.

let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

function showSlide(index) {
    // Ensure the index wraps around
    currentSlide = (index + totalSlides) % totalSlides;

    // Hide all slides and show only the current one
    slides.forEach((slide, i) => {
        slide.style.display = i === currentSlide ? 'block' : 'none';
    });
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Initialize the slider
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);

    // Add touch support
    const slider = document.querySelector('.slider');
    let startX = 0;

    slider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    slider.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        if (startX - endX > 50) {
            changeSlide(1); // Swipe left
        } else if (endX - startX > 50) {
            changeSlide(-1); // Swipe right
        }
    });
});