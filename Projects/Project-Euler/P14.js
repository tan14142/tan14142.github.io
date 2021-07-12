m => {
  let
  max = 1,
  terms = [, 1];
  
  const f = i => {
    let next;
    if (i % 2) {
      next = i * 3 + 1;
    }
    else {
      next = i / 2;
    }
    if (!terms[next]) {
      f(next);
    }
    terms[i] = terms[next] + 1;
    return terms[next] + 1;
  }
  for (let i = 2; i < m; i++) {
    if (f(i) > terms[max]) {
      max = i;
    }
  }
  return max;
}