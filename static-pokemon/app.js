// console.log("gotta catch them all");

const pokeDeck = [
    {
        name: "Bulbasaur",
        damage: 60
    }, {
        name: "Caterpie",
        damage: 40
    }, {
        name: "Charmander",
        damage: 60
    }, {
        name: "Clefairy",
        damage: 50
    }, {
        name: "Jigglypuff",
        damage: 60
    }, {
        name: "Mankey",
        damage: 30
    }, {
        name: "Meowth",
        damage: 60
    }, {
        name: "Nidoran - female",
        damage: 60
    }, {
        name: "Nidoran - male",
        damage: 50
    }, {
        name: "Oddish",
        damage: 40
    }, {
        name: "Pidgey",
        damage: 50
    }, {
        name: "Pikachu",
        damage: 50
    }, {
        name: "Poliwag",
        damage: 50
    }, {
        name: "Psyduck",
        damage: 60
    }, {
        name: "Rattata",
        damage: 30
    }, {
        name: "Squirtle",
        damage: 60
    }, {
        name: "Vulpix",
        damage: 50
    }, {
        name: "Weedle",
        damage: 40
    }
];


class Game {
    // === ! Constructor ! === //
    constructor(player, opponent) {
        this.player = player;
        this.opponent = opponent;
        // === ! Attributes ! === //
        this.cardDeck = pokeDeck;
        this.roundsPlayed = 0;
        this.battleArena = [];
        this.cardGraveyard = [];
    }
    // === ! Methods ! === //
    welcomePlayers() {
        console.log(`============ \n Today ${this.player.name} will battle ${this.opponent.name}! \n Good luck trainers! \n============`);
    }
    dealHands() {
        const hand1 = this.cardDeck.splice(0, 3);
        const hand2 = this.cardDeck.splice(0, 3);
        this.player.hand.push(hand1);
        this.opponent.hand.push(hand2);
        game.displayStats();
    }
    displayStats() {
        console.log(`============ \n Round: ${this.roundsPlayed} \n Cards in the deck: ${this.cardDeck.length} \n Discard pile: ${this.cardGraveyard.length} \n============`)
    }
    cardBattle() {
        console.log(`============`);
        game.roundsPlayed++;
        // console.log(`${JSON.stringify(game.player.hand[0])}`, '<<player hand>>');
        // console.log(`${JSON.stringify(game.opponent.hand[0])}`, '<<cpu hand>>');

        game.player.displayHand();
        // let opponentCard = game.player.randomCard();
        // let opponentCard = game.opponent.hand[0].splice(0, 1);

        // console.log(opponentCard, 'opponent card');
        // let playerCard = setTimeout(game.player.pickCard(), 2500);
        // console.log(playerCard, 'player card');
        const sendToArena = async function() {
            game.opponent.playCard();
            game.player.pickCard();
            console.log( await game.battleArena, 'battle arena');
        };
        sendToArena();

        console.log(`============`);
    }
};

class Player {
    // === ! Constructor ! === //
    constructor(name) {
        this.name = name;
        // === ! Attributes ! === //
        this.hand = [];
        this.playerPoints = 0;
        this.roundsWon = 0;
    }
    // === ! Methods ! === //
    sayHello() {
        console.log(`"You will be defeated by ${this.name}!"`);
        this.displayHand()
    }
    displayHand() {
        console.log(`${this.name}'s pokemon for Round ${game.roundsPlayed} are:`);
        for (let i = 0; i < this.hand[0].length; i++) {
            console.log(`--${this.hand[0][i].name} has ${this.hand[0][i].damage} points of damage`);
        };
    }
    randomCard() {
        // let obj = {name: 'april'}
        // return obj;
        let card = game.opponent.hand[0].splice(0, 1);
        game.battleArena.push(card);
        // how do I add another key to this object? or do I just note it's index? bc it's the computer the index will always be 0 right?
        return card;
    }
    pickCard() {
        let names = [];
        for (let i = 0; i < game.player.hand[0].length; i++) {
            names.push(` ${i + 1}: ${game.player.hand[0][i].name}(${game.player.hand[0][i].damage} pts)`);
        };
        // console.log(names, 'these are NAMES');
        let answer = prompt(`${game.player.name}, which pokemon will you choose? \n ${names}`);
        answer = Number(answer);
        let card = game.player.hand[0][answer];
        game.battleArena.push(card);
        return card;

        // setTimeout(function () {
        //     let answer = prompt(`${game.player.name}, which pokemon will you choose? \n ${names}`);
        //     return answer;
        // }, 2000);

    }
    // removeCard() {
    //     let names = [];
    //     for (let i = 0; i < game.player.hand[0].length; i++) {
    //         names.push(` ${i + 1}: ${game.player.hand[0][i].name}(${game.player.hand[0][i].damage} pts)`);
    //     };
    //     let answer;
    //     // console.log(names, 'these are NAMES')

    //     setTimeout(function () {
    //         let answer = prompt(`${game.player.name}, which pokemon will you choose? \n ${names}`);
    //         // console.log(answer, 'answer in pickCard');
    //         answer = Number(answer);
    //         answer--;
    //         // console.log(answer, typeof answer);
    //         answer = game.player.hand[0].splice(answer, 1);
    //         // console.log(answer, typeof answer);
    //         // console.log(`${JSON.stringify(game.player.hand)}`, 'player hand after pick');
    //         // game.opponent.playCard();
    //         // return answer;
    //     }, 500);
    //     // console.log(`${JSON.stringify(game.player.hand[0])}`, 'player hand in remove card')
    //     // game.cardBattle();


    //     // const pickedCard = game.player.hand[0].splice(answer, 1);
    //     // console.log(`You picked: ${pickedCard}`)
    //     // console.log(game.player.hand[0].splice(answer, 1));

    //     // if(answer !== undefined) {
    //     //     console.log(answer, typeof answer, 'outside timeout <<<');
    //     // }
    //     // console.log("You've chosen:", prompt(`Which pokemon do you choose? \n${names}`));
    //     // console.log(answer, typeof answer);
    //     // return answer;
    // }
    // pickCard() {
    //     // pickCard gives the player the opportunity to choose their card
    //     let answer;
    //     if (game.player.hand.length > 0) {
    //         // let names = [];
    //         // for (let i = 0; i < game.player.hand[0].length; i++) {
    //         //     names.push(` ${i + 1}: ${game.player.hand[0][i].name}(${game.player.hand[0][i].damage} pts)`);
    //         // };
    //         // console.log(`Pokemon to choose from: ${names}`);
    //         // let answer;
    //         // // console.log(names, 'these are NAMES')
    //         // setTimeout(function () {
    //         //     let answer = prompt(`${game.player.name}, which pokemon will you choose? \n ${names}`);
    //         //     // console.log(answer, 'answer in pickCard');
    //         //     answer = Number(answer);
    //         //     answer--;
    //         //     // console.log(answer, typeof answer);
    //         //     answer = game.player.hand[0].splice(answer, 1);
    //         //     // console.log(answer, typeof answer);
    //         //     return answer;
    //         // }, 500);
    //         // const pickedCard = game.player.hand[0].splice(answer, 1);
    //         // // console.log(`You picked: ${pickedCard}`)
    //         // console.log(game.player.hand[0].splice(answer, 1));

    //         // // if(answer !== undefined) {
    //         // //     console.log(answer, typeof answer, 'outside timeout <<<');
    //         // // }
    //         // // console.log("You've chosen:", prompt(`Which pokemon do you choose? \n${names}`));
    //         // // console.log(answer);
    //         // return answer;
    //         this.removeCard();
    //     } else {
    //         console.log("my hand's empty");
    //     };
    //     // console.log(answer, 'outside the if check')
    // }
    playCard() {
        if (game.opponent.hand.length > 0) {
            // playCard is the automatic card selection method for the CPU
            // console.log(`${JSON.stringify(this.hand[0])}`, 'this.hand[0]');
            let playedCard = game.opponent.hand[0].splice(0, 1);
            // console.log(`${JSON.stringify(playedCard[0])}`, '<playedCard');
            // console.log(this.hand[0][0]);
            // console.log(game.cardGraveyard, '<graveyard');
            // game.cardGraveyard.push(playedCard[0]);
            // console.log(game.cardGraveyard, '<<graveyard');

            // I don't understand why the objects are being accessed like this, but I care about moving forward, so even if it's ugly I'm moving forward
            let discardCard = playedCard[0];
            // console.log(discardCard, '<discardCard')
            game.cardGraveyard.push(discardCard);
            game.battleArena.push(discardCard);
            // console.log(`${JSON.stringify(game.cardGraveyard)}`, '<<graveyard');
            // console.log(`${JSON.stringify(this.hand[0])}`, 'cpu hand <<');
            console.log(`${game.opponent.name} plays ${JSON.stringify(playedCard[0])}! \n`);
            // setTimeout(game.player.removeCard(), 4000);
            return playedCard;
        };

    }
};

// === ! Instantiate Players ! === //
const player = new Player("April");
const cpu = new Player("the_computer");
// === ! Instantiate Game ! === //
const game = new Game(player, cpu);


// === ! Game Start ! === //
console.log("..... game.welcomePlayers .....")
game.welcomePlayers()
console.log("..... game.displayStats .....")
game.displayStats()
console.log("..... game.dealHands .....")
game.dealHands()
// player.displayHand()
// console.log("..... player.sayHello .....")
// player.sayHello()
// console.log("..... player.pickCard .....")
// player.pickCard()
// console.log("..... cpu.playCard .....")
// cpu.playCard()
console.log("..... game.cardBattle .....")
game.cardBattle();