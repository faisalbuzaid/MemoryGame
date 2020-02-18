
const cards = ["queen", "queen", "king", "king" ];
const cardsInPlay = [];

function flipCard(cardId){

	let cardOne = cards[0];
	let cardTwo = cards[2];

	//console.log(cardOne, cardTwo);

	cardsInPlay.push(cardOne);
	cardsInPlay;

	cardsInPlay.push(cardTwo);
	cardsInPlay;

	if (cardsInPlay.length === 2)
	{
		let length2Confirmed = true;
		//console.log(length2Confirmed);
		if(cardsInPlay[0] === cardsInPlay[1]) {
			console.log("user flipped " + cardsInPlay[0]);
			console.log("user flipped " + cardsInPlay[1]);
			console.log("You Win!!");
			alert("You find a match!");
		} else{
			console.log("user flipped " + cardsInPlay[0]);
			console.log("user flipped " + cardsInPlay[1]);
			console.log("Sorry, try again.");
			alert("Sorry, try again.");
		}
	}

}

flipCard();

//console.log("User flipped " + cardsInPlay);
