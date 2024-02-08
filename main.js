console.log('Hello World');

var slideIndex = 0;
var slides = [];
var slidesData = [
    {img: 'img/hero-11.jpg', title: 'Designed for your satisfaction.', description: 'Creating an attractive and functional site has never been easier.', link: '#'},
    {img: 'img/hero-12.jpg', title: 'Efficiency and Elegance.', description: 'Blend modern design with powerful functionality.', link: '#'},
    {img: 'img/hero-13.jpg', title: 'Crafted with Care.', description: 'Every detail is meticulously designed for your needs.', link: '#'},
];

window.onload = function() {
    var container = document.getElementById('slideshow-container');
    slidesData.forEach(function(slideData) {
        var slide = document.createElement('div');
        slide.className = 'mySlides';

        var img = document.createElement('img');
        img.src = slideData.img;
        slide.appendChild(img);

        var content = document.createElement('div');
        
        var h2 = document.createElement('h2');
        h2.innerHTML = slideData.title + '<span>.</span>';
        content.appendChild(h2);

        var p = document.createElement('p');
        p.textContent = slideData.description;
        content.appendChild(p);

        var a = document.createElement('a');
        a.href = slideData.link;
        a.innerHTML = 'How it works<i class="uil uil-arrow-down size-22 ml-2"></i>';
        content.appendChild(a);

        slide.appendChild(content);
        container.appendChild(slide);
        slides.push(slide);
    });
    showSlides();
};

function showSlides() {
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = 'block';
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}
