function calculate() {
  let a = 0;
  return {
    add(b) {
      a += b;
      return this;
    },
    multiply(b) {
      a *= b;
      return this;
    },
    sub(b) {
      a -= b;
      return this;
    },
    divide(b) {
      a /= b;
      return this;
    },
    printResult() {
      console.log(a);
    },
  };
}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7
