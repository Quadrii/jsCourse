let marksWeight = 78;
let johnsWeight = 92;
let markHeight = 1.69;
let johnHeight = 1.95;

let johnsBmi = johnsWeight / (johnHeight * johnHeight);
let marksBmi = marksWeight / (markHeight ** 2);

let marksBmiISHigher = marksBmi > johnsBmi
console.log(marksBmi, johnsBmi, marksBmiISHigher)
if (marksBmiISHigher) {
    console.log("Mark's BMI is higher")
} else {
    console.log("John's BMI is higher")
}

