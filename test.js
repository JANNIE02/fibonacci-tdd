// Test cases for Fibonacci
const assert = require('chai').assert;

describe('Fibonacci function', function() {
  it('should return 0 for Fibonacci of 0', function() {
    assert.equal(fibonacci(0), 0);
  });
})