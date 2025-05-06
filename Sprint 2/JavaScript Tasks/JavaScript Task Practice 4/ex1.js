const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter a number: ", (input) => {
  let num = Number(input);

  console.log(`You entered: ${input}`); 

  if (num > 0) {
    console.log("Positive");
  } else if (num < 0) {
    console.log("Negative");
  } else {
    console.log("Zero or Invalid");
  }

  readline.close();
});
