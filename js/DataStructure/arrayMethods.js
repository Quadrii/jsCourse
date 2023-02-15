const currencies = new Map ([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling']
])

const movemets = [200, 450, -400, 3000, -650, -130, 70, 1300]
let arr = ['a', 'b', 'c', 4, 6, 12]
console.log(arr.slice(-2))

movemets.forEach(movement => {
    if (movement > 0) {
        console.log(movement + " " + 'Is a positive value')
    }else{
        console.log(movement + " " + 'Is a negative value')
    }
})

const getMaxVal = movemets.reduce((acc, curr)=>{
    if (curr > acc) {
        return curr
    }else{
        return acc
    }
},movemets[0])
console.log(getMaxVal)

const dogsJulia = [3, 5, 2, 12, 7]
const katesDog = [4, 1, 15, 8, 3]

const checkAdultDog = (dog1, dog2)=>{
    const dog1ShallowCopy = dog1.splice(0,1)
    const shallowMore = dog1ShallowCopy.splice(-2)
    const dogs = [...shallowMore, ...dog2]
    dogs.forEach((dog, index)=>{
        if (dog >= 3) {
            console.log(`Dog ${index + 1} is an adult and is ${dog} years old `)
        }else{
            console.log(`Dog ${index + 1} is still a puppy`)
        }
    })
}

checkAdultDog(dogsJulia, katesDog)

const dogsAge = [5,2,4,1,15,8,3]
const dogsHumanAge = dogsAge.map((age)=>{
    if (age  <= 2) {
        return age * 2
    }else{
        return 16 + age * 4
    }
})
console.log(dogsHumanAge)

    const dogAbove18 = dogsHumanAge.filter(dogHuman => {
        return dogHuman >= 18
    })
    console.log(dogAbove18)

    const sumAge = dogAbove18.reduce((acc, dogAge) => {
        return acc + dogAge
    }, 0)
    console.log(sumAge)

    const dogAvgAge = sumAge / dogAbove18.length
    console.log(dogAvgAge)

const testArrs = [2,3,4,5,5,4,5,66]


console.log(testArrs.splice(2))
console.log(testArrs)

const randIntFunc = (val)=>{
    const generateVal = Math.floor((Math.random() * val) + 1)
    return generateVal;
}
console.log(randIntFunc(6))

const date = new Date()
date.toLocaleString()
console.log(date)
console.log(date.getFullYear())

