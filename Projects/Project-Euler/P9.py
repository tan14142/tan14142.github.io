sum = 1000

for a in range(1, sum):
  for b in range(a, sum):
    if 2*a*b - 2000*a - 2000*b == -1000000:
      c = 1000 - a - b
      print(a * b * c)
      exit()