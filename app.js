
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");
let userScore = 0;
let compScore = 0;

const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    let idx = Math.floor(Math.random() * 3);
    return options[idx];
}

let msg = document.querySelector("#msg");

const gameDraw = () => {
    console.log("gameDraw");
    msg.innerHTML = "Game Is Draw, Play Again";
    msg.style.backgroundColor = "black"
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        console.log("You Win!")
        msg.innerHTML = `you win your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerHTML = userScore;
    }
    else {
        console.log("You Lose")
        msg.innerHTML = `You Lose, ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerHTML = compScore;
    }
}

const playGame = (userChoice) => {
    console.log("userchoice =", userChoice);
    let compChoice = genCompChoice();
    console.log("compChoice =", compChoice);

    if (userChoice === compChoice) {
        gameDraw();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

};

let choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});