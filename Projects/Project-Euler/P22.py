with open('/public/Projects/Project-Euler/P22.txt', 'r') as f:
  data = f.read().replace('"', '').split(',')
  data.sort()

ascii_offset = 64
scores = {}
result = 0

for i in range(1, 27):
  scores[chr(i + ascii_offset)] = i

for i in range(0, len(data)):
  score = 0

  for char in list(data[i]):
    score += scores.get(char)
  
  result += score * (i + 1)

print(result)