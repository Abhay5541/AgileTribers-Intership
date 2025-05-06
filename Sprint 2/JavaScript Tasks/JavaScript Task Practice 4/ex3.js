const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question("Enter the base: ", (baseInput) => {
    readline.question("Enter the exponent: ", (expInput) => {
      let base = Number(baseInput);
      let exponent = Number(expInput);
      
      console.log(`Base: ${base}, Exponent: ${exponent}`);
      
      let result = Math.pow(base, exponent);
      console.log(`Result: ${result}`);
      
      readline.close();
    });
  });
  