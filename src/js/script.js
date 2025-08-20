// music play
const playBtn = document.getElementById("playBtn");
const playIcon = document.getElementById("playIcon");
const audio = document.getElementById("myAudio");

let isPlaying = false;

playBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (!isPlaying) {
    audio.play();
    playIcon.src = "./src/images/player-icon/pause.webp";
    isPlaying = true;
  } else {
    audio.pause();
    playIcon.src = "./src/images/player-icon/play.webp";
    isPlaying = false;
  }
});

// nav

const menu = document.querySelector("nav");
const menuIcon = document.querySelector("#navBtn");

function toggleMenu() {
  menuIcon.classList.toggle("bi-x-lg");
  menu.classList.toggle("!right-[0]");
  // alert("jsnKAS");
}
