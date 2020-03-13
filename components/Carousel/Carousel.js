/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

imageArray = ["./assets/carousel/mountains.jpeg", "./assets/carousel/computer.jpeg", "./assets/carousel/trees.jpeg", "./assets/carousel/turntable.jpeg"];


function carouselCreator(imageArr) {

  const newCarousel = document.createElement('div'),
    leftBtn = document.createElement('div'),
    // imageOne = document.createElement('img'),
    imageContainer = document.createElement('div'),
    rightBtn = document.createElement('div');

  imageArr.forEach(image => {
    let pic = document.createElement('img');
    pic.src = image;
    pic.alt = "picture for carousel";
    imageContainer.append(pic);
  });

  leftBtn.textContent = '\u00AB';
  rightBtn.textContent = ' \u00BB';
  // imageOne.src = "./assets/carousel/mountains.jpeg";
  newCarousel.classList.add('carousel');
  leftBtn.classList.add('left-button');
  rightBtn.classList.add('right-button');

  newCarousel.append(leftBtn, imageContainer, rightBtn);
  // newCarousel.append(leftBtn, imageOne, rightBtn);

  return newCarousel;
};

const carouselContainer = document.querySelector('.carousel-container');
console.log(carouselContainer);
carouselContainer.append(carouselCreator(imageArray));