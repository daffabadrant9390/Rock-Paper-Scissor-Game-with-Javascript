// Grab computer selection
const compChoice = function () {
    const randNum = Math.random();

    if (randNum < 0.34) {
        return 'rock';
    } else if (randNum >= 0.34 && randNum < 0.67) {
        return 'paper';
    } else {
        return 'scissor';
    }
};

// Set the rules 
const getResult = function (player, comp) {
    if (player == comp) {
        return 'DRAW';
    } else if (comp == 'rock') {
        return (player == 'paper') ? 'WIN' : 'LOSE';
    } else if (comp == 'paper') {
        return (player == 'scissor') ? 'WIN' : 'LOSE';
    } else if (comp == 'scissor') {
        return (player == 'rock') ? 'WIN' : 'LOSE';
    }
};

// Set animation flip
const imgFlip = function () {
    const selections = ['rock', 'paper', 'scissor'];
    let i = 0;

    // grab the time right now
    let time = new Date().getTime();

    setInterval(function () {
        // If the animation already run for 1 second, stop the animation
        if (new Date().getTime() - time > 2000) {
            clearInterval();
            return;
        }

        imgComp.setAttribute('src', 'assets/images/' + selections[i++] + '.png');

        if (i == selections.length) {
            i = 0;
        }

    }, 200)
}


// Set the game
// Grab player's choice
const playerChoices = document.querySelectorAll('.player-choice img');
const imgComp = document.querySelector('.area-computer img');
const resultField = document.querySelector('.result-info');
playerChoices.forEach(function (playerChoice) {
    playerChoice.addEventListener('click', function (e) {
        // Clear the resultInfo everytime we want to play
        resultField.innerHTML = '';

        const player = e.target.className;
        const comp = compChoice();
        const result = getResult(player, comp);

        imgFlip();

        setTimeout(function () {
            // change the computer image to it's choice
            imgComp.setAttribute('src', 'assets/images/' + comp + '.png');
            // Set the result to result-info
            resultField.innerHTML = result;
        }, 2000)

    });
});