//Return random choices
function getComputerChoice(num) {
    let randomChoices = Math.floor(Math.random() * num);
    if (randomChoices === 0) {
        return "Rock";
    }else if (randomChoices === 1){
        return "Paper";
    }else {
        return "Scissor";
    }
}
//Return user choices
function getHumanChoice(_humanChoices) {
    if(_humanChoices === "Rock" || _humanChoices === "Paper" || _humanChoices === "Scissor") {
        return _humanChoices;
    }else {
        alert("Please choose accordingly");
    }
}
//Return Human and Computer Score. Play round function
function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        alert(`Tied! Human: ${humanChoice} Computer: ${computerChoice}`);
    }else if (
            humanChoice === "Rock" && computerChoice === "Scissor" ||
            humanChoice === "Paper" && computerChoice === "Rock" ||
            humanChoice === "Scissor" && computerChoice === "Paper"
            ) {
        humanScore++;
        alert(`You Win! Human: ${humanChoice} beats Computer: ${computerChoice}`);        
    }else {
        computerScore++;
        alert(`You Lose! Computer: ${computerChoice} beats Human: ${humanChoice}`);
    }
    return (`Human: ${humanScore} Computer: ${computerScore}`);  
}
//function entire game
function playGame () {
    //round 1
    let humanSelection = getHumanChoice(prompt("Rock? Paper? Scissor?"));
    console.log(`Human select ${humanSelection}`);
    let computerSelection = getComputerChoice(3);
    console.log(`Computer select ${computerSelection}`);
    console.log(playRound(humanSelection,computerSelection));
    //round 2
    let humanSelection2 = getHumanChoice(prompt("Rock? Paper? Scissor?"));
    console.log(`Human select ${humanSelection2}`);
    let computerSelection2 = getComputerChoice(3);
    console.log(`Computer select ${computerSelection2}`);
    console.log(playRound(humanSelection2,computerSelection2));
    //round 3
    let humanSelection3 = getHumanChoice(prompt("Rock? Paper? Scissor?"));
    console.log(`Human select ${humanSelection3}`);
    let computerSelection3 = getComputerChoice(3);
    console.log(`Computer select ${computerSelection3}`);
    console.log(playRound(humanSelection3,computerSelection3));
    //round 4
    let humanSelection4 = getHumanChoice(prompt("Rock? Paper? Scissor?"));
    console.log(`Human select ${humanSelection4}`);
    let computerSelection4 = getComputerChoice(3);
    console.log(`Computer select ${computerSelection4}`);
    console.log(playRound(humanSelection4,computerSelection4));
    //round 5
    let humanSelection5 = getHumanChoice(prompt("Rock? Paper? Scissor?"));
    console.log(`Human select ${humanSelection5}`);
    let computerSelection5 = getComputerChoice(3);
    console.log(`Computer select ${computerSelection5}`);
    console.log(playRound(humanSelection5,computerSelection5));
    if (humanScore > computerScore) {
        alert(`Human wins with score of ${humanScore}`);
    }else if (humanScore < computerScore){
        alert(`Computer wins with score of ${computerScore}`);
    }else {
        alert(`Tied! Human: ${humanScore} Computer: ${computerScore} `);
    }
}
let humanScore = 0;
let computerScore = 0;
playGame();




