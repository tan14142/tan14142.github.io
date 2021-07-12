m => {
  let p = [3]

  for (let i = 3; p.length < m - 1; i += 2) {
    if (p.every(v => i % v)) {
      p.push(i);
    }
  }
  return p.pop();
}