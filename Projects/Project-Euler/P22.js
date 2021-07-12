() => {
  const
  fs = require('fs'),    
  buffer = fs.readFileSync(process.cwd() + '/public/Projects/Project-Euler/P22.txt'),
  names = String(buffer).split(',').sort(),
  scores = {};

  for (let i = 0; i <= 90 - 65; i++) {
    scores[String.fromCharCode(65 + i)] = i + 1;
  }

  return names.reduce((total, name, index) => {
    return total + (index + 1) * name.slice(1, -1).split('').reduce((score, letter) => {
      return score + scores[letter];
    }, 0);
  }, 0);
}