const arr = [2,3,4,5]
const newArr = [...arr, 7,9,12]
console.log(newArr)
const restaurant = {
    restaurantName:'Cataliano Polito',
    location: '23 oduduwa crescent, vi, lagos',
    categoris: ['parito', 'italian', 'pizzary'],
    starterMenu: ['focassino', 'brushetta', 'garlic', 'bread'],
    mainMenu: ['pizza', 'pasta', 'risotto'],
    orderFood: function (startMenuIndex, mainMenuIndex){
        return [this.starterMenu[startMenuIndex], this.mainMenu[mainMenuIndex]]
    },
    orderPasta: function (ingredient1, ingredient2, ingredient3){
        let pasta = `Your delicious pasta with ${ingredient1}, ${ingredient2}, ${ingredient3}
        is here. ENJOY!`
        return pasta;
    }
}
const allMenu = [...restaurant.starterMenu, ...restaurant.mainMenu]
console.log(allMenu)
const pastaIngredient = ['focassino', 'garlic', 'pasta']
const orderPast= restaurant.orderPasta(...pastaIngredient)
console.log(orderPast)
