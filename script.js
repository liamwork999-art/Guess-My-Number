// Guess My Number - Logic code

'use strict';

let hiddenNumber = Math.trunc(Math.random() * 20) + 1;
const winModal = document.getElementById('winModal');

let score = 20;
document.querySelector('.score-label .score').textContent = score;

document.querySelector('.check-box').addEventListener('click', function () {
  const guessed = Number(document.querySelector('.input-number').value);

  if (!guessed || guessed < 1 || guessed > 20) {
    document.querySelector('.message').textContent = '🚫Not Valid!🚫';
  } else if (guessed === hiddenNumber) {
    // When player wins
    document.querySelector('.message').textContent = '🎉You Win🎉';
    winModal.classList.remove('hidden');
    document.querySelector('.guess').textContent = String(hiddenNumber);
  } else if (guessed > hiddenNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '☝️Too High☝️';
      score--;
      document.querySelector('.score-label .score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You Lose💥';
      document.querySelector('.score-label .score').textContent = 0;
    }
  } else if (guessed < hiddenNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '👇Too Low👇';
      score--;
      document.querySelector('.score-label .score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You Lose💥';
      document.querySelector('.score-label .score').textContent = 0;
    }
  }
});

// This will reset the game
document.querySelector('.again-button').addEventListener('click', function () {
  winModal.classList.add('hidden');
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.guess').textContent = '?';
  hiddenNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.input-number').value = '';
});

// This will turn off the victory screen
document.getElementById('winModal').addEventListener('click', function (event) {
  if (event.target === this) {
    this.classList.add('hidden');
  }
});

console.log(hiddenNumber);
