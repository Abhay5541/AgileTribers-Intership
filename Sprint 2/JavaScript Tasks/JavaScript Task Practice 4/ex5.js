const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question("Enter a year: ", (yearInput) => {
    let year = Number(yearInput);
  
    console.log(`You entered: ${year}`);
  
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      console.log("Leap year");
    } else {
      console.log("Not a leap year");
    }
  
    readline.close();
  });
  