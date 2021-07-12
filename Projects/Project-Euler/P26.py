max = 0
result = 0

for denominator in range(2, 1000):
  counter = 0
  remainder = 1
  remainders = []

  while remainder:
    while remainder < denominator:
      counter += 1
      remainder = remainder * 10

    remainder %= denominator

    if remainder in remainders:
      break

    remainders.append(remainder)

  if max < counter:
    max = counter
    result = denominator

print(result)