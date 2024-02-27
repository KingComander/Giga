console.log('Hello World');


// JavaScript to add 'scrolled' class to header on scroll
window.onscroll = function() {changeHeaderBackground()};

function changeHeaderBackground() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").classList.add("scrolled");
    } else {
        document.getElementById("header").classList.remove("scrolled");
    }
}



var slideIndex = 0;
showSlides();

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n === undefined) {n = ++slideIndex}
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 10000); // Change image every 10 seconds
}

const menu = document.getElementById('menu');
const body = document.querySelector('body');

const run = () => {
  const box = document.createElement('div');
  box.classList.add('box');
  body.appendChild(box);

  
}
