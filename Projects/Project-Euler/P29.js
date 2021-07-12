m => {
  const sets = [];

  for (let i = BigInt(2); i <= m; i++) {
    let power = i;
    for (let j = 2; j <= m; j++) {
      power *= i;
      if (!sets.includes(power)) {
        sets.push(power);
      }
    }
  }
  return sets.length;
}