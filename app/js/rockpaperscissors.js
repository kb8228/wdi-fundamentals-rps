window.onload = function() {

    function getInput() {
        console.log("Please choose either 'rock', 'paper', or 'scissors'.")
        //return prompt("Please choose either 'rock', 'paper', or 'scissors'.");
    }
    function randomPlay() {
        var randomNumber = Math.random();
        if (randomNumber < 0.33) {
            return "rock";
        } else if (randomNumber < 0.66) {
            return "paper";
        } else {
            return "scissors";
        }
    }

    function getPlayerMove(move) {
        // If a move is given, your expression should evaluate to that move.
        // If move is not specified / is null, your expression should run getInput()
        return move || getInput();
    }
    function getComputerMove(move) {
        // If a move is given, your expression should evaluate to that move.
        // If move is not specified / is null, your expression should run randomPlay()
        return move || randomPlay();
    }

    var playerWins = 0;
    var computerWins = 0;
    var scoreField = document.getElementById("score");
    var userScore = document.getElementById("user-score");
    var compScore = document.getElementById("comp-score");

    var choices = document.getElementById("choices");
    var message = document.getElementById("message");

    /* save user choice variables: */
    var scissors = document.getElementById("sciss-img");
    var paper = document.getElementById("paper-img");
    var rock = document.getElementById("rock-img");

    var chooseS = function() {
        getWinner("scissors");
    }
    var chooseP = function() {
        getWinner("scissors");
    }
    var chooseR = function() {
        getWinner("scissors");
    }

    /* Define user choice: */
    scissors.addEventListener("click", chooseS);
    paper.addEventListener("click", chooseP);
    rock.addEventListener("click", chooseR);

    function getWinner(playerMove) {
        // This function should either give us back 'player', 'computer', or 'tie'.
        // The rules of the game are that rock beats scissors, scissors beats paper, and paper beats rock.
        // Assume that the only possible input values we can get are 'rock', 'paper', and 'scissors'.
        //playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        
        choices.innerHTML = "Player move is: " + playerMove.toUpperCase() + " & Computer move is: " + computerMove.toUpperCase() + ".";

        if (playerMove === computerMove){
            message.innerHTML = "This round is a tie!";
        }
        else if (playerMove === "rock"){
            if(computerMove === "scissors"){
                playerWins += 1;
                message.innerHTML = "Player wins round!";
            }
            else{
                computerWins += 1;
                message.innerHTML = "Computer wins round!";
            }
        }
         else if (playerMove === "paper"){
            if(computerMove === "rock"){
                playerWins += 1;
                message.innerHTML = "Player wins round!";
                
            }
            else{
                computerWins += 1;
                message.innerHTML = "Computer wins round!";
            }
        }
         else if (playerMove === "scissors"){
           if(computerMove === "paper"){
                playerWins += 1;
                message.innerHTML = "Player wins round!";
                
            }
            else{
                computerWins += 1;
                message.innerHTML = "Computer wins round!";
            }
        }
        playToFive();
        userScore.innerHTML = playerWins;
        compScore.innerHTML = computerWins;
    }

    function playToFive() {
        //console.log("Let's play Rock Paper Scissors");
        // This function should continue to play Rock Paper Scissors until either the player or the computer has won five times.
        var onWin = function(){
            message.style.fontWeight = "bold";
            /* Replace score with newGame, make clickable */
            scoreField.innerHTML = "<span id='new-game'>NEW GAME</span>"; 
            var newGame = document.getElementById("new-game");
            newGame.addEventListener("click", function(){
                location.reload(true);
            });
            /*remove choice highlight or add red highlight: */
            //???
            /* remove choice clickability: */
            scissors.removeEventListener("click", chooseS);
            paper.removeEventListener("click", chooseP);
            rock.removeEventListener("click", chooseR);
        }

        if(playerWins === 5){
            message.innerHTML = "Player wins match at " + playerWins + " to " + computerWins + "!";
            onWin();
        }  
        else if(computerWins === 5){
            message.innerHTML = "Computer wins match at " + playerWins + " to " + computerWins + "!";
            onWin();
        }
    }
};

