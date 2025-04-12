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
        alert("Please choose the correct choices");
    }
}
//Return Human and Computer Score. Play round function
function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        //alert(`Tied! Human: ${humanChoice} Computer: ${computerChoice}`);
        result.textContent = `Tied! Human: ${humanChoice} Computer: ${computerChoice}`
    }else if (
            humanChoice === "Rock" && computerChoice === "Scissor" ||
            humanChoice === "Paper" && computerChoice === "Rock" ||
            humanChoice === "Scissor" && computerChoice === "Paper"
            ) {
        humanScore++;
        //alert(`You Win! Human: ${humanChoice} beats Computer: ${computerChoice}`);
        result.textContent = `You Win! Human: ${humanChoice} beats Computer: ${computerChoice}`
    }else {
        computerScore++;
        //alert(`You Lose! Computer: ${computerChoice} beats Human: ${humanChoice}`);
        result.textContent = `You Lose! Computer: ${computerChoice} beats Human: ${humanChoice}`
    }
    score.textContent = (`Human: ${humanScore} Computer: ${computerScore}`); 
        if (humanScore === 5) {
        result.textContent = "Human Wins"
        rock.disabled = true;
        paper.disabled = true;
        scissor.disabled = true;
        }else if (computerScore === 5) {    
            result.textContent = "Computer Wins";
            rock.disabled = true;
            paper.disabled = true;
            scissor.disabled = true;
        }
            if (result.textContent === "Human Wins") {
                playAgainButton.style.display = "block";
                rock.style.backgroundColor = "green";
                paper.style.backgroundColor = "green";
                scissor.style.backgroundColor = "green";
                rock.style.cursor = "not-allowed";
                paper.style.cursor = "not-allowed";
                scissor.style.cursor ="not-allowed";
            }else if (result.textContent === "Computer Wins") {
                playAgainButton.style.display = "block";
                rock.style.backgroundColor = "red";
                paper.style.backgroundColor = "red";
                scissor.style.backgroundColor = "red";
                rock.style.cursor = "not-allowed";
                paper.style.cursor = "not-allowed";
                scissor.style.cursor ="not-allowed";
            }
}
const choicesContainer = document.querySelectorAll(".choices-container button");
const body = document.querySelector("body")
let score = document.createElement("p");
const section = document.querySelector(".text");
let result = document.createElement("p");
section.append(result);
section.append(score);
let humanScore = 0;
let computerScore = 0;
const randomNumber = 3;
//let humanSelection = getHumanChoice(prompt("Rock? Paper? Scissor?"));
let computerSelection = getComputerChoice(randomNumber)
const rock = document.querySelector(".rock");
rock.addEventListener("click", function(){
    playRound("Rock",getComputerChoice(randomNumber));
});
const paper = document.querySelector(".paper");
paper.addEventListener("click", function(){
    playRound("Paper",getComputerChoice(randomNumber));
});
const scissor = document.querySelector(".scissor");
scissor.addEventListener("click", function(){
    playRound("Scissor", getComputerChoice(randomNumber));
});
const playAgainButton = document.querySelector(".playAgain");
playAgainButton.addEventListener("click", function(){
    humanScore = 0;
    computerScore = 0;
    playAgainButton.style.display = "none";
    rock.disabled = false;
    paper.disabled = false;
    scissor.disabled = false;
    score.textContent = `Human: ${humanScore} Computer: ${computerScore}`
    result.textContent = ""
    choicesContainer.forEach(button => {
        button.style.cursor = "pointer"
        button.style.backgroundColor = "white"
    });
});








//function entire game
/*function playGame () {
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

playGame();*/




