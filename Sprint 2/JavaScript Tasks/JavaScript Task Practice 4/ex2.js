const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question("Enter a number: ", (input) => {
    let num = Number(input);

    console.log(`You entered: ${input}`);
  
    if (num % 2 === 0) {
      console.log("Even");
    } else {
      console.log("Odd");
    }
  
    readline.close();
  });
  