m => {
  const
  
  powers = [...Array(10)].map(
    (value, key) => Math.pow(key, m)
  ),
  results = [],

  reverse = value => String(value).split('').reduce(
    (acc, base) => acc + Math.pow(+base, m),
    0
  ),

  sum = arr => arr.reduce(
    (acc, value) => acc + value,
    0
  ),

  f = offsets => {
    for (let i = offsets[offsets.length - 1]; i < 10; i++) {
      if (offsets.length < m + 1) {
        f([...offsets, i]);
      }
      else {
        const n = sum([...offsets.slice(1), i].map(
          value => powers[value]
        ));
        
        if (!results.includes(n) && n === reverse(n)) {
          results.push(n);
        }
      }
    }
  };

  f([0]);

  return sum(results) - 1;
}