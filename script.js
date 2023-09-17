const audio = document.querySelector("audio");
const pawclick = document.querySelector(".cat-paw img");
const paw = document.querySelector(".paw");
const card = document.querySelector(".card");

// Initially, hide the 'paw' element and allow card interactions
paw.style.display = "none";
card.style.pointerEvents = 'auto';

pawclick.addEventListener("click", () => {
  // Check if the 'paw' is currently visible
  const isPawVisible = paw.style.display === "block";
  
  if (isPawVisible) {
    // If the 'paw' is currently displayed, hide it, make the card clickable, pause audio, and reset local storage
    paw.style.display = "none";
    card.style.pointerEvents = 'auto';
    audio.pause();
    localStorage.removeItem('value');
  } else {
    // If the 'paw' is not displayed, display 'paw', make the card unclickable, play audio, and set local storage
    audio.play();
    paw.style.display = "block";
    card.style.pointerEvents = 'none';
    localStorage.setItem('value', '1');
  }
});

document.addEventListener("click", (e) => {
  if (paw.style.display === "block") {
    // If the 'paw' is visible, move it to the click location and play audio
    paw.style.left = e.clientX + "px";
    paw.style.top = e.clientY + "px";
    paw.style.transform = `translate(-50%, -50%)`;

    audio.play();
  }
});
