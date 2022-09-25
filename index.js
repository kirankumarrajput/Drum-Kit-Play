// Button Event
const btns = document.querySelectorAll(".drum");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    playSound(this.innerText);
  });
}

// keyBoard Event
document.addEventListener("keypress", function (e) {
  playSound(e.key);
});

function playSound(key) {
  switch (key) {
    case "w":
      new Audio("sounds/crash.mp3").play();
      break;
    case "a":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    case "s":
      new Audio("sounds/snare.mp3").play();
      break;
    case "d":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "j":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "k":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "l":
      new Audio("sounds/tom-4.mp3").play();
      break;
    default:
      console.log(key);
  }
}
