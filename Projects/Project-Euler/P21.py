target = 10000
divisors = [1] * target
sum = 0

for i in range(2, target):
  for j in range(i + i, target, i):
    divisors[j] += i

for i in range(4, target):
  if divisors[i] < target and i == divisors[divisors[i]] and divisors[i] != i:
    sum += i

print(sum)