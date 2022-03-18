function getRandomIndex(max){
    return Math.floor(Math.random() * max);
}

//add to start of toArray
function addArray(fromArray,toArray){
    var fromArrayIndex = 0;
    while (fromArrayIndex < fromArray.length) {
        toArray.unshift(fromArray[fromArrayIndex]);
        fromArrayIndex += 1;
    }
    return toArray;
    
}

class Deck{
    constructor(){
        this.cardDeck = [];
        this.suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    }
    makeDeck(){
        var suitIndex = 0;
        while (suitIndex<this.suits.length){
            var currentSuit = this.suits[suitIndex];
            var rankCounter = 1;
            while (rankCounter <= 13){
                var cardName = rankCounter;
                if (cardName==1){
                    cardName = 'ACE';
                } else if (cardName == 11) {
                    cardName = 'JACK'; 
                } else if (cardName == 12) {
                    cardName = 'QUEEN';
                } else if (cardName == 13) {
                    cardName = 'King';
                }
                var card = { 
                    name: cardName,
                    suit: currentSuit,
                    rank: rankCounter,
                };››››
                this.cardDeck.unshift(card);
                rankCounter += 1;
            }
            suitIndex += 1;
        }
        
        
    }
    
    shuffleCards(){
        var currentIndex = 0;
        while (currentIndex < this.cardDeck.length) {
            var randomIndex = getRandomIndex(this.cardDeck.length);
            var randomCard = this.cardDeck[randomIndex];
            var currentCard = this.cardDeck[currentIndex];
            this.cardDeck[currentIndex] = randomCard;
            this.cardDeck[randomIndex] = currentCard;
            currentIndex += 1;
        }
        return this.cardDeck;
    }
    
}

class Player{
    constructor(cards){
        this.cards = [];
        this.cards = cards;        
    }
    getCard(){
        //user puts card down from cards
        return this.cards.pop();
    }
    putCard(card){
        this.cards.push(card);
    }
}

var warCards = [];
let cardDeck = new Deck();
cardDeck.makeDeck();

var shufledDeck = cardDeck.shuffleCards();
console.log(shufledDeck);

let player1a = new Player(shufledDeck.slice(0,25));
console.log(player1a);

let player2 = new Player(shufledDeck.slice(26));
console.log(player2);


var myOutputValue = "";
var player1Card;
var player2Card;


for (cardCounter = 0;cardCounter < 24;cardCounter++ ){
    player1Card = player1a.getCard();
    myOutputValue += "player1 has: " + player1a.cards.length + " cards\n";
    
    player2Card = player2.getCard();
    myOutputValue += "player2 has: " + player2.cards.length + " cards\n";
    
    myOutputValue += cardCounter + 1 + "\n";
    myOutputValue += "Player 1: " + player1Card.name + " " + player1Card.suit + "-" + "Player 2: " + player2Card.name + " " + player2Card.suit + "\n";
    if (player1Card.rank > player2Card.rank){
        player1a.putCard(player1Card);
        player1a.putCard(player2Card);
        myOutputValue += " Player 1 wins!! \n";
    } else if (player2Card.rank > player1Card.rank){
        player2.putCard(player1Card);
        player2.putCard(player2Card);
        myOutputValue += " Player 2 wins \n";
    } else{
        myOutputValue = myOutputValue + "It's WAR! \n";

        var warCards = [player1Card,player2Card];
        var cardsEqual = true;
        myOutputValue += "Starting While \n";
        while(cardsEqual){
            var p1CardDown = player1a.getCard();
            var p2CardDown = player2.getCard();

            var p1CardUp = player1a.getCard();
            var p2CardUp = player2.getCard();
            warCards.push(p1CardDown);
            warCards.push(p2CardDown);
            warCards.push(p1CardUp);
            warCards.push(p2CardUp);

            if (p1CardUp.rank > p2CardUp.rank){
                cardsEqual = false;
                player1a.cards = addArray(warCards,player2.cards);
                myOutputValue += "Player 1 p1CardUp \n";

            }else if (p2CardUp.rank > p2CardUp.rank){
                cardsEqual = false;
                player2.cards = addArray(warCards, player1a.cards);
                myOutputValue += "Player 2 p2CardUp \n";
            }else
                myOutputValue +="Missed \n";
            myOutputValue += p1CardUp.name + ":" + p1CardUp.suit + ":" + p2CardUp.name + ":" + p2CardUp.suit + "\n"; 

            if ((player1a.length == 0 && player2.length == 0 ) || (player1a.length == 1 && player2.length == 1)){
                cardsEqual = false;
                myOutputValue += " Game Over Tie \n";
            }else if((player1a.length == 0 || player1a.length == 1) && (player2.length > player1a.length)) {
                cardsEqual = false;
                myOutputValue += " Player 1 Loses \n";
            }else if ((player2.length == 0 || player2.length == 1) && (player1a.length > player2.length)) {
                cardsEqual = false;
                myOutputValue += " Player 2 Loses \n";

            }

        }
    }
   
}

myOutputValue += "Player1 Cards Left: " + Object.keys(player1a.cards).length + "\n";
myOutputValue += "Player2 Cards Left: " + Object.keys(player2.cards).length + "\n";

console.log(myOutputValue);


