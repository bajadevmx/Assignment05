function main() {
    displayTitle();
    let playAgain = 'y';
    while (playAgain === 'y') {
        playGame();
        playAgain = prompt('Do you want to play again? (y or n)');
    }
    alert('Thanks for playing the game!');
}
main();


function displayTitle() {
    alert('Welcome to the Rock, Paper, Scissors Game!.');
}

function playGame() {
    let number = Math.round(Math.random() * 10 + 1);
    let usrChoice= prompt("Select Rock (R), Scissors (S) or Paper (P):")
    let compResult

    if (number <= 1000){
        compResult= "R"
    } else if (number > 1000 && number < 2000) {
        compResult="S"
    } else {
        compResult= "P"
    }
    
    if (usrChoice === "R" && compResult=== "R") {
        alert("The computer was Rock and you select Rock... it's a tie!")
    } else if (usrChoice === "R" && compResult=== "S") {
        alert("The computer was Rock but you chose Scissors... You lose!")
    } else if (usrChoice === "R" && compResult=== "P") {
        alert("The computer was Rock and you chose Paper... You win!")
    } else if (usrChoice === "S" && compResult=== "R") {
        alert("The computer was Scissors and you chose Rock... You win!")
    } else if (usrChoice === "S" && compResult=== "S") {
        alert("The computer was Scissors and you chose Scissors... it's a tie!")
    } else if (usrChoice === "S" && compResult=== "P") {
        alert("The computer was Scissors but you chose Paper... You lose!")
    } else if (usrChoice === "P" && compResult=== "R") {
        alert("The computer was Paper but you chose Rock... You lose!")
    } else if (usrChoice === "P" && compResult=== "S") {
        alert("The computer was Paper and you chose Scissors... You win!")
    } else if (usrChoice === "P" && compResult=== "P") {
        alert("The computer was Paper and you chose Paper... it's a tie!")
    } else  {
        alert("You input an invalid option, only Rock (R), Scissors (S) or Paper (P) are valid options, please try again.")
    }
}