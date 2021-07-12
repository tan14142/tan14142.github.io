target = 2000000
sieve = target // 2 * [False, True]
sieve[1] = False
sieve[2] = True
sums = 2

for prime in range(3, target, 2):
  if sieve[prime]:
    sums += prime
    for composite in range(prime * prime, target, prime):
      sieve[composite] = False

print(sums)