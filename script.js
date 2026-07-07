// Guess My Number - Logic code

'use strict';

const hiddenNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
document.querySelector('.score-label .score').textContent = score;

document.querySelector('.check-box').addEventListener('click', function () {
  const guessed = Number(document.querySelector('.input-number').value);

  if (!guessed || guessed < 1 || guessed > 20) {
    document.querySelector('.message').textContent = '🚫Not Valid!🚫';
  } else if (guessed === hiddenNumber) {
    document.querySelector('.message').textContent = '🎉You Win🎉';
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

console.log(hiddenNumber);
