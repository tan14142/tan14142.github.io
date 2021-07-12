m => {
  let
  primes = [],
  tDividers = 1,
  t1 = 1,
  t2 = 1,

  primeFactorization = n => {
    
    let dividers = 1;
    
    for (let key = 0; primes[key] <= n; key++) {
      
      let power = 1;
      
      while (n % primes[key] === 0) {
        n /= primes[key];
        power++;
      }
      dividers *= power;
    }
    return dividers;
  };

  const
  list = Array(m * 4).fill(true);
  list[0] = list[1] = false;
  
  list.map((v, k) => {
    if (v) {
      primes.push(k);
      for (let key = k * k; key < list.length; key += k) {
        list[key] = false;
      }
    }
  });

  for (var counter = 2; tDividers <= m ; counter++) {
    if (counter % 2) {
      t1 = primeFactorization((counter + 1) / 2);
    }
    else {
      t2 = primeFactorization(counter + 1);
    }
    tDividers = t1 * t2;
  }
  return counter * (counter - 1) / 2;
}