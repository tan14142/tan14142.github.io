terms = {}
target = 101

for a in range(2, target):
  for b in range(2, target):
    terms[a ** b] = True

print(len(terms.items()))