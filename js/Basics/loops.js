let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
let tips = []
let totals = []
for (let index = 0; index < bills.length; index++) {
    let tip;
   if (bills[index] >= 50 && bills[index] <= 300) {
        tip = bills[index] * 0.15;
   } else{
    tip = bills[index] * 0.2;
   }
   tips.push(tip)
   totals.push(tip + bills[index])
}

console.log(totals)
console.log(tips)

let calcAvg = (arr) => {
    let sumTotal = 0
    for (let index = 0; index < arr.length; index++) {   
       sumTotal += arr[index]
    }
    const average = sumTotal / arr.length;
    return average
}

let totalAvg = calcAvg(totals)
console.log(totalAvg)

//everpay
//https://semicolon-africa.pixieset.com/cohort11/