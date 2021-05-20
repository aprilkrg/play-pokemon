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
        this.cardGraveyard = [];
    }
    // === ! Methods ! === //
    welcomePlayers() {
        console.log(`============ \n Today ${this.player.name} will battle ${this.opponent.name}! \n Good luck trainers! \n============`);
    }
    dealHands() {
        const hand1 = this.cardDeck.splice(0,3);
        const hand2 = this.cardDeck.splice(0,3);
        this.player.hand.push(hand1);
        this.opponent.hand.push(hand2);
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
        console.log(`${this.name}'s pokemon for this round are:`)
        for(let i = 0; i < this.hand[0].length; i++) {
            console.log(`--${this.hand[0][i].name} has ${this.hand[0][i].damage} points of damage`)
        }
    }
    pickCard() {
        let names = [];
        for(let i = 0; i < this.hand[0].length; i++) {
            names.push(` ${this.hand[0][i].name}: ${this.hand[0][i].damage} pts`)
        }
        console.log("You've chosen:", prompt(`Which pokemon do you choose? \n${names}`))
    }
};

// === ! Instantiate Players ! === //
const player = new Player("April");
const cpu = new Player("the_computer");
// === ! Instantiate Game ! === //
const game = new Game(player, cpu);


// === ! Game Start ! === //
game.welcomePlayers()
game.dealHands()
// player.displayHand()
player.sayHello()
player.pickCard()

