// var pipe = document.querySelector(".pipe");
// var character = document.querySelector(".character");
function playGame() {
  document.querySelector(".play").classList.add("displayNone");
  document.querySelector("#setting").classList.add("displayNone");
  document.querySelector(".ground").classList.add("playAnimation");
  document.querySelector(".cloud").classList.add("playAnimation");
  document.querySelector(".pipe").classList.add("pipe_move");
  document.querySelector(".hole").classList.add("pipe_move");
}

function setting() {
  document.querySelector("#setting").classList.toggle("rotate");
  document.querySelector("body").classList.toggle("goTop");
}

function changeBtn(btn) {
  if (btn == 'night') {
    document.querySelector(".night span").classList.toggle("changebtn");
    document.querySelector(".night").classList.toggle("activeBtn");
    document.querySelector(".sky").classList.toggle('changeSky');
    document.querySelector(".cloud").classList.toggle("changeOp");
  }
  if (btn == 'hyper') {
    document.querySelector(".hyper span").classList.toggle("changebtn");
    document.querySelector(".hyper").classList.toggle("activeBtn");
  }
}
