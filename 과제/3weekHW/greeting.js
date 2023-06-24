const greeting = document.querySelector("#greeting");
const greet = ["안녕하세요.", "좋은 아침 입니다.", "Hello", "HI", "Bye"];

function getGreet() {
  let random = greet[Math.floor(Math.random() * greet.length)];
  greeting.innerText = `${random}`;
}
// 랜덤 초기화
function init() {
  const number = getRandom(1, 7);
  displayImg(number);
  getGreet();
}
init();
