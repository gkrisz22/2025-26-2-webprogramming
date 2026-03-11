const wordList = ["javascript", "programming"];

let targetWord;
let guessedLetters;
let gameOver = false;
// Phase 1
// Initializing the game state
function startGame() {
    targetWord = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(Math.floor(Math.random() * wordList.length))
    // 0.7 => 0
    // 1.1 => 1, 1.9 => 1

    console.log(targetWord);

    guessedLetters = [];
    gameOver = false;
    document.querySelector("#controls").style.display = "none";
    document.querySelector("#game").style.display = "block";

    renderState();
}

document.querySelector("#start").addEventListener("click", startGame);

// Phase 2: lifecycle rendering functions
function renderState() {
    renderButtons();
    renderWord();
    console.log("Guessed letters", guessedLetters);
    checkEndGame();
}

function renderButtons() {
    // Rendering the Alphabet
    const ABC = "ABCDEFGHIJKLMNOPQRSTVUWXYZ"; // ["A", "B", "C", ..., "Z"].join("") => 
    document.querySelector("#buttons").innerHTML = ABC.split("").map((letter) => {
        return `<button id=${letter}
            ${guessedLetters.includes(letter.toUpperCase()) ? "disabled" : ""}
        >${letter}</button>`
    }).join('');
}

function renderWord() {
    const lines = document.querySelector("tr");

    lines.innerHTML = targetWord.split('').map((char) => {  
        return `<td>${guessedLetters.includes(char.toUpperCase()) ? char : '_'}</td>`;
    }).join('');

}
// console.log("A" > "a") // 65 > 97

// Phase 3: handle alphabet clicks

function handleButtonClick (e) {

    if(!gameOver && e.target.matches("button")) {
        guessedLetters.push(e.target.innerText.toUpperCase());
        renderState();
    }
}

document.querySelector("#buttons").addEventListener("click", handleButtonClick)

// Phase 4: Check for end of game

function checkEndGame() {
    // Word is guessed
    if(targetWord.toUpperCase().split("").every(letter => guessedLetters.includes(letter))) {
        document.querySelector("#result").innerText = `Congratulations, you have guessed the word!`;
        document.querySelector("#controls").style.display = "block";
        gameOver = true;
    }
}