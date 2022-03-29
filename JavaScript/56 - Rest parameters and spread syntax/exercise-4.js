function sum() {
  return numbers.reduce((x, y) => x + y, 0);
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));
