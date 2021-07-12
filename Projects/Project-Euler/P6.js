m => {
  let s1 = 0;
  let s2 = 0;

  for (let i = 1; i <= m; i++) {
    s1 += i * i;
    s2 += i;
  }
  return s2 * s2 - s1;
}