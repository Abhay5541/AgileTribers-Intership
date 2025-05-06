let x = [23, 4, -6, 23, -9, 21, 3, -45, -8]; 

let positiveNumbers = [];
let negativeNumbers = [];


for (let i = 0; i < x.length; i++) {
  if (x[i] >= 0) {
    positiveNumbers.push(x[i]);
  } else {
    negativeNumbers.push(x[i]);
  }
}

console.log("Positive Numbers:", positiveNumbers);
console.log("Negative Numbers:", negativeNumbers);
