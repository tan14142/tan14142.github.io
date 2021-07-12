estimate = 20000
sieve = estimate // 2 * [False, True]
sieve[1] = False
sieve[2] = True

for prime in range(3, estimate, 2):
  if sieve[prime]:
    for composite in range(prime * prime, estimate, prime):
      sieve[composite] = False

max = 0

for b in range(2, 1000):
  if sieve[b]:
    for a in range(-999, 1000, 2):
      n = 1

      while sieve[n * n + a * n + b]:
        n += 1
    
      if max < n:
        max = n
        result = a * b

print(result)