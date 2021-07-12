dividend = 13195
prime = 3

while prime < dividend:
  while dividend % prime == 0:
    dividend /= prime
  prime += 2

print(prime)