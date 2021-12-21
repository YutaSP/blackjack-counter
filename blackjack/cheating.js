/* JAVASCRIPT
This is where I declare all variables that will be used by the function. 
Mostly used var for flexibility instead of const, since most of these variable was made as I wrote.
*/
const checks = document.getElementsByClassName("checks");
var cards = [];
var count = 0;
var place = 1;
var variable = [];
const deckOfCards = [
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  6,
  6,
  6,
  6,
  7,
  7,
  7,
  7,
  8,
  8,
  8,
  8,
  9,
  9,
  9,
  9,
  10,
  10,
  10,
  10,
  11,
  11,
  11,
  11,
  12,
  12,
  12,
  12,
  13,
  13,
  13,
  13,
];
/*
There is only single function in this whole project. 
This is due to my lack of motivation to separate all actions performed by this single function 
into multiple function just for the sake of wanting to cheat in blackjack.
Although this project is suppose to show the ability to work with vanilla Javascript, this is 
not the primary object of this project.
*/

function hitOrHold() {
  preventDefault();
  for (let i = 0; i < 52; i++) {
    if (checks[i].checked === true) {
      cards.push(checks[i].value);
    }
  }
  for (let i = 0; i < cards.length; i++) {
    if (cards[i] <= 6) {
      count++;
    } else if (cards[i] <= 9) {
      count += 0;
    } else {
      count--;
    }
  }
  
  if (count > 0) {
    document.getElementById("deck").innerHTML =
      "Higher chance of 10 through Ace";
  } else if (count < 0) {
    document.getElementById("deck").innerHTML = "Higher chance of 2 through 6";
  } else {
    document.getElementById("deck").innerHTML = "Higher chance of 7 through 9";
  }
  
  for (x = 0; x < cards.length; x++) {
    var index = deckOfCards.findIndex((el) => el == cards[x]);
    deckOfCards = [
      ...deckOfCards.slice(0, index),
      ...deckOfCards.slice(index + 1),
    ];
  }
  for (x = 0; x < deckOfCards.length; x++) {
    if (deckOfCards[x] === deckOfCards[x + 1]) {
      place++;
    } else {
      let percentage = (place / 52.0) * 100;
      variable = percentage.toFixed(2);
      place = 1;
      let id = document.querySelector("#answer");
      let listItem = document.createElement("li");
      listItem.textContent = variable + "% chance of " + deckOfCards[x];
      id.appendChild(listItem);
    }
  }
  /* 
  This portion makes the reset button appear by removing attribute and renaming class so css associated with that class can take over.
  */
  document.getElementById("resets").removeAttribute("aria-hidden");
  document.getElementById("resets").className = "reset.active";
}
