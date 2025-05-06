function findGreatest(a, b) {
    if (a > b) {
      console.log(a + " is the greatest.");
    } else if (b > a) {
      console.log(b + " is the greatest.");
    } else {
      console.log("Both numbers are equal.");
    }
  }
  
  
  let num1 = 25;
  let num2 = 30;
  findGreatest(num1, num2);  
  
  num1 = 50;
  num2 = 50;
  findGreatest(num1, num2);  
  