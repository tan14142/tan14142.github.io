from functools import reduce

obj = list(range(0, 10))
result = []
target = 1000000

def factorize(n):
  return reduce(lambda a, b: a * b, range(1, n + 1))

for i in range(len(obj) - 1, 0, -1):
  f = factorize(i)
  j = 0

  while target > f * (j + 1):
    j += 1

  result.append(obj.pop(j))
  target -= f * j

print(int(reduce(lambda a, b: str(a) + str(b), result + obj)))