m => {
  const primes = Array(m + 1).fill(true);
  primes[0] = primes[1] = false;
  
  for (let i = 2; i < Math.sqrt(m); i++) {
    if (primes[i]) {
      for (let j = i * i; j <= m; j += i) {
        primes[j] = false;
      }
    }
  }
  
  let
  result = { max: 0 },
  swapB = b => {
    let a = m % 2
      ? -m + 2
      : -m + 1;
    
    for (; a < m; a += 2) {
    
      let n = 0;
      
      while (primes[n * n + n * a + b]) {
        n++;
      }
      
      if (n > result.max) {
        result = {
          a: a,
          b: b,
          max: n
        };
      }
    }
  };
  
  for (let i = m; i >= 0; i--) {
    if (primes[i]) {
      swapB(i);
      swapB(-i);
    }
  }

  return result.a * result.b;
}