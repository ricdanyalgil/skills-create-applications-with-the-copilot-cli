#!/usr/bin/env node
// Node.js CLI calculator.
// Supported operations:
//   - addition       (add)
//   - subtraction    (subtract)
//   - multiplication (multiply)
//   - division       (divide)  -- throws on division by zero

function add(a, b) { return a + b; } // addition
function subtract(a, b) { return a - b; } // subtraction
function multiply(a, b) { return a * b; } // multiplication
function divide(a, b) { // division
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

const ops = { add, subtract, multiply, divide };

if (require.main === module) {
  const [op, a, b] = process.argv.slice(2);
  if (!ops[op]) {
    console.error(`Usage: node src/calculator.js <${Object.keys(ops).join('|')}> <a> [b]`);
    process.exit(1);
  }
  try {
    console.log(ops[op](Number(a), Number(b)));
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
}

module.exports = ops;
