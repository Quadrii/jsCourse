let bills = [125, 555, 44]
let tip;
let total;

const calcTip = (bill) => {
    if (bill >= 50 && bill <= 300) {
        tip = bill * 0.15
        return tip;
    } else {
        tip = bill * 0.2
        return tip;
    }
}

let tip1 = calcTip(bills[0])
let tip2 = calcTip(bills[1])
let tip3 = calcTip(bills[bills.length - 1])
console.log(tip1, tip2, tip3)

let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])]
console.log(tips)

 total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2],]
 console.log(total)

 