target = 28123
abundants = []
sieve = list(range(0, target))
sum_divisors = [1] * target
result = 1

for i in range(2, target):
  for j in range(i + i, target, i):
    sum_divisors[j] += i

  if i < sum_divisors[i]:
    abundants.append(i)
    for abundant in abundants:
      if abundant + i < target:
        sieve[abundant + i] = 0
  
  result += sieve[i]

print(result)