/* Toggle menu for mobile users*/
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('show');
    });
  }
});
// IMAGE SLIDER

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}
// Affiliation Slider
const slides2 = document.querySelectorAll(".slides2 img");
let slideIndex2 = 0;
let intervalId2 = null;

document.addEventListener("DOMContentLoaded", initializeSlider2);

function initializeSlider2() {
  if (slides2.length > 0) {
    slides2[slideIndex2].classList.add("displaySlide2");
    intervalId2 = setInterval(nextSlide2, 5000);
  }
}

function showSlide2(index) {
  if (index >= slides2.length) {
    slideIndex2 = 0;
  } else if (index < 0) {
    slideIndex2 = slides2.length - 1;
  }

  slides2.forEach(slide => {
    slide.classList.remove("displaySlide2");
  });
  slides2[slideIndex2].classList.add("displaySlide2");
}

function prevSlide2() {
  clearInterval(intervalId2);
  slideIndex2--;
  showSlide2(slideIndex2);
}

function nextSlide2() {
  slideIndex2++;
  showSlide2(slideIndex2);
}