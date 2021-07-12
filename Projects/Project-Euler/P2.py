max = 4000000
next = 2
sum = 0
terms = [1]

while next < max:
  terms.append(next)

  if next % 2 == 0:
    sum += next

  next = terms[-1] + terms[-2]

print(sum)