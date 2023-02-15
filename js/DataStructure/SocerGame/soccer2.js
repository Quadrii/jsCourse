const games={
    team1: "Bayern Munich",
    team2:"Borussia Dortmund",
    players:[
        [
            "Neuer",
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretha',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandoski'
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'sancho',
            'Gotze'
        ]
    ],
    score:"4:0",
    scored:['Lewandoski', 'Gnarby', 'Lewandoski', 'Hummels'],
    date:'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x:3.25,
        team2: 6.5
    },
}

const [players1, players2] = games.players
console.log(players1, players2)

const [gk, ...fieldPlayers] = players1
console.log(gk, fieldPlayers)

const [gks, ...otherPlayers] = players2
console.log(gks, otherPlayers)

const allPlayers = [...players1, ...players2]
console.log(allPlayers)

const players1Final = [...players1, 'Coutinho', 'Thiago', 'Perisic']
console.log(players1Final)

const {team1, x:draw, team2} = games.odds

console.log(team1, draw, team2)

function printGoals(...players) {
    const goals = `${players.length} goals were scored`
    return goals;
}
const goally = printGoals('lewandoski', 'Davies', 'Muller', 'Kimich')
console.log(goally)
const gameScored = printGoals(...games.scored)
console.log(gameScored)

team1 < team2 && console.log(`${games.team1} is likely to win`)
team2 < team1 && console.log(`${games.team2} is likely to win`)

for (const [key, playerName] of games.scored.entries()){
    console.log(`goal ${key + 1} was scored by ${playerName}`)
}

let sumOdds = 0;
for(const val of Object.values(games.odds)) {
    sumOdds += val
    sumOdds /= Object.values(games.odds).length
}
console.log(sumOdds)

for(const [val, el] of Object.entries(games.odds)){
    const teamString = val === 'x' ? 'draw' : `victory ${games[val]}`
    console.log(`Odd of ${teamString}: ${el} odds`)
}

const scorers = {
    Gnarby: 1,
    Hummels: 1,
    Lewandoski: 2
}
for (const [key, goals] of Object.entries(scorers)){
    console.log(`${key}: ${goals}`)
}

// const allReplace = 'hello how are you, how is school, is school fine'
// console.log(allReplace.replaceAll('school', 'college'))