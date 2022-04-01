//here retrieve the generated number from Localstorage.
//here retrieve the generated number from Localstorage.
let show = JSON.parse(localStorage.getItem("number"));
if (show[0] == 6) {
  document.getElementById("show_number").style.color = "green";
  document.getElementById("show_number").append(show[0]);
} else if (show[0] == 1) {
  document.getElementById("show_number").style.color = "yellow";
  document.getElementById("show_number").append(show[0]);
} else {
  document.getElementById("show_number").style.color = "red";
  document.getElementById("show_number").append(show[0]);
}