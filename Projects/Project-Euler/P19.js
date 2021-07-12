() => {
  let count = 0;
  for (let year = 1901; year <= 2000; year++) {
    for (let month = 0; month < 12; month++) {
      if ((new Date(year, month)).getDay() === 0) {
        count++;
      }
    }
  }
  return count;
}