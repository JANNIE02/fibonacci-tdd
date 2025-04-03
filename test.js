// test.js
const fibonacci = require('./fibonacci');
const assert = require('chai').assert;

describe('Fibonacci function', function() {
  
  it('should return 0 for Fibonacci of 0', function() {
    assert.equal(fibonacci(0), 0);  // This test will pass
  });

  it('should return 1 for Fibonacci of 1', function() {
    assert.equal(fibonacci(1), 1);  // This test will fail because the fibonacci function returns 2 instead of 1
  });

  it('should return 1 for Fibonacci of 2', function() {
    assert.equal(fibonacci(2), 1);  // This test will fail because the fibonacci function returns 3 instead of 1
  });

});
