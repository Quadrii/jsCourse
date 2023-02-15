const Car = function(marker, speed){
    this.maker = marker,
    this.speed = speed
}

Car.prototype.accelerate = function(){
    const newSpeed = this.speed + 10
    console.log(this.maker + " " + "going at " + newSpeed  + 'km/hr')
}

Car.prototype.brake = function(){
    const breakCntrl = this.speed - 5
    console.log(this.maker + " " + "going at " + breakCntrl  + 'km/hr')
}

const tolu = new Car('Honda', 110)

tolu.accelerate()
tolu.brake()

console.log(tolu.hasOwnProperty('maker'))
console.log(tolu.__proto__ === Car.prototype)

const newarr = [2, 4, 7, 10, 2]
console.log(newarr.slice(-1))

//Using es6 classes

class Carcl {
    constructor(model, speed) {
        this.model = model
        this.speed = speed
    }

    accelerate(){
        const increaseSpeed = this.speed + 10
    }

    brake(){
        const reduceCarSpeed = this.speed - 5
    }
}
//Inheritance with function Constructor
const CarChild = function(carName, maker, speed, battery ){
    Car.call(this, speed, maker)
    this.battery = battery
}
CarChild.prototype = Object.create(Car.prototype)

CarChild.prototype.chargeBatterry = function (chargeTo){
    return this.battery = chargeTo
}

CarChild.prototype.accelerates = function(){
    const newSpeed = this.speed + 20
    const newcharge = this.battery - 1 
   return[newSpeed, newcharge]
}

const bemywifecar = new CarChild('BMW', 'jincheng', '220', '85')
console.log(bemywifecar)

const charging = bemywifecar.chargeBatterry(90)

console.log(charging)
console.log(bemywifecar)

