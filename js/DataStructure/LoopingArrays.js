const restaurant = {
    restaurantName:'Cataliano Polito',
    location: '23 oduduwa crescent, vi, lagos',
    categoris: ['parito', 'italian', 'pizzary'],
    starterMenu: ['focassino', 'brushetta', 'garlic', 'bread'],
    mainMenu: ['pizza', 'pasta', 'risotto'],
    orderFood: function (startMenuIndex, mainMenuIndex){
        return [this.starterMenu[startMenuIndex], this.mainMenu[mainMenuIndex]]
    }
}

//for of Loops
const menu = [...restaurant.categoris, ...restaurant.mainMenu]
for(const item of menu){
    console.log(item)
}

//extract the index using for of Loop
const menu2 = [...restaurant.categoris, ...restaurant.mainMenu]
for(const [i, el] of menu.entries()){
    console.log(i, el)
}

//Enhanced Object Literals
const restaurant2 = {
    restaurantName:'Cataliano Polito',
    location: '23 oduduwa crescent, vi, lagos',
    categoris: ['parito', 'italian', 'pizzary'],
    starterMenu: ['focassino', 'brushetta', 'garlic', 'bread'],
    mainMenu: ['pizza', 'pasta', 'risotto'],
    //enhanced Method
    orderFood(startMenuIndex, mainMenuIndex){
        return [this.starterMenu[startMenuIndex], this.mainMenu[mainMenuIndex]]
    },
    openingHours:{
        thurs:{
            open: '1pm',
            close:'12am'
        },
        fri:{
            open:"12pm",
            close:"12am"
        },
        sat:{
            open:"10pm",
            close:"5am"
        }
    }
}
const order = restaurant2.orderFood(2,1)
console.log(order)

//Check Open Time Using shortCircuit
const checkSunOpenTime = restaurant2.openingHours.sun && restaurant2.openingHours.sun.open
console.log(checkSunOpenTime)

const checkFriOpenTime =restaurant2.openingHours.fri && restaurant2.openingHours.fri.open
console.log(checkFriOpenTime)

//Check Open Time using optional chaining
const checkFridayOpenTime = restaurant2.openingHours.fri?.open
console.log(checkFridayOpenTime)

const days = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun']
for(const day of days){
    console.log(day)
    const check = restaurant2.openingHours[day]?.open
    console.log(check)
}

