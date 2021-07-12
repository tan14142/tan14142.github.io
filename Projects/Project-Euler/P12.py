target = 500
estimate = target * 50
primes = [2]
sieve = estimate // 2 * [False, True]
sieve[1] = False
sieve[2] = True

for prime in range(3, estimate, 2):
  if sieve[prime]:
    primes.append(prime)
    for composite in range(prime * prime, estimate, prime):
      sieve[composite] = False

def count_divisors(n):
  divisors = 1
  for prime in primes:
    power = 1
    while n % prime == 0:
      n //= prime
      power +=1
    divisors *= power
  return divisors

term = 1

for i in range(2, estimate):
  term += i
  if term % 2 == 0 and count_divisors(term) > target:
    break

print(term)