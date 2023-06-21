function print() {
  const user = document.getElementById("userName").value;
  document.getElementById("print_user").innerText = user + " : ";
  const txt = document.getElementById("text").value;
  document.getElementById("print_text").innerText = txt;

  userName.value = "";
  txt.value = "";
}
