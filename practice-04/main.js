const arr = [1, 2, 3];
console.log(arr.slice(1, 3))

const wordList = ["javascript", "programming"];

const visualElements = [
    `<line x1="0" y1="99%" x2="100%" y2="99%" />`,
    `<line x1="20%" y1="99%" x2="20%" y2="5%" />`,
    `<line x1="20%"" y1="5%" x2="60%" y2="5%" />`,
    `<line x1="60%" y1="5%" x2="60%" y2="20%" />`,
    `<circle cx="60%" cy="30%" r="10%" />`,
    `<line x1="60%" y1="30%" x2="60%" y2="70%" />`,
    `<line x1="40%" y1="50%" x2="80%" y2="50%" />`,
    `<line x1="60%" y1="70%" x2="50%" y2="90%" />`,
    `<line x1="60%" y1="70%" x2="70%" y2="90%" />`
];


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
    renderLittleMan();
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

function renderLittleMan() {
    const svg = document.querySelector("#littleMan");
    
    svg.innerHTML = visualElements.slice(0, mistakes()).join("")
}

function mistakes() {
    return guessedLetters.filter(letter => !targetWord.toLowerCase().includes(letter.toLowerCase())).length;
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
    console.log(mistakes());

    if(mistakes() > visualElements.length) {
        gameOver = true;
        document.querySelector("#result").innerText = `You died. The word was: ${targetWord}.`;
        document.querySelector("#controls").style.display = "block";
        return;
    }

    // Word is guessed
    if(targetWord.toUpperCase().split("").every(letter => guessedLetters.includes(letter))) {
        document.querySelector("#result").innerText = `Congratulations, you have guessed the word!`;
        document.querySelector("#controls").style.display = "block";
        gameOver = true;
    }
}