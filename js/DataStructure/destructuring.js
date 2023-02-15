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
console.log(restaurant.orderFood(3, 2))
//using destructuring
const [starter, theMenu] = restaurant.orderFood(3, 2)
console.log(starter, theMenu)

//Nested Destructuring
const nested = [2,5, [6, 8]]
const [a, , h, u] = nested
console.log(a, h, u)
const [n, ,[i, j]] = nested
console.log(n, i, j)

//Destructuring Objects
const restaurant2 = {
    restaurantName:'Cataliano Polito',
    location: '23 oduduwa crescent, vi, lagos',
    categoris: ['parito', 'italian', 'pizzary'],
    starterMenu: ['focassino', 'brushetta', 'garlic', 'bread'],
    mainMenu: ['pizza', 'pasta', 'risotto'],
    orderFood: function (startMenuIndex, mainMenuIndex){
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

const {openingHours, restaurantName, categoris} = restaurant2
console.log(openingHours, restaurantName, categoris)
//Nested Objects
const {fri} = openingHours
console.log(fri)
const {fri: {open, close}} = openingHours
console.log(open, close)

