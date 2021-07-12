m => {
  let
  objects = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  permutations = 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10,
  result = [],

  f = target => {
    let counter = 0;
    permutations /= objects.length;
    while (counter * permutations < target) counter++;
    result.push(objects.splice(--counter, 1));
    
    if (objects.length) {
      f(target - counter * permutations);
    }
    return result;
  }
  return +f(m).join('');
}