(function() {
    'use strict';
    let currentImage = 0;
    const myPhotos = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];
    const container = document.getElementById('content');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('previous');
    console.log(myPhotos.length)
    nextBtn.addEventListener('click', function(event) {
        event.preventDefault();
        currentImage++;
        if (currentImage > myPhotos.length - 1) {
            currentImage = 0;
        }
        swapImage();
    });
    prevBtn.addEventListener('click', function(event) {
        event.preventDefault();
        currentImage--;
        if (currentImage < 0) {
            currentImage = myPhotos.length - 1;
        }
        swapImage();
    });

    function swapImage() {
        const newSlide = document.createElement('img');
        newSlide.src = `slides/${myPhotos[currentImage]}`;
        newSlide.className = "fadeinimg";
        container.appendChild(newSlide);
        if (container.children.length > 2) {
            container.removeChild(container.children[0]);
        }
    }
}());