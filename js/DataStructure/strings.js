const tobeCheckedIn = function(...baggage){
    if (baggage.includes('gun') || baggage.includes('knife')) {
        console.log("can't be checked in")
    }else{
        console.log("Allow")
    }
}

tobeCheckedIn('monkey', 'cloth', 'dog', 'gun')

const creditCard = (number)=>{
    let convertNumToStr = String(number)
    let lastFourDigit = convertNumToStr.slice(-4)
    return lastFourDigit.padStart(convertNumToStr.length, '*')
}

const masked = creditCard(626255336728282)
console.log(masked)


const capitalizeWord = 'capitalize'
const turnToLower = capitalizeWord.toLowerCase()
const logicToCap = turnToLower[0].toUpperCase() + turnToLower.slice(1)
console.log(logicToCap)

const capName = (name)=>{
    let caps = name.split(' ')
    let nameUpper = []
    for (const namee of caps) {
        //method 1
    //   let capped =  namee[0].toUpperCase() + namee.slice(1)
    //  Method 2
      let anotherWay = namee.replace(namee[0], namee[0].toUpperCase())
      nameUpper.push(anotherWay)
    }
    return nameUpper
}

console.log(capName('jessica ann smith davis')); 

const dogs = [
    {
        weight: 22,
        curfood:250,
        owners:['Alice', 'Bob']
    },
    {
        weight:8,
        curfood:200,
        owners:['Matilda']
    },
    {
        weight:13,
        curfood:275,
        owners:['Sarah', 'John']
    },
    {
        weight:32,
        curfood:340,
        owners:['Micheal']
    }
]
const dogsList = dogs.forEach(dog => (dog.foodPortion = Math.floor(dog.weight ** 0.75 * 28)))
console.log(dogs)

const findSarahDogs = dogs.find(dog => dog.owners?.includes('Sarah'))
console.log(findSarahDogs)

const findTenPercent = findSarahDogs.foodPortion * 0.1

const eatTooMuchOrNot = findSarahDogs.curfood > findSarahDogs.foodPortion ? "SarahDog Eats too much" : "too little"

const dogsThatEatMuch = dogs.filter(dog => {
    return dog.curfood > dog.foodPortion
})

const eatsTooLittle = dogs.filter(dog=>{
    return dog.curfood < dog.foodPortion
})

console.log(dogsThatEatMuch)
console.log(eatsTooLittle)

const ownersEatMuch = dogsThatEatMuch.map(dogMuch => dogMuch.owners).flat()
const ownersEatLittle = eatsTooLittle.map(dogLittle => dogLittle.owners).flat()
const stringify = `${ownersEatMuch}'s dogs eat too much and ${ownersEatLittle}'s dogs eat too little`
console.log(stringify)
console.log(ownersEatMuch)
console.log(ownersEatLittle)

const eatSameFoodAsPort = dogs.find(dog => dog.curfood === dog.foodPortion)
console.log(eatSameFoodAsPort ? true : false)   

const eatSameFoodAsPort2 = dogs.some(dog => dog.curfood === dog.foodPortion)
console.log(eatSameFoodAsPort2)

const checkForOkayFood = dogs.some(dog => dog.curfood > (dog.foodPortion * 0.90) && dog.curfood < (dog.foodPortion * 1.10))
console.log(checkForOkayFood)

const eatOkayFood = dogs.filter(dog => dog.curfood > (dog.foodPortion * 0.90) && dog.curfood < (dog.foodPortion * 1.10))
console.log(eatOkayFood)

