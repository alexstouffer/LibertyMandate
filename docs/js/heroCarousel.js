//get all the images and li from HTML
var carouselImages = document.getElementsByClassName('carousel-image');
var dotNode = document.getElementsByTagName("li");
var currentIndex = 0;


function displayImage() {
  for (let j = 0; j < carouselImages.length; j++) {
    carouselImages[j].style.display = "none";
  }
  carouselImages[currentIndex].style.display = "block";
}

function moveLeft() {
  if (currentIndex == 0) {
    currentIndex = carouselImages.length - 1;
  } else {
    currentIndex--;
  }

  displayImage();

}

function moveRight() {
  if (currentIndex == carouselImages.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }

  displayImage();

}

window.setInterval(moveRight, 4000);

//initial stage
displayImage();