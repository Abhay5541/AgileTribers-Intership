let numbers = [3, 4, 5];  


function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}


for (let i = 0; i < numbers.length; i++) {
  let fact = factorial(numbers[i]);
  console.log("Factorial of " + numbers[i] + " is: " + fact);
}
