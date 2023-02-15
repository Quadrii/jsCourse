let johns ={
    fullName: 'John Doe',
    weight: 92,
    height: 1.95,
    calcJohnBmi: function (){
        this.bmi = this.weight / (this.height ** 2);
        return this.bmi
    }
}

let marks = {
    fullName: "Mark Wagne",
    weight:78,
    height:1.69,
    calcMarksBmi: function (){
        this.bmi = this.weight / (this.height ** 2);
        return this.bmi;
    }
}
marks.calcMarksBmi()
johns.calcJohnBmi()

let marksBmi = marks.bmi;
let johnsBmi = johns.bmi;
console.log(marksBmi)
console.log(johnsBmi)

let higherBmi = `${johns.bmi > marks.bmi ? `${johns.fullName} BMI ${johns.bmi} is higher than Marks ${marks.bmi}` : `${marks.fullName} BMI ${marks.bmi} is higher than Marks ${johns.bmi}`}`
console.log(higherBmi)