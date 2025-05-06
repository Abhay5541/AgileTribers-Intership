let evenCount = 0;
let oddCount = 0;

for (let i = 10; i <= 55; i++) {
  if (i % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}

console.log("Even numbers count: " + evenCount);
console.log("Odd numbers count: " + oddCount);
