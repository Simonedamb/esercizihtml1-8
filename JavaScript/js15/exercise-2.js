function num(base) {
  return function (value) {
    return Math.pow(base, value);
  };
}

const pow2 = num(2);
const pow5 = num(5);

console.log("--- Power of 2 ---");
console.log(pow2(4));
console.log(pow2(2));
console.log(pow2(8));

console.log("--- Power of 5 ---");
console.log(pow5(4));
console.log(pow5(2));
console.log(pow5(8));
