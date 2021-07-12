target = 1001
distance = 2
start = 1
sum = 1

while distance < target:
  sum += start * 4 + 10 * distance
  start += 4 * distance
  distance += 2

print(sum)