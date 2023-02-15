let dolphins = 44 + 23 + 71
let koalas = 65 + 54 + 49
const calcAvgScore = scores => {
    let avg = scores / 3;
    return avg
}

let dolphinsAvg = calcAvgScore(dolphins)
let koalasAvg = calcAvgScore(koalas)
console.log(dolphinsAvg, koalasAvg)

let checkWinner = (score1, score2) => {
    if (score1 > score2 && score1 >= score2 * 2) {
        return `Team A wins ${score1} vs ${score2}`
    } else if(score2 > score1 && score2 >= score1 * 2) {
        return `Team B wins ${score2} vs ${score1}`
    }else {
        return "No team wins"
    }
}

let winner = checkWinner(dolphinsAvg, koalasAvg)
let winner2 = checkWinner(250, 100)

console.log(winner, winner2)