function findGreatestOfThree(a, b, c) {
    if (a >= b && a >= c) {
      console.log(a + " is the greatest.");
    } else if (b >= a && b >= c) {
      console.log(b + " is the greatest.");
    } else {
      console.log(c + " is the greatest.");
    }
  }
  
  let num1 = 10;
  let num2 = 20;
  let num3 = 15;
  findGreatestOfThree(num1, num2, num3);  
  
  num1 = 50;
  num2 = 50;
  num3 = 50;
  findGreatestOfThree(num1, num2, num3);  
  