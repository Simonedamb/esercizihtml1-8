function memoize(fn) {
  let cache = {};
  return (value) => {
    if (fn(value) in cache) {
      return fn(value);
    } else {
      return (cache.result = fn(value));
    }
  };
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

factorial = memoize(factorial);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));
