() => {
  for (let i = 997; i > 100; i--) {
    for (let j = 999; j > 100; j--) {
      let p = +(String(i) + String(i).split("").reverse().join(""));
      if (p % j === 0 && j > 99 && j < 1000 && p / j > 99 && p / j < 1000) {
        return p;
      }
    }
  }
}