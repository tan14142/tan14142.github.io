n = 999
min = (n + 1) / 10
results = []

while n > min:
  m = n
  while m > min:
    p = str(n * m)
    if p == p[::-1]:
      results.append(int(p))
      break
    m -= 1
  n -= 1

print(max(results))