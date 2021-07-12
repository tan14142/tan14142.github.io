m => {
  let
  a = Array(m + 1).fill(true),
  p = [];
  
  a[0] = a[1] = false;
  a.map((v, k) => {
    if (v) {
      p.push(k);
      for (let i = k * k; i <= m; i += k) {
        a[i] = false;
      }
    }
  });

  return p.reduce((acc, n) => acc + n);
}