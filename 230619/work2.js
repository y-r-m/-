document.write("<br>");
let title = prompt("제목을 입력하세요");
let content = prompt("내용을 입력하세요");
document.write(`<h3>${title}</h3> ${content}<br>`);
document.write("<br>");

function print1() {
  const first = document.getElementById("firstboard").value;
  document.getElementById("print_content1").innerText = first;

  firstboard.value = null;
}
function print2() {
  const second = document.getElementById("secondboard").value;
  document.getElementById("print_content2").innerText = second;

  secondboard.value = null;
}
