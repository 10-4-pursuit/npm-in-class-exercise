function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// console.log(add(1, 2));
// console.log(subtract(1, 2));
// console.log(multiply(2, 2));
// console.log(divide(4, 2));

// module.exports = { 
//   add: add, 
//   subtract: subtract, 
//   multiply: multiply, 
//   divide: divide 
// }

export { add, subtract, multiply, divide }