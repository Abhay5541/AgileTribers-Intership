let size = 5; 


//square
console.log("Square Pattern:");
for (let i = 0; i < size; i++) {
  let row = "*".repeat(size).split("").join(" ");  
  console.log(row);
}



// Triangle 
console.log("\nTriangle Pattern:");
for (let i = 1; i <= size; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}



// Diamond 
console.log("\nDiamond Pattern:");
for (let i = 1; i <= size; i++) {
  let row = "";
 for (let j = 1; j <= size - i; j++) {
    row += " ";
  }
  for (let k = 1; k <= (2 * i - 1); k++) {
    row += "*";
  }
  console.log(row);
}

for (let i = size - 1; i >= 1; i--) {
  let row = "";
 for (let j = 1; j <= size - i; j++) {
    row += " ";
  }
 for (let k = 1; k <= (2 * i - 1); k++) {
    row += "*";
  }
  console.log(row);
}
