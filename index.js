// Aim is to attempt to beat the dealer by getting a count as close to 21 as possible, without going over 21.

// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11

//initialize the variables
let firstCard = 0;
let secondCard = 0;
let hasBlackJack = false; // to track if a player has won
let isAlive = true; // to track if a player has lost
let message = [
  " Do you want to draw again?",
  " Blackjack! You win!",
  " You lose! Game over",
  "No more tries",
];
let cards = [firstCard, secondCard];

//get the element from the DOM
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let sumEl = document.getElementById("sum-el");
let messageEl = document.getElementById("message-el");
let startButton = document.getElementById("start");
let endEl = document.getElementById("end-el");

// update the display
num1.textContent += cards[0];
num2.textContent += cards[1];

// add up the cards
function adder() {
  return cards.reduce((acc, curr) => acc + curr);
}

function draw() {
  // draw two cards i.e. two random numbers
  cards[0] = getRandomCard();
  cards[1] = getRandomCard();
  num1.textContent = "First Card: " + cards[0];
  num2.textContent = "Second Card: " + cards[1];

  // 2. Create a variable, sum, and set it to the sum of the two cards
  let sum = adder();
  sumEl.textContent = "Sum: " + sum;
  messageEl.textContent = "";

  sumChecker(sum);
}

//new Card
function newCard() {
  if (isAlive === true && hasBlackJack === false && cards.length < 3) {
    thirdCard = getRandomCard();
    num3.textContent = "Third Card: " + thirdCard;
    cards.push(thirdCard);
    console.log(cards);
    sum = adder();
    sumEl.textContent = "Sum: " + sum;
    sumChecker(sum);
  } else {
    endEl.textContent = message[3];
    isAlive = false;
  }
}

// 3. If sum is 21, display Black Jack. Get as close to 21 as possible. But if > 21, you lose

function sumChecker(sum) {
  if (sum < 21) {
    messageEl.textContent = message[0];
    startButton.textContent = "Try again";
  } else if (sum === 21) {
    messageEl.textContent = message[1];
    hasBlackJack = true;
    startButton.textContent = "Play again";
  } else {
    messageEl.textContent = message[2];
    startButton.textContent = "Play new game";
    isAlive = false;
  }
}

//clean up function
if (!isAlive || hasBlackJack) {
  reset();
}

function reset() {
  firstCard = 0;
  secondCard = 0;
  thirdCard = 0;
  sum = 0;

  num1.textContent = "First Card: " + firstCard;
  num2.textContent = "Second Card: " + secondCard;
  num3.textContent = "Third Card: " + thirdCard;
  sumEl.textContent = "Sum: " + sum;
  messageEl.textContent = "Want to play a round?";
}

let getRandomCard = () => Math.floor(Math.random() * 11) + 2;
