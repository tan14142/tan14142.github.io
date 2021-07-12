target = 1000000
terms = {1:1}

def count_terms(n):
  if not terms.get(n):
    terms[n] = count_terms(3 * n + 1 if n % 2 else n // 2) + 1
  return terms.get(n)

max = 1

for i in range(2, target):
  if count_terms(i) > terms.get(max):
    max = i

print(max)