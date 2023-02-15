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
        team1: 1.35,
        x:3.25,
        team2: 6.5
    },
}

const [players1, players2] = games.players
console.log(players1, players2)

const [gk, ...fielPlayers] = players1
console.log(gk, fielPlayers)

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

