const carousel = document.querySelector('.carousel-inner');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
let currentSlide = 0;
const slides = carousel.querySelectorAll('.carousel-item');

function goToSlide(n) {
  slides[currentSlide].classList.remove('flex');
  slides[currentSlide].classList.add('hidden');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.remove('hidden');
  slides[currentSlide].classList.add('flex');
}

prevButton.addEventListener('click', () => {
  goToSlide(currentSlide - 1);
});

nextButton.addEventListener('click', () => {
  goToSlide(currentSlide + 1);
});