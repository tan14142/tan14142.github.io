() => {
  let
  limit = 28123,
  abundants = [],
  sieve = new Array(limit).fill(true),
  sumsOfDivisors = new Array(limit).fill(1);
  result = 1;

  for (let i = 2; i <= limit; i++) {
    for (let j = i + i; j < limit; j += i) {
      sumsOfDivisors[j] += i;
    }
    if (sumsOfDivisors[i] > i && sumsOfDivisors[i] < limit) {
      abundants.push(i);
      abundants.map(abundant => {
        sieve[abundant + i] = false;
      });
    }
    result += sieve[i] && i;
  }
  return result;
}