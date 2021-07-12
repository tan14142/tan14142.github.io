m => {
  let result = 0;

  for (let i = 1; i < m; i++) {
    result += (!(i % 3) || !(i % 5)) && i;
  }

  return result;
}