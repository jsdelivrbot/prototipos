print(621)

l = []

for letter in 'word':
    l.append(letter)

print(l)

# list comprehension
l =[ letter for letter in 'word' ]

print(l)

lst = [ x**2 for x in range(0,11) ]

print(lst)

lst = [ number for number in range(11) if number % 2 == 0 ]
print(lst)
# SAME ASS
lst = []
for number in range(11):
    if number % 2 == 0:
        lst.append(number)

print(lst)


# CELCIOUS
celsius = [0,20,40,60,80,100]

farenheit = [ (temp * (9/5) + 32) for temp in celsius ]
print(farenheit)

# to the power of 4
lst = [ x**2 for x in [ x**2 for x in range(11) ] ]
print(lst)








