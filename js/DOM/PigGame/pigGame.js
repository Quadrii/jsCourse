let firstPlayer = document.querySelector('.player--0')
let secondPlayer = document.querySelector('.player--1')
let scoreOne = document.querySelector('#score--0')
let scoreTwo = document.querySelector('#score--1')
let rolledice = document.querySelector('.diced')
let startRolling = document.querySelector('.btnrollDice')
let hold = document.querySelector('.btnhold')
let playerOneCurrentSCore = document.querySelector('#current--0')
let playerTwoCurrentSCore = document.querySelector('#current--1')
let playAgain = document.querySelector('.new-game')

    let currentScore
    let currentPlayer
    let totalScores
    let isPlaying;
const init = ()=>{
    currentScore = 0
     currentPlayer = 0
     totalScores = [0, 0]
    isPlaying = true;
    scoreOne.textContent = 0;
    scoreTwo.textContent = 0;
    playerOneCurrentSCore.textContent =0
    playerTwoCurrentSCore.textContent = 0
    firstPlayer.classList.remove('winner')
    secondPlayer.classList.remove('winner')
    firstPlayer.classList.add('player--active')
    secondPlayer.classList.remove('player--active')
}
init()
function switchPlayer(){
    document.getElementById(`current--${currentPlayer}`).textContent = 0
        currentPlayer = currentPlayer === 0 ? 1 : 0
        currentScore = 0
        firstPlayer.classList.toggle('player--active')
        secondPlayer.classList.toggle('player--active')
}

function resetGame(){
    init()
}

function rolling(){
    if (isPlaying) {
        let dice = Math.floor(Math.random() * 6) + 1
        rolledice.classList.remove('hidden')
        rolledice.textContent = dice
        if (dice !== 1) {
            currentScore += dice
            document.getElementById(`current--${currentPlayer}`).textContent = currentScore
        }
        else{
            switchPlayer()
        }
    } 
}

function holdScore (){
    if (isPlaying) {
        totalScores[currentPlayer] = currentScore
        document.getElementById(`score--${currentPlayer}`).textContent = totalScores[currentPlayer]
        if (totalScores[currentPlayer] >= 100) {
            isPlaying = false
            document.querySelector(`.player--${currentPlayer}`).classList.add('winner')
            document.querySelector(`.player--${currentPlayer}`).classList.remove('player--active')
            rolledice.classList.add('hidden')
        }
        else{
            switchPlayer()
        }   
    }
}

startRolling.addEventListener('click', rolling)
hold.addEventListener('click', holdScore)
playAgain.addEventListener('click', resetGame)