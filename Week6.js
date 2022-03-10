
// // For the final project you will be creating an automated version of the classic card game WAR.

// // Think about how you would build this project and write your plan down. Consider classes such as Card, Deck, and Player and what fields and methods they might each have. You can implement the game however you’d like (i.e. printing to the console, using alert, or some other way). The completed project should, when ran, do the following:

// // Deal 26 Cards to two Players from a Deck.

// // Iterate through the turns where each Player plays a Card

// // The Player who played the higher card is awarded a point

// // Ties result in zero points for either Player

// // After all cards have been played, display the score.

// // Write a Unit Test using Mocha and Chai for at least one of the functions you write.


// Set it automated
//make classes and surround it as best as possible

const Suits = ['Clubs','Diamonds', 'Spades', 'Hearts']
const Values = ["2","3","4","5","6","7","8","9","10",
"Jack","Queen","King","Ace"]
const valueMap = { '2': 2,
                   '3': 3,
                   '4': 4,
                   '5': 5,
                   '6': 6,
                   '7': 7,
                   '8': 8,
                   '9': 9,
                  '10': 10,
                  'Jack': 11,
                  'Queen': 12,
                  'King' : 13,
                  'Ace' : 14
                }

class Player{
    constructor(playerNum,name){
        this.playerNum = playerNum;
        this.name = name;
        this.playerDeck = [];
        this.score = 0;
    }
}

class Deck {
    constructor(cards = newDeck ()){
        this.cards = cards
    } 
    //This takes in the deck when it is called.
    shuffle(array){
        array.sort(() => Math.random () - 0.5);
    }
}
 
class Card {
    constructor(suit,value){
        this.suit = suit
        this.value = value
    }
}

function newDeck(){
    return Suits.flatMap(suit => {
        return Values.map (value =>{
            return new Card(suit,value)
        })
    })
}

