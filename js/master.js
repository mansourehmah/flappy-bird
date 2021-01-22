var jumping = 0;
var hype = 0;

function playGame() {
  // reset character and background
  document.getElementById("character").style.top = 0 + "px";
  document.getElementById("hole").style.left = 100 + "%";
  document.getElementById("pipe").classList.remove("stop");
  document.getElementById("hole").classList.remove("stop");
  document.getElementById("ground").classList.remove("stop");
  document.getElementById("cloud").classList.remove("stop");
  document.querySelector("body").classList.remove("goTop");

  // start
  document.getElementById("play").classList.add("displayNone");
  document.getElementById("setting").classList.add("displayNone");
  document.getElementById("ground").classList.add("playAnimation");
  document.getElementById("cloud").classList.add("playAnimation");
  document.getElementById("pipe").classList.add("pipe_move");
  document.getElementById("hole").classList.add("pipe_move");
  document.getElementById("gameOver").classList.add("displayFlex");

  //   faster speed
  if (hype % 2) {
    document.getElementById("pipe").classList.add("hypper_due");
    document.getElementById("hole").classList.add("hypper_due");
  }

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
        character.style.top = characterTop + 1 * ((hype % 2) + 1) + "px";
      }

      //gameover
      if (
        parseInt(characterTop > maxTop) ||
        (blockLeft < 80 &&
          blockLeft > -70 &&
          (holeTop > characterTop || characterTop > holeTop + 160))
      ) {
        clearInterval(fallInterval);
        // clear for play again
        document.getElementById("play").classList.remove("displayNone");
        document.getElementById("cloud").classList.add("stop");
        document.getElementById("pipe").classList.add("stop");
        document.getElementById("ground").classList.add("stop");
        document.getElementById("hole").classList.add("stop");
        document.getElementById("setting").classList.remove("displayNone");
      }
    }, 10);
  }, 500);
}

// jumping function
function jump() {
  var _play = document.getElementById("play");
  if (getComputedStyle(_play, null).getPropertyValue("display") == "none") {
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
}

// setting box
function setting() {
  document.getElementById("setting").classList.toggle("rotate");
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
var filter = 1;
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
    hype++;
  }
  if (btn == "trippy") {
    document.querySelector(".trippy span").classList.toggle("changebtn");
    document.querySelector(".trippy").classList.toggle("activeBtn");
    let deg = 0;
    filter++;
    const filterInterval = setInterval(function () {
      document.querySelector("body").style.filter =
        "hue-rotate(" + deg + "deg)";
      deg = deg + 10;
      if (filter % 2) {
        clearInterval(filterInterval);
      }
    }, 80);
  }
}

//main function
window.onload = function () {
  var hole = document.getElementsByClassName("hole")[0];
  hole.addEventListener("animationiteration", () => {
    var random = Math.random() * 220 - 4;
    hole.style.top = random + "px";
  });
  document.querySelector("body").addEventListener("keypress", (e) => {
    if (e.key === " " || e.key === "Spacebar") {
      e.preventDefault();
      jump();
    }
  });
};
