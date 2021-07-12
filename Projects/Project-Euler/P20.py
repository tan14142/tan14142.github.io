from functools import reduce

prod = reduce(lambda a, b: a * b, range(2, 101))
digits = [int(d) for d in str(prod)]
sum = reduce(lambda a, b: a + b, digits)

print(sum)