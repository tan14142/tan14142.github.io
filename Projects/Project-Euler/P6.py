sum = 0
sum_of_squares = 0

for i in range(1, 101):
  sum += i
  sum_of_squares += i * i

print(sum * sum - sum_of_squares)