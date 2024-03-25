var wins = 0, losses = 0, ties = 0;
        
function play(userChoice) {
        var choices = ['rock', 'paper', 'scissors'];
        var computerChoice = choices[Math.floor(Math.random() * choices.length)];

        if (userChoice === computerChoice) {
            ties++;
            document.getElementById('ties').innerText = ties;
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            wins++;
            document.getElementById('wins').innerText = wins;
        } else {
            losses++;
            document.getElementById('losses').innerText = losses;
        }
}