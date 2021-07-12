m => {
  const primes = [];
  let i = 3;

  while (i < m) {
    if (m % i === 0 && primes.every(p => i % p)) {
      primes.push(i);
      if (primes.reduce((p1, p2) => p1 * p2) === m) {
        return primes.pop();
      }
    }
    i += 2;
  }
}