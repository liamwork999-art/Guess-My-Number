// Guess My Number - Logic code

'use strict';

const winModal = document.getElementById('winModal');
const loseModal = document.getElementById('loseModal');
const checkButton = document.querySelector('.check-box');
const againButton = document.querySelector('.again-button');
const scoreElement = document.querySelector('.score-label .score');
const messageElement = document.querySelector('.message');
const guessElement = document.querySelector('.guess');
const inputElement = document.querySelector('.input-number');
const highscoreElement = document.querySelector('.highscore');

let hiddenNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

scoreElement.textContent = score;

const updateScore = () => {
  scoreElement.textContent = score;
};

const showMessage = (message) => {
  messageElement.textContent = message;
};

const resetGame = () => {
  winModal.classList.add('hidden');
  loseModal.classList.add('hidden');
  score = 20;
  updateScore();
  showMessage('Start Guessing...');
  guessElement.textContent = '?';
  hiddenNumber = Math.trunc(Math.random() * 20) + 1;
  inputElement.value = '';
};

const handleLoss = () => {
  showMessage('💥You Lose💥');
  loseModal.classList.remove('hidden');
  scoreElement.textContent = 0;
};

checkButton.addEventListener('click', function () {
  const guessed = Number(inputElement.value);

  if (!guessed || guessed < 1 || guessed > 20) {
    showMessage('🚫Not Valid!🚫');
    return;
  }

  if (guessed === hiddenNumber) {
    showMessage('🎉You Win🎉');
    winModal.classList.remove('hidden');
    guessElement.textContent = String(hiddenNumber);

    if (score > highscore) {
      highscore = score;
      highscoreElement.textContent = highscore;
    }
    return;
  }

  if (score > 1) {
    showMessage(guessed > hiddenNumber ? '☝️Too High☝️' : '👇Too Low👇');
    score -= 1;
    updateScore();
  } else {
    handleLoss();
  }
});

againButton.addEventListener('click', resetGame);

winModal.addEventListener('click', function (event) {
  if (event.target === this) {
    this.classList.add('hidden');
  }
});

loseModal.addEventListener('click', function (event) {
  if (event.target === this) {
    this.classList.add('hidden');
  }
});

console.log(hiddenNumber);
