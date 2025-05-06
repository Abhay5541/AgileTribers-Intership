const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question("Enter the first number: ", (num1Input) => {
    readline.question("Enter the second number: ", (num2Input) => {
      let num1 = Number(num1Input);
      let num2 = Number(num2Input);
  
      console.log(`First number: ${num1}, Second number: ${num2}`);
  
      if (num1 > num2) {
        console.log("The first number is greater.");
      } else if (num1 < num2) {
        console.log("The second number is greater.");
      } else {
        console.log("Both numbers are equal.");
      }
  
      readline.close();
    });
  
});
  