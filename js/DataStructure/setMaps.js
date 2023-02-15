//SET
let noDuplicate = new Set(['Kamso', 'Bolu', 34, 'amco', 'jegzy', 44, 'makanaki', 'queue', 'queue'])
noDuplicate.add('Jogodo')
const checkForAnItem = noDuplicate.has('Jogodo')
const setkeys = noDuplicate.keys()
const checkLength = noDuplicate.size
for(const [key, duplicate] of noDuplicate.entries()){
    console.log(key, duplicate)
}
noDuplicate.forEach((i, dup) => {
    console.log(i, dup)
})
console.log(noDuplicate, checkForAnItem, setkeys, checkLength)

//MAP
let mapObj = new Map()
mapObj.set("name", "Lola")
mapObj.set("school", 'Bookfield private school')
const getVal = mapObj.get('school')
const subList = mapObj.set("subjects", ['maths', 'english', 'physics', 'chemistry', 'commerce'])
const grade = mapObj.set("grade", 'excellent')
console.log(subList)
console.log(mapObj.get("subjects"))
const prefect = mapObj.set('isPrefect', true)
console.log(prefect)
mapObj.get("isPrefect" === true)
    // console.log(mapObj)
    // console.log(getVal)

    const gameEvents = new Map([
        [17, 'Goal'],
        [36, 'substitution'],
        [47, 'Goal'],
        [61, 'substitution'],
        [64, 'Yellow Card'],
        [69, 'red card'],
        [70, 'substitution'],
        [72, 'substitution'],
        [76, 'goal'],
        [80, 'goal'],
        [92, 'yellow card']
    ])
    const turnToArr = gameEvents.values()
    const removeGameEvtDupl = [...new Set(turnToArr)]
    console.log(removeGameEvtDupl)

    gameEvents.delete(64)
    console.log(gameEvents)

    const avrEvt = 90 / gameEvents.size
    const evtString = `An event happened, on average, every ${avrEvt} minutes`
    console.log(evtString)

     for (const [key, val] of gameEvents.entries()){
        if (key <= 45) {
            console.log(`FIRST HALF ${key}: ${val}`)
        }
        else{
            console.log(`SECOND HALF ${key}: ${val}`)
        }
    }
