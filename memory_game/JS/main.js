console.log("Up and running!");

var cards = ["queen","queen","king","king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cards[0]);
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);

console.log ('User flipped ' + cardOne);
console.log ('User flipped ' + cardTwo);

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1])
	alert("You have found a match!");
else if (cardsInPlay.length === 2 && cardsInPlay[0] !== cardsInPlay[1]) {
		alert("Sorry, try again!");
	}



