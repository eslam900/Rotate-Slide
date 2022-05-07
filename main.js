const prev = document.getElementById("prev");
const next = document.getElementById("next");
const image = document.querySelectorAll("img");
const sliderImages = document.querySelector(".slider-images");
let x = 0;
let timeSlide;
let counter = 8;

prev.addEventListener("click", () => {
  x += 45;
  clearTimeout(timeSlide);
  rotateSlide();
  changeScale();
  if (counter == 0) {
    counter = 8;
  }
});
next.addEventListener("click", () => {
  x -= 45;
  clearTimeout(timeSlide);
  rotateSlide();
  counter = counter + 2;
  if (counter > 8) {
    counter = 1;
  }
  changeScale();
});
function rotateSlide() {
  sliderImages.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  timeSlide = setTimeout(() => {
    x += 45;
    rotateSlide();
    changeScale();
    if (counter == 0) {
      counter = 8;
    }
  }, 3000);
}
function changeScale() {
  image.forEach((img) => {
    if (img.id == counter) {
      img.style.transform = `scale(2)`;
    } else {
      img.style.transform = `none`;
    }
  });
  counter--;
}
changeScale();
rotateSlide();
