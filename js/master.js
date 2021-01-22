var pipe = document.querySelector(".pipe");
var character = document.querySelector(".character");
function playGame() {
  document.querySelector(".play").classList.add("displayNone");
  document.querySelector(".ground").classList.add("playAnimation");
  document.querySelector(".cloud").classList.add("playAnimation");
  document.querySelector(".pipe").classList.add("pipe_move");
  document.querySelector(".hole").classList.add("pipe_move");
}
