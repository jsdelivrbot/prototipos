names = ['Ever', 'Uriel', 'Garcia']
counter = 0
for name in names:
    counter += 1
    if counter % 2 == 1: #if even % 2 == 0
        print(counter, name) 
print (int(counter))
# 1 Ever
# 3 Garcia

# strings
random_string = 'Ever'

for letter in random_string:
    print(letter)


# tupples

tup = (1,2,3,4,5)

for t in tup:
    print (t)

l = [(2,4),(6,8),(8,10)]

for elements in l:  
    # print(elements)
    for (num1, num2) in l:
        print(num1, num2) 




# DICTIONARIES
d = {
    'k1': 1,
    'k2': 2,
    'k3': 3
}

for keys, values in d.items():
    print(keys, values)