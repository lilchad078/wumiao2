const audio = document.getElementById("bgmusic");


window.addEventListener("click", () => {
  audio.muted = false;
  audio.play();
});
