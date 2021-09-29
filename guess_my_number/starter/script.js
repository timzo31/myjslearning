'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// const random_number = Math.floor(Math.random() * 21);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; // state variable
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When there is no input
  if (!guess) {
    // console.log(
    //   (document.querySelector('.message').textContent = '⛔ Enter a number!')
    // );
    displayMessage('⛔ Enter a number!');
  }
  // When guess is too high than 20
  else if (guess > 20) {
    document.querySelector(
      '.message'
    ).textContent = `⛔ Enter a number betwee 1 - 20!`;
  }
  //---------------------------------------------------------
  // When player wins
  else {
    if (guess === secretNumber) {
      // const result = (document.querySelector('.message').textContent =
      //   '🎉 Congratulations! Correct.');
      displayMessage('🎉 Congratulations! Correct.');

      document.querySelector('.number').textContent = secretNumber;

      document.querySelector('body').style.backgroundColor = '#60b347';

      document.querySelector('.number').style.width = '30rem';

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess !== secretNumber) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too high!' : `📉 Too Low!`;
      //displayMessage(guess > secretNumber ? '📈 Too high!' : `📉 Too Low!');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = '😭You lost the game!';
      displayMessage('😭You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
    // When guess is too high
    // else if (guess > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = `📈 Too high!`;
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '😭You lost the game!';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // }

    // // When guess is too low
    // else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = `📉 Too Low!`;
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '😭You lost!';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  //document.querySelector('.number').textContent = secretNumber;
});
