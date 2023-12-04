function playSound(e) {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  let key = document.querySelector(`div[data-key="${e.keyCode}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransformStyling(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}
let keys = document.querySelectorAll(`.key`);
keys.forEach((key) =>
  key.addEventListener("transitionend", removeTransformStyling)
);
window.addEventListener("keydown", playSound);
