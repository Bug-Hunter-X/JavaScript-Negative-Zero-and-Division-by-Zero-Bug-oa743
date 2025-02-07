function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Correct handling for zero
  } else if (a === -0 || b === -0) {
    return 0; // Correct handling for negative zero
  }
  return a / b; // division by zero is not possible now
}

console.log(foo(1, 0)); // Output: 0 (correct)
console.log(foo(1, -0)); // Output: 0 (correct)
console.log(foo(0, 1)); // Output: 0 (correct)
console.log(foo(-0, 1)); // Output: 0 (correct)
console.log(foo(10, 2)); // Output: 5 (correct) 