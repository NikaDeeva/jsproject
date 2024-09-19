
let currentSlide = 0;
const slides = document.querySelectorAll('.slides');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

function updateButtons(){
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === slides.length - 1;

}
function moveSlides(number){
    slides[currentSlide].classList.remove('active');
    currentSlide += number;
    slides[currentSlide].classList.add('active');
    updateButtons();
    
}
updateButtons();

