m => {
  let
  counter = 3,
  f1 = BigInt(1),
  f2 = BigInt(1),
  f3 = BigInt(2),
  target = BigInt(m);

  while (f3 < target) {
    counter++;
    f1 = f2;
    f2 = f3;
    f3 = f1 + f2;
  }
  return counter;
}