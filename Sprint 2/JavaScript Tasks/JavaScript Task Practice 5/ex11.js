let numbers = [10, 15, 23, 30, 42, 50, 65];  

console.log("Numbers divisible by 5:");
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 5 === 0) {
    console.log(numbers[i]);
  }
}
