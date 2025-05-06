const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function calculate(a, b, operator) {
    if (isNaN(a) || isNaN(b)) return 'Invalid number input';
    if (operator === '+') return a + b;
    if (operator === '-') return a - b;
    if (operator === '*') return a * b;
    if (operator === '/') return b !== 0 ? a / b : 'Cannot divide by zero';
    return 'Invalid operator';
  }
  
  readline.question('Enter first number: ', (num1) => {
    readline.question('Enter operator (+, -, *, /): ', (op) => {
      readline.question('Enter second number: ', (num2) => {
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        const result = calculate(a, b, op);
        console.log(`Result: ${result}`);
        readline.close();
      });
    });
  });
  