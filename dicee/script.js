// generate random nums b/w 1 and 6
let randomNum1 = Math.floor(Math.random() * 6) + 1;
let randomNum2 = Math.floor(Math.random() * 6) + 1;

// select dice img elements and h1
const h1 = document.querySelector("h1");
const dice1 = document.querySelector(".dice1");
const dice2 = document.querySelector(".dice2");

// randomly change dice img src
dice1.src = `./images/dice${randomNum1}.png`;
dice2.src = `./images/dice${randomNum2}.png`;

// game logic
if (randomNum1 > randomNum2) {
    h1.innerText = "Player 1 Wins!";
} else if (randomNum2 > randomNum1) {
    h1.innerText = "Player 2 Wins!";
} else {
    h1.innerText = "Draw!";
}