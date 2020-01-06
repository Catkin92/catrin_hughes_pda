var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  xit('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should add two numbers together', function() {
    calculator.previousTotal = 4;
    calculator.add(1);
    assert.deepStrictEqual(5, calculator.runningTotal);
  })

  it('should subtract two numbers', function() {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.deepStrictEqual(3, calculator.runningTotal);
  })

  it('should multiply two numbers together', function() {
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.deepStrictEqual(15, calculator.runningTotal);
  })

  it('should divide one number by another number', function() {
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.deepStrictEqual(3, calculator.runningTotal);
  })

  it('should concatenate multiple number button clicks', function() {
    calculator.numberClick(1);
    calculator.numberClick(3);
    calculator.numberClick(7);
    calculator.numberClick(5);
    assert.deepStrictEqual(1375, calculator.runningTotal);
  })

  it('should chain multiple operations together', function() {
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(5);
    calculator.operatorClick('-');
    calculator.numberClick(2);
    calculator.operatorClick('/');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.deepStrictEqual(4, calculator.runningTotal);
  })

  it('should clear the running total without affecting the calculation', function() {
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    calculator.clearClick();
    assert.deepStrictEqual(0, calculator.runningTotal);
    assert.deepStrictEqual(9, calculator.previousTotal);
  })
});
