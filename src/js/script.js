const playBtns = document.querySelectorAll(".playBtn");
const allAudios = document.querySelectorAll(".myAudio");

playBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const player = btn.closest(".player");
    if (!player) return;

    const audio = player.querySelector(".myAudio");
    const playIcon = btn.querySelector(".playIcon");

    if (!audio || !playIcon) return;

    if (audio.paused) {
      allAudios.forEach((a) => {
        if (a !== audio) {
          a.pause();
          const otherPlayer = a.closest(".player");
          if (otherPlayer) {
            const otherIcon = otherPlayer.querySelector(".playIcon");
            if (otherIcon) {
              otherIcon.src = "./src/images/player-icon/play.webp";
            }
          }
        }
      });

      audio.play();
      playIcon.src = "./src/images/player-icon/pause.webp";
    } else {
      audio.pause();
      playIcon.src = "./src/images/player-icon/play.webp";
    }
  });
});

const modal = document.getElementById("default-modal");
const closeBtns = modal?.querySelectorAll("[data-modal-hide]");

if (closeBtns) {
  closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const modalAudios = modal.querySelectorAll(".myAudio");
      modalAudios.forEach((a) => {
        a.pause();
        a.currentTime = 0;
        const parent = a.closest(".player");
        if (parent) {
          const icon = parent.querySelector(".playIcon");
          if (icon) {
            icon.src = "./src/images/player-icon/play.webp";
          }
        }
      });
    });
  });
}

// modal class change observe করা
observer.observe(modal, { attributes: true, attributeFilter: ["class"] });

// nav

const menu = document.querySelector("nav");
const menuIcon = document.querySelector("#navBtn");

function toggleMenu() {
  menuIcon.classList.toggle("bi-x-lg");
  menu.classList.toggle("!right-[0]");
  // alert("jsnKAS");
}
