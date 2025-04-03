function fibonacci(n) {
    if (n === 0) return 0;
    if (n <= 1) return n;   // Return n for 1 as it's the base case
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
      let temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  }
  
 
module.exports = fibonacci;