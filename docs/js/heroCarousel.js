const carouselContainer = document.getElementsByClassName("carousel-container")[0];
const carouselImages = carouselContainer.getElementsByTagName('img');

function displayImage() {
    for (let j = 0; j < carouselImages.length; j++) {
      carouselImages[j].style.display = "none";
    }
    carouselImages[currentIndex].style.display = "block";
  }
