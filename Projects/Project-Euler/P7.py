import math

count = 1
target = 10001
estimate = int(target * math.log(target))
sieve = [False, True] * estimate
sieve[1] = False
sieve[2] = True

for prime in range(3, estimate * 2, 2):
  if sieve[prime]:
    count += 1
    
    if count == target:
      break

    for composite in range(prime * prime, estimate * 2, prime):
      sieve[composite] = False

print(prime)