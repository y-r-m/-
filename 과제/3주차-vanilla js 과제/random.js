//랜덤 배경화면
const body = document.querySelector("body");
const IMG_NUMBER = 7;

function displayImg(imgNumber) {
  const image = new Image();
  image.src = `image/pic${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}
function getRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}
// 랜덤 초기화
function init() {
  const randomNumber = getRandom();
  displayImg(randomNumber);
}
init();
