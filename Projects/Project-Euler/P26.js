m => {
  let
  maxIndex = 0,
  maxLength = 0;

  for (let i = m; i > 1; --i) {
  
    let
    counter = 0,
    dividend = 1,
    length = 0,
    reciprocals = [],
    remainder = 1;
    
    while (true) {
      dividend = remainder * 10;
      remainder = dividend % i;
      
      if (remainder === 0) {
        break;
      }
      if (reciprocals[remainder]) {
        length = counter - reciprocals[remainder];
        break;
      }
      
      reciprocals[remainder] = counter++;
    }
    
    if (length > maxLength) {
      maxIndex = i;
      maxLength = length;
    }
  }
  return maxIndex;
}