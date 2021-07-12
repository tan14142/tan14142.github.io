m => {
  let
  sumOfAmicables = 0,
  sumsOfDivisors = new Array(m).fill(1);

  for (let i = 2; i < m; i++) {
    for (let j = i + i; j < m; j += i) {
      sumsOfDivisors[j] += i;
    }
    if (sumsOfDivisors[i] !== i && sumsOfDivisors[sumsOfDivisors[i]] === i) {
      sumOfAmicables += i;
    }
  }
  return sumOfAmicables;
}