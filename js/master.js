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

birds = ["bird.svg", "bird_blue.svg", "bird_red.svg"];
index=0
function changeBird(btn) {
  if (btn == "next") {
      if(index!=2){
          index++
      }
      else{
          index=0
      }
  }
  else{
      if(index==0){
          index=2
      }
      else{
          index--
      }
  }
  document.querySelector('.bird').src = 'img/' + birds[index]
  document.querySelector('.changeBird .bird').src = 'img/' + birds[index]
}

function changeBtn(btn) {
  if (btn == "night") {
    document.querySelector(".night span").classList.toggle("changebtn");
    document.querySelector(".night").classList.toggle("activeBtn");
    document.querySelector(".sky").classList.toggle("changeSky");
    document.querySelector(".hole").classList.toggle("changeSky");
    document.querySelector(".cloud").classList.toggle("changeOp");
  }
  if (btn == "hyper") {
    document.querySelector(".hyper span").classList.toggle("changebtn");
    document.querySelector(".hyper").classList.toggle("activeBtn");
  }
}
