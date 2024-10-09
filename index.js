// Aim is to attempt to beat the dealer by getting a count as close to 21 as possible, without going over 21.

// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11

//initialize the variables
let firstCard = 0;
let secondCard = 0;
let hasBlackJack = false; // to track if a player has won
let isAlive = true; // to track if a player has lost

//get the element from the DOM
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let sumEl = document.getElementById("sum");
let messageEl = document.getElementById("message");

// update the display
num1.textContent += firstCard;
num2.textContent += secondCard;

function draw() {
  // draw two cards i.e. two random numbers
  firstCard = Math.floor(Math.random() * 11) + 2;
  secondCard = Math.floor(Math.random() * 11) + 2;
  num1.textContent = "First Card: " + firstCard;
  num2.textContent = "Second Card: " + secondCard;

  // 2. Create a variable, sum, and set it to the sum of the two cards
  let sum = firstCard + secondCard;
  sumEl.textContent = "Sum: " + sum;
  messageEl.textContent = "";

  // 3. If sum is 21, display Black Jack. Get as close to 21 as possible. But if > 21, you lose

  if (sum < 21) {
    // sumEl.textContent += sum;
    messageEl.textContent += " Do you want to draw again?";
  } else if (sum === 21) {
    messageEl.textContent += " Blackjack! You win!";
    hasBlackJack = true;
  } else {
    messageEl.textContent += " You lose! Game over";
    isAlive = false;
    // reset();
  }
}

//clean up function
function reset() {
  firstCard = 0;
  secondCard = 0;
  sum = 0;

  num1.textContent = "First Card: " + firstCard;
  num2.textContent = "Second Card: " + secondCard;
  sumEl.textContent = "Sum: " + sum;
  messageEl.textContent = "Want to play a round?";
}
