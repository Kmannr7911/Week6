//cards
    // properties
    //     name
    //     value
    //     suit
    // methods

const { getOwnEnumerableProperties } = require("chai/lib/chai/utils");
const arr = require("jshint/data/non-ascii-identifier-start");

    class Card {
        constructor(name,value,suit){
            this.name = name;
            this.value = value;
            this.suit = suit;
        }
    }


let suits = ['spade','club','heart','diamond']
let cards = {
    '2': 2,
    '3': 3,
    '4': 4,
    '5' : 5,
    '6': 6,
    '7': 7,
    '8' : 8,
    '9': 9,
    '10':10,
    'J': 11,
    'Q':12,
    'K': 13,
    'A' : 14,
    
}

//A>K
//14>13

//make a deck of all the cards
let fullDeck =  []
suits.forEach(suit => {
    for(let c in cards){
        fullDeck.push(new Card(c,cards[c],suit))

    }    
})


//make two players
let p1 = new Player('Glennys')
let p2 = new Player('Chris')
console.log()


//Player
class Player{
    hand = []
    name = []
    score = 0

    constructor(name){
        this.name = name;
    }
}
playTopCard(){

}
updateScore(){

}
displayScore(){

}




//deal 26 cards to two players
let [left,right] = split(fullDeck)
p1.hand = left;
p2.hand = right;
console.log();

//iterate (loop) representing turns
while(p1.hand.length > 0){
    //player play their cards
    let p1Card = p1.hand.shift();
    let p2Card = p2.hand.shift();
    console.log();
    if(p1Card.value > p2Card.value){
        p1.score++1
    } else if(p1Card.value<p2Card.value){
        p2.score++
    }
    console.log();
    //if p1 value > p2 value = p1.score++
    //if p1 value < p2 value = p2.score++
    // else if p1 value < p2 value = p2.score++
    // else - nobody gets points
}
console.log();
if(p1.score>p2.score){
    console.log('${p1.name}Wins! Score: ${p1.score}-$p2{p2.score}')
} else{
    console.log('${p2.name} Wins! score: ${p2.score-$p2.score})
}
//print score