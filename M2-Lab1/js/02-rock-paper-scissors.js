function playGame(){

    // Step 1: Get user choice
    var userChoice = prompt("Enter rock, paper, or scissors").toLowerCase();

    // Validate user input
    if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
        alert("Invalid choice. Please enter rock, paper, or scissors.");
        return;
    }

    // Step 2: Generate computer choice
    var randomNumber = Math.floor(Math.random() * 3 + 1);
    var computerChoice;

    if (randomNumber === 1) {
        computerChoice = "rock";
    } else if (randomNumber === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    // Step 3: Determine winner
    if (userChoice === computerChoice) {
        window.alert("It's a tie! Both chose " + userChoice + ".");
    } 
    else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        window.alert(
            "You win! You chose " + userChoice + 
            " and the computer chose " + computerChoice + "."
        );
    } 
    else {
        window.alert(
            "Computer wins! You chose " + userChoice + 
            " and the computer chose " + computerChoice + "."
        );
    }
}

function main(){
    // start the game
    playGame();
}

main();