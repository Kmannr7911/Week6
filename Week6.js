// For the final project you will be creating an automated version of the classic card game WAR.
// Think about how you would build this project and write your plan down. Consider classes such as Card, Deck, and Player and what fields and methods they might each have. You can implement the game however you’d like (i.e. printing to the console, using alert, or some other way). The completed project should, when ran, do the following:
// Deal 26 Cards to two Players from a Deck. 
// Iterate through the turns where each Player plays a Card
// The Player who played the higher card is awarded a point
// Ties result in zero points for either Player
// After all cards have been played, display the score.
// Write a Unit Test using Mocha and Chai for at least one of the functions you write.


var addArray = function (fromArray,toArray){
    var fromArrayIndex = 0;
    while(fromArrayIndex < fromArray.length){
        toArray.unshift(fromArray[fromArrayIndex]);
        fromArrayIndex += 1;
    }
    return toArray;
}

var setDeck = function (){
    var cardDeck = [];
    var values = ['hearts','diamonds','clubs','spades'];
    var valueIndex = 0;
    while (valueIndex < values.length)
        var currentValue = value[valueIndex];

        var rankCounter = 1;
        while (rankCounter <= 13){
            var cardName = rankCounter;

        if (cardName == 1) {
            cardName = 'ace';
        } else if (cardName = 11){
            cardName = 'jack';
        }else if (cardName == 12){
            cardName = 'queen';
        } else if (cardName == 13){
            cardName = 'king';
        }
    var  card  = {
        name: cardName,
        suit: currentValue,
        rank: rankCounter,
    };

    cardDeck.push('new card');{
    rankCounter += 1;
    
}{
    suitIndex += 1;
}