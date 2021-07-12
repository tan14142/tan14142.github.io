m => {
  let n = BigInt(1);
  for (let i = BigInt(m); i > 1; i--) {
    n *= i
  }
  return n
    .toString()
    .split('')
    .reduce((acc, v) => +acc + +v)
}