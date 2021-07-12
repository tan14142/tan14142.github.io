m => {
  const n = Math.floor(m / 2);
  return 16 / 3 * Math.pow(n, 3) + 10 * Math.pow(n, 2) + 26 / 3 * n + 1;
}