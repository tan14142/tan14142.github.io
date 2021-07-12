m => {

  let i = m;

  while (true) {
    for (let j = m - 1; j > 1; j--) {
      if (i % j > 0) {
        break;
      }
      else if (j === 2) {
        return i;
      }
    }
    i += m;
  }
}