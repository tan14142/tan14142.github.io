m => {
  let
  i = 0,
  j = 1,
  k,
  result = 0;

  while (j <= m) {
    k = j;
    j += i;
    i = k;
    if (i % 2 === 0) {
      result += i;
    }
  }
  return result;
}