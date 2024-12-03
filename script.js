'use strict';

/*
console.log(document.querySelector('.message').textContent);
if (document.querySelector('.message').textContent === 'Start guessing...') {
  document.querySelector('.message').textContent = '🎊 Correct Number!';
}

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;
console.log(document.querySelector(".guess").value =23);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener("click", function() {
   const guess = Number(document.querySelector(".guess").value);
   // console.log(guess, typeof guess);
   if (score > 1) {
     if (!guess) {
       document.querySelector(".message").textContent = "⛔️ No Number!";
     }

     // When player wins the game
     else if (guess === secretNumber) {
       document.querySelector(".number").textContent = secretNumber;
       document.querySelector(".message").textContent = "🎊 Correct Answer!";
       document.querySelector("body").style.backgroundColor = "#60b347";
       document.querySelector(".number").style.width = "30rem";
       console.log(score);
       if (score > document.querySelector(".highscore").textContent) {
         document.querySelector(".highscore").textContent = score;
       }
     }

     // When the guess is too high
     else if (guess > secretNumber) {
       document.querySelector(".message").textContent = "📈 Too High!";
       score--;
     }

     // When the guess is too low
     else if (guess < secretNumber) {
       document.querySelector(".message").textContent = "📉 Too Low!"
       score--;
     }
   } else {
     document.querySelector(".message").textContent = "💥 You lost the game!";
     score = 0;
   }
  document.querySelector(".score").textContent = score;
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
});