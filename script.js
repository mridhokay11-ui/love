// Ambil elemen-elemen DOM
const audio = document.getElementById('backgroundMusic');
const playMusicBox = document.getElementById('playMusicBox');
const questionBox = document.getElementById('questionBox');
const answerBox = document.getElementById('answerBox');
const finalBox = document.getElementById('finalBox');
const startButton = document.getElementById('startButton');
const optionA = document.getElementById('optionA');
const optionB = document.getElementById('optionB');
const pauseMusicButton = document.getElementById('pauseMusicButton');
const resumeMusicButton = document.getElementById('resumeMusicButton');

// Tombol Play Music
document.getElementById('playAudioButton').addEventListener('click', () => {
  audio.play().catch((error) => {
    console.log("Autoplay tidak diizinkan oleh browser.");
  });
  playMusicBox.classList.add('hidden');
  fadeIn(questionBox);
});

// Tombol Start
startButton.addEventListener('click', () => {
  fadeOut(questionBox, () => {
    fadeIn(answerBox);
  });
});

// Pilihan A
optionA.addEventListener('click', () => {
  fadeOut(answerBox, () => {
    fadeIn(finalBox);
  });
});

// Pilihan B (melarikan diri)
optionB.addEventListener('click', () => {
  moveButtonRandomly(optionB);
});

// Kontrol Musik
pauseMusicButton.addEventListener('click', () => {
  audio.pause();
  pauseMusicButton.classList.add('hidden');
  resumeMusicButton.classList.remove('hidden');
});

resumeMusicButton.addEventListener('click', () => {
  audio.play();
  resumeMusicButton.classList.add('hidden');
  pauseMusicButton.classList.remove('hidden');
});

// Fungsi untuk memindahkan tombol B secara acak
function moveButtonRandomly(button) {
  const containerWidth = document.querySelector('.container').offsetWidth;
  const containerHeight = document.querySelector('.container').offsetHeight;
  const buttonWidth = button.offsetWidth;
  const buttonHeight = button.offsetHeight;

  const randomX = Math.random() * (containerWidth - buttonWidth);
  const randomY = Math.random() * (containerHeight - buttonHeight);

  button.style.position = 'absolute';
  button.style.left = `${randomX}px`;
  button.style.top = `${randomY}px`;
}

// Fungsi Fade-In
function fadeIn(element) {
  element.classList.remove('hidden');
  setTimeout(() => {
    element.classList.add('fade-in');
  }, 10);
}

// Fungsi Fade-Out
function fadeOut(element, callback) {
  element.classList.remove('fade-in');
  setTimeout(() => {
    element.classList.add('hidden');
    if (callback) callback();
  }, 500);
}