
const cards = ["queen", "queen", "king", "king" ];
const cardsInPlay = [];

let cardOne = cards[0];
let cardTwo = cards[2];

cardsInPlay.push(cardOne);
cardsInPlay;

cardsInPlay.push(cardTwo);
cardsInPlay;

if (cardsInPlay.length === 2)
{
	let length2Confirmed = true;
	console.log(length2Confirmed);
	if(cardsInPlay[0] === cardsInPlay[1]) {
	alert("You find a match!");
	} else{
		alert("Sorry, try again.");
	}
}

console.log("User flipped " + cardsInPlay);
