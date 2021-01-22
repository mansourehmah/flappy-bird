var jumping = 0;

function playGame() {
  document.getElementById("character").style.top = 0 + "px";
  document.getElementById("hole").style.left = 100 + "%";
  document.getElementById("pipe").classList.remove("stop");
  document.getElementById("hole").classList.remove("stop");

  document.querySelector(".play").classList.add("displayNone");
  document.querySelector("#setting").classList.add("displayNone");
  document.querySelector(".ground").classList.add("playAnimation");
  document.querySelector(".cloud").classList.add("playAnimation");
  document.querySelector(".pipe").classList.add("pipe_move");
  document.querySelector(".hole").classList.add("pipe_move");
  document.querySelector("#gameOver").classList.add("displayFlex");

  //   updating top position
  let character = document.getElementById("character");
  let pipe = document.getElementById("pipe");
  let hole = document.getElementById("hole");
  let maxTop = (window.innerHeight * 80) / 100 - 42;
  setTimeout(function () {
    const fallInterval = setInterval(function () {
      characterTop = parseInt(
        window.getComputedStyle(character, null).getPropertyValue("top")
      );

      blockLeft = parseInt(
        window.getComputedStyle(pipe, null).getPropertyValue("left")
      );
      holeTop = parseInt(
        window.getComputedStyle(hole, null).getPropertyValue("top")
      );
      if (jumping == 0) {
        character.style.top = characterTop + 1.5 + "px";
      }

      //gameover
      if (
        parseInt(characterTop > maxTop) ||
        (blockLeft < 80 &&
          blockLeft > -70 &&
          (holeTop > characterTop || characterTop > holeTop + 160))
      ) {
        clearInterval(fallInterval);
        document.querySelector(".play").classList.remove("displayNone");
        document.querySelector(".cloud").classList.add("stop");
        document.querySelector(".pipe").classList.add("stop");
        document.querySelector(".ground").classList.add("stop");
        document.querySelector(".hole").classList.add("stop");
        document.querySelector("#setting").classList.remove("displayNone");
      }
    }, 10);
  }, 500);
}

// jumping function
function jump() {
  document.querySelector("#character img").classList.add("rotateBird");
  jumping = 1;
  jumpCount = 0;
  let character = document.getElementById("character");
  const jumpInterval = setInterval(function () {
    characterTop = parseInt(
      window.getComputedStyle(character, null).getPropertyValue("top")
    );
    if (characterTop > 6) {
      character.style.top = characterTop - 3 + "px";
    }
    if (jumpCount > 20) {
      clearInterval(jumpInterval);
      jumping = 0;
      jumpCount = 0;
      document.querySelector("#character img").classList.remove("rotateBird");
    }
    jumpCount++;
  }, 10);
}

function setting() {
  document.querySelector("#setting").classList.toggle("rotate");
  document.querySelector("body").classList.toggle("goTop");
}

birds = ["bird.svg", "bird_blue.svg", "bird_red.svg"];
index = 0;
function changeBird(btn) {
  if (btn == "next") {
    if (index != 2) {
      index++;
    } else {
      index = 0;
    }
  } else {
    if (index == 0) {
      index = 2;
    } else {
      index--;
    }
  }
  document.querySelector(".bird").src = "img/" + birds[index];
  document.querySelector(".changeBird .bird").src = "img/" + birds[index];
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

//main function
window.onload = function () {
  var hole = document.getElementsByClassName("hole")[0];
  hole.addEventListener("animationiteration", () => {
    var random = Math.random() * 220 - 4;
    hole.style.top = random + "px";
  });
};
