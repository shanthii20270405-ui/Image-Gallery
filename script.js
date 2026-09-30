let currentImage = 0;

let images = document.querySelectorAll(".image-box img");

function openLightbox(image) {

    currentImage = Array.from(images).indexOf(image);

    document.getElementById("lightbox").style.display = "flex";

    document.getElementById("lightbox-image").src = image.src;
}

function closeLightbox() {

    document.getElementById("lightbox").style.display = "none";
}

function nextImage() {

    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    document.getElementById("lightbox-image").src =
        images[currentImage].src;
}

function previousImage() {

    currentImage--;

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    document.getElementById("lightbox-image").src =
        images[currentImage].src;
}

function filterImages(category) {

    let boxes = document.querySelectorAll(".image-box");

    boxes.forEach(function(box) {

        if (category === "all" || box.classList.contains(category)) {
            box.style.display = "block";
        } 
        else {
            box.style.display = "none";
        }

    });
}