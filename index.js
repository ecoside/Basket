let homeScoreBtnOne = document.getElementById("home-score-btn-1");
let homeStoreEl = document.getElementById("home-score-number");
let homeScore = 0;

let guestScoreBtnOne = document.getElementById("guest-score-btn-1");
let guestStoreEl = document.getElementById("guest-score-number");
let guestScore = 0;

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function () {
    this.sound.play();
  };
  this.stop = function () {
    this.sound.pause();
  };
}

var addSound;
var resetSound;

function loadSound() {
  addSound = new sound("sound/gameboy-pluck-41265.mp3");
  resetSound = new sound(
    "sound/075856_typewriter-bell-amp-carriage-reset-82407.mp3"
  );
}

function playSound() {
  addSound.play();
}

function playSoundReset() {
  resetSound.play();
}

loadSound();

function increaseHomeScoreOne() {
  playSound();
  homeScore += 1;
  homeStoreEl.textContent = homeScore;
}

function increaseHomeScoreTwo() {
  playSound();
  homeScore += 2;
  homeStoreEl.textContent = homeScore;
}

function increaseHomeScoreThree() {
  playSound();
  homeScore += 3;
  homeStoreEl.textContent = homeScore;
}

function increaseGuestScoreOne() {
  playSound();
  guestScore += 1;
  guestStoreEl.textContent = guestScore;
}

function increaseGuestScoreTwo() {
  playSound();
  guestScore += 2;
  guestStoreEl.textContent = guestScore;
}

function increaseGuestScoreThree() {
  playSound();
  guestScore += 3;
  guestStoreEl.textContent = guestScore;
}

function resetHomeScore() {
  playSoundReset();
  homeScore = 0;
  homeStoreEl.textContent = homeScore;
}

function resetGuestScore() {
  playSoundReset();
  guestScore = 0;
  guestStoreEl.textContent = guestScore;
}
