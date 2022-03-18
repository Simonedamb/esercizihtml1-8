function sumUntil(maxValue) {
  let tot = 0;
  for (let i = 0; i <= maxValue; i++) {
    tot += i;
  }
  return tot;
}

console.log(sumUntil(5));
