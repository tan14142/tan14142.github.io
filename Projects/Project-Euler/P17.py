dict = [
  '',
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
  'twenty','','','','','','','','','',
  'thirty','','','','','','','','','',
  'forty','','','','','','','','','',
  'fifty','','','','','','','','','',
  'sixty','','','','','','','','','',
  'seventy','','','','','','','','','',
  'eighty','','','','','','','','','',
  'ninety'
]

target = 1000
dict += [''] * (target - len(dict))
result = ''
temp = ''

for i in range(20, 100):
  if dict[i]:
    temp = dict[i]
  else:
    dict[i] = temp + dict[i % 10]

for i in range(1, target):
  if i > 99:
    result += dict[i // 100] + 'hundred'

    if i % 100:
      result += 'and'
    else:
      continue

  result += dict[i % 100] + '\n'

print(len(result + 'onethousand'))