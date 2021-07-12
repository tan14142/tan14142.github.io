() => {
  const dict = [
    ,
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',,,,,,,,,,
    'thirty',,,,,,,,,,
    'forty',,,,,,,,,,
    'fifty',,,,,,,,,,
    'sixty',,,,,,,,,,
    'seventy',,,,,,,,,,
    'eighty',,,,,,,,,,
    'ninety'
  ];
  
  let
  temp,
  res = '';
  
  for (let i = 20; i < 100; i++) {
    if (dict[i]) {
      temp = dict[i];
    }
    else {
      dict[i] = temp + dict[i % 10]; 
    }
  }

  for (let i = 1; i < 1000; i++) {
    if (i > 99) {
      res += dict[Math.floor(i / 100)] + 'hundred';
      
      if (i % 100) {
        res += 'and';
      }
      else {
        continue;
      }
    }
    res += dict[i % 100];
  }
  return (res + 'onethousand').length;
}