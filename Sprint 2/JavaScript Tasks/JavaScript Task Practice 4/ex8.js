const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question("Enter the number : ", (i) => {
    let num = Number(i);
  
   
      if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
      } else if (num % 3 === 0) {
        console.log("Fizz");
      } else if (num % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(num);
      }

  
    readline.close();
  });
  