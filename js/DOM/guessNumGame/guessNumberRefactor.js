let message = document.querySelector('.message')
let reset = document.querySelector('.reset')
let container = document.querySelector('.body')
let number = document.querySelector('#number')
let trackWinner = document.querySelector('.highscore')
let scoreTrack = document.querySelector('.score')
let action = document.querySelector('.btnCheck')
let secretNum = Math.floor(Math.random() * 20) + 1;

let score = 20;
scoreTrack.textContent = score;
let highScore = 0;

function init(){
    let inputs = Number(document.querySelector('#input').value)
    if (!inputs) {
        message.textContent="No Number"
    }
    else if (inputs > secretNum) {
        if (score > 1) {
            message.textContent = 'Too High'
            score--
            scoreTrack.textContent = score;
        } else {
            message.textContent = 'You Lost the game'
            scoreTrack.textContent = 0;
        }
    }
    else if (inputs < secretNum) {
        if (score > 0) {
            message.textContent = 'Too Low'
            score--
            scoreTrack.textContent = score;
        } else {
            message.textContent = 'You Lost the game'
            scoreTrack.textContent = 0;
        }
    }
    else {
        message.textContent = "Correct Number"
        container.style.background ="green"
        number.textContent = secretNum
        if (score > highScore) {
            highScore = score
        }
        trackWinner.textContent = highScore
    }
}

function clickBtnFunc (){
    init()
}

function replay(){
    inputs.value = ''
    if (!inputs) {
        message.textContent="No Number"
    }
    else if (inputs > secretNum) {
        if (score > 1) {
            message.textContent = 'Too High'
            score--
            scoreTrack.textContent = score;
        } else {
            message.textContent = 'You Lost the game'
            scoreTrack.textContent = 0;
        }
    }
    else if (inputs < secretNum) {
        if (score > 0) {
            message.textContent = 'Too Low'
            score--
            scoreTrack.textContent = score;
        } else {
            message.textContent = 'You Lost the game'
            scoreTrack.textContent = 0;
        }
    }
    else {
        message.textContent = "Correct Number"
        container.style.background ="green"
        number.textContent = secretNum 
        if (score > highScore) {
            highScore = score
        }
        trackWinner.textContent = score
    }
}

function resetGame(){
    secretNum = Math.floor(Math.random() * 20) + 1;
    number.textContent = " "
    message.textContent = 'start guessing'
    container.style.background ="cadetblue"
    score = 20
    scoreTrack.textContent = score
    replay();
}

action.addEventListener('click', clickBtnFunc)
reset.addEventListener('click', resetGame)

