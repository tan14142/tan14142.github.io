from functools import reduce

print(reduce(lambda a, b: a + b, [int(d) for d in str(2 ** 1000)]))