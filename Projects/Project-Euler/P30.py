target = 5
f = [n**5 for n in range(0, 10)]
result = -1

for n1 in range(0, 10):
  for n2 in range(0, 10):
    for n3 in range(0, 10):
      for n4 in range(0, 10):
        for n5 in range(0, 10):
          for n6 in range(0, 10):
            n = int(str(n1) + str(n2) + str(n3) + str(n4) + str(n5) + str(n6))
            if n == f[n1] + f[n2] + f[n3] + f[n4] + f[n5] + f[n6]:
              result += n

print(result)