function startAnimation() {
  document.getElementById("flags").classList.add("animate")
  let BUTTON = document.getElementById("btn");
  let song = document.getElementById("Anthem");
  if(song.paused){
    song.muted = false;
    song.play();
    BUTTON.innerHTML = "⏸️"
  }
  else {
    song.pause();
    BUTTON.innerHTML = "▶️"
  }
}
