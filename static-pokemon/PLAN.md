# Next steps:

Right now the user can enter a name into the prompt, and that name will log in the console. 
Next I want to find a way to grab the actual data, the actual object, and slice that out of the hand.
Then compare cards, and send both to the graveyard.


# Okay ...
okay need to refactor things a bit. make the game battle card method call the player class card picking methods. and in the cardBattle method save the result of those player methods to a variable, then console.log the variable for player and opponent, and compare their values