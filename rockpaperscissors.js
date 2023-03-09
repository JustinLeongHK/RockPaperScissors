// getComputerChoice() - computer to randomly return either rock/paper/scissors. 
// playRound() - takes 2 parameter playerSelection and computerSelection and declares the winner. 
// game() - call playRound() and play 5 rounds and reports the winner or loser at the end. 

function getComputerChoice(){
    let choice = ["rock","paper","scissors"]
    let random = Math.floor(Math.random()*3)
    return choice[random];
}

function playRound(playerSelection,computerSelection){
    let x = playerSelection.toLowerCase()
    let y = computerSelection

    if(x == "rock" && y == "scissors"){
        return "player";
    }
    else if(x == "scissors" && y == "paper"){
        return "player";
    }
    else if(x == "paper" && y=="rock"){
        return "player";
    }
    else if(y == x){
        return 0;
    }
    else{
        return "computer";
    }
}

function game(){

    let computer_score = 0;
    let player_score = 0;

    for(let i = 0; i < 5; i++){
        let playerSelection = "";
        do
        {
            playerSelection = prompt("Rock, Paper, Scissors.  What is your choice ?")
 
        }
        while (playerSelection.toLowerCase() != "rock" && playerSelection.toLowerCase() != "paper" && playerSelection.toLowerCase() != "scissors")
        let computerSelection = getComputerChoice()

        let winner = playRound(playerSelection,computerSelection)

        if(winner == "player"){
            player_score++;
            alert(`You chose ${playerSelection}`)
            alert(`Computer chose ${computerSelection}`)
            alert('You won this round !')
        }
        if(winner == "computer"){
            computer_score++;
            alert(`You chose ${playerSelection}`)
            alert(`Computer chose ${computerSelection}`)
            alert('Computer won this round !')
        }
        if(winner == 0)
        {
            alert(`You chose ${playerSelection}`)
            alert(`Computer chose ${computerSelection}`)
            alert(`This round is a tie !`)
        }
    }

    if(player_score > computer_score){
        alert(`Your score : ${player_score},  Computer's score : ${computer_score} \n You Won!`)
    }
    if(player_score < computer_score){
        alert(`Your score : ${player_score},  Computer's score : ${computer_score} \n You Lost!`)
    }
    else 
    {
        alert(`Your score : ${player_score},  Computer's score : ${computer_score} \n Its a tie!`)
    }
}

game()
