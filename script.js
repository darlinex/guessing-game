let inp = document.getElementById('inp');
let btn = document.getElementById('btn');
let result = document.getElementById('result');
let num = Math.floor(Math.random() * 100);
let prevGuesses = document.getElementById('prevGuesses');
let startAgain = document.getElementById('startAgain');
let prevGuessesArray = [];

btn.addEventListener('click', guesser);

function guesser() {
    let guess = Number(inp.value); 
    if (guess > num) {
        result.innerHTML = 'Wrong!! Too HIGH';
    } else if (guess < num) {
        result.innerHTML = 'Wrong!! Too LOW';
    } else {
        result.innerHTML = 'CONGRATULATIONS! You won!';
        inp.disabled = true;
        btn.disabled = true;
        startAgain.hidden = false;
    }

    if (!isNaN(guess)) { 
        prevGuessesArray.push(guess);
        inp.value = '';
        prevGuesses.textContent = prevGuessesArray.join(', ');
    } else {
        result.innerHTML = 'Please enter a valid number!';
    }
}

startAgain.addEventListener('click', startOver);

function startOver() {
    prevGuessesArray = [];
    result.innerHTML = '';
    prevGuesses.innerHTML = '';
    inp.disabled = false;
    btn.disabled = false;
    startAgain.hidden = true;
    num = Math.floor(Math.random() * 100);
}







