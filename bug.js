function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; // This is incorrect if a or b is negative zero
  }
  return a / b; // This is vulnerable to division by zero
}

console.log(foo(1, 0)); // Output: Infinity (Expected: 0)
console.log(foo(1, -0)); // Output: -Infinity (Expected: 0)
console.log(foo(0, 1)); // Output: 0 (correct)
console.log(foo(-0, 1)); // Output: -0 (correct)
console.log(foo(10, 2)); // Output: 5 (correct)