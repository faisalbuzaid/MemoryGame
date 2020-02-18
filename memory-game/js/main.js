////////////////////////////////Faisal
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
//const cardsInPlay = [];

//let cardsLength = cards.length;

///////////////////////////Faisal
let cardsInPlay = [];

 function checkForMatch() {
    if (cardsInPlay[0] != cardsInPlay[1]) {
          alert("Sorry, try again!!");
      } else {
          alert("You found a match!!!!");
        }
  }

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
//Faisal
/*function flipCard(cardId){
	let cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length == 2) {
		checkForMatch();
	}
}

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



function checkForMatch() {
	// body...
	if (cardsInPlay[0] != cardsInPlay[1]){
			alert("Sorry, try again!");
	}
	else{
		alert("You found a match!!");
	}
}*/
////Faisal
///////////////////////////////////////////////////////////////////
//flipCard();

///Faisal

function flipCard() {
    let cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId].rank);
 this.setAttribute('src', cards[cardId].cardImage);
 if (cardsInPlay.length == 2){
    checkForMatch();
 }
}
/*console.log(cardsInPlay);

function createBoard(){
	const cardBlock = document.getElementById('game-board');
	for (let i = 0; i < cards.length; i++){
		let cardElement = document.cardElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		cardBlock.appendChild(cardElement);
	}

}

*/
console.log(cardsInPlay);

function createBoard() {
  const cardBlock = document.getElementById('game-board');
  for (let i = 0; i < cards.length; i++) {
  	let cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    cardBlock.appendChild(cardElement);

  }
}

createBoard();


/*function shuffleImages() {
    for (var i = 0; i < arr.length * 2; i++) {
        var rand = Math.floor(Math.random() * arr.length);
        $('#mypictures' + i).attr('src', arr[rand]);
        console.log(rand);
    }
    console.log("DONE");
}*/


/*


//console.log("User flipped " + cardsInPlay);
createBoard();*/


////Faisal

/*var cards = [
   {
       rank: "queen",
       suit: "hearts",
       cardImage: "images/queen-of-hearts.png",
   },
   {
      rank: "queen",
      suit: "diamonds",
      cardImage: "images/queen-of-diamonds.png",
   },

   {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png",
   },
    {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png",
   },
];*/















