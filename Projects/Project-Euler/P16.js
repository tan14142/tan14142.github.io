m => BigInt(Math.pow(2, m))
    .toString()
    .split('')
    .reduce((acc, n) => +acc + +n);