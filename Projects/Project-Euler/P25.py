n1 = n2 = 1
target = 10**999
count = 1

while n1 < target:
  count += 1
  n3 = n1 + n2
  n1 = n2
  n2 = n3

print(count)