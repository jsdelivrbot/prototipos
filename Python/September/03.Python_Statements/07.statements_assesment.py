# Use for, split(), and if to create a Statement that will print out words that start with 's':
st = 'Print only the words that start with s in this sentence'
s = st.split()
for s_words in s:
    if s_words[0] == 's':
        print (s_words)
# print(st)


# Use range() to print all the even numbers from 0 to 10.
for even in range(11):
    if even % 2 == 0: 
        print(even)

# Use List comprehension to create a list of all numbers between 1 and 50 that are divisible by 3.
li = [number for number in range(1, 51) if number % 3 == 0]
print(li)

# Go through the string below and if the length of a word is even print "even!"
st = 'Print every word in this sentence that has an even number of letters'
S = st.split()
for word in S:
    if len(word) % 2 == 0:
        print(word)


# Write a program that prints the integers from 1 to 100. 
# But for multiples of three print "Fizz" instead of the number, and for the multiples of five print "Buzz". 
# For numbers which are multiples of both three and five print "FizzBuzz".

for number in range(1, 101):
    if number % 15 == 0:
        print('FizzBuzz')
    
    elif number % 5 == 0:
        print('Buzz')
    
    elif number % 3 == 0:
        print('Fizz')
    else:
        print(number)

# Use List Comprehension to create a list of the first letters of every word in the string below:

st = 'Create a list of the first letters of every word in this string'
s = st.split()
otherList = [first[0] for first in s ]
print(otherList)