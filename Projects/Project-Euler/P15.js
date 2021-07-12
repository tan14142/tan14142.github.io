m => {
  const f = (n, limit) => {
    let prod = 1;
    for (let i = n; i > limit; i -= 1) {
      prod *= i;
    }
    return prod;
  }
  return Math.round(f(m * 2, m) / f(m, 1));
}