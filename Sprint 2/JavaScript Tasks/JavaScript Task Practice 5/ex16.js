function calculateProductOrSum(a, b) {
    let product = a * b;
    
    if (product > 500) {
      return a + b;  
    } else {
      return product;  
    }
  }

  num1 = 40;
  num2 = 20;
  console.log("Result for 40 and 20: " + calculateProductOrSum(num1, num2));  
  
  
  num1 = 10;
  num2 = 30;
  console.log("Result for 10 and 30: " + calculateProductOrSum(num1, num2));  
  

  
  