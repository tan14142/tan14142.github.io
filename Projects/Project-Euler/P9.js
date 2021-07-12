m => {
  const
  h = Math.ceil(m / 2),
  s = 6 * m;

  for (let a = 1; a < h; a++) {
    let b = (2 * m * a - m * m) / (2 * (a - m));
    if (b % 1 === 0) {
      return String([a, b, m - a - b])
    }
  }
  return 'no integers found';
}