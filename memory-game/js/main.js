
const cards = [ 
				{
					rank: "queen",
					suit: "hearts",
					cardImage: "images/queen-of-hearts.png"
				}, 
				{
					rank: "queen",
					suit: "diamonds",
					cardImage: "images/queen-of-diamonds.png"
				}, 
				{
					rank: "king",
					suit: "hearts",
					cardImage: "images/king-of-hearts.png"
				}, 
				{
					rank: "king",
					suit: "diamonds",
					cardImage: "images/king-of-diamonds.png"
				}
				];
const cardsInPlay = [];

let cardsLength = cards.length;

/*	let cardOne = cardTow];
	let cardTwo = cardTow];*/


//	for(let i  0; i < cardsLength; i++){

	//console.log(cards[i]);




//}

/*	for(let j in cards[i]){
		console.log(j, cards[i], cards[i][j]);
	}*/


//console.log(cards[0]);

/*for (let i = 0; i < cards.length; i++){
	//console.log(cards[i].rank);
	let childElement = cards[i].rank;
	console.log(childElement); 

}*/
/////////////////////////////////////////////////////////////////////////////

function flipCard(cardId){

	let cardOne = cards[0];
	let cardTwo = cards[2];

	let cardOneRank = (cards[0].rank);
	let cardOnImage = (cards[0].cardImage);
	let cardOneSuit = (cards[0].suit);

	let cardTowRank = (cards[1].rank);
	let cardTowImage = (cards[1].cardImage);
	let cardTowSuit = (cards[1].suit);

	let cardThreeRank = (cards[2].rank);
	let cardThreeImage = (cards[2].cardImage);
	let cardThreeSuit = (cards[2].suit);

	let cardFourRank = (cards[3].rank);
	let cardFourImage = (cards[3].cardImage);
	let cardFourSuit = (cards[3].suit);


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
			console.log("user flipped " + cardOneRank);
			console.log("user flipped " + cardsInPlay[1]);
			console.log("You Win!!");
			alert("You find a match!");
		} else{
			console.log("user flipped " + cardOneRank);
			console.log(cardOnImage);
			console.log(cardOneSuit);

			console.log("user flipped " + cardThreeRank);
			console.log(cardThreeImage);
			console.log(cardThreeSuit);
	
			//console.log("user flipped " + cardsInPlay[1]);
			console.log("Sorry, try again.");
			alert("Sorry, try again.");
		}
	}

}
///////////////////////////////////////////////////////////////////
flipCard();

//console.log("User flipped " + cardsInPlay);
