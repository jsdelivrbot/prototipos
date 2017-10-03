numbers_1 = 4 * (6 + 5)
numbers_2 = 4 * 6 + 5
numbers_3 = 4 * 6 * 5

print(numbers_1)
print(numbers_2)
print(numbers_3)

# Strings
s = 'hello'
# Print out 'e' using indexing
print(s[1])

# Reverse the string using indexing
print(s[::-1])

# Print out the 'o'
print(s[-1])
print(s[4])


# List
l = [1,2,[3,4,'hello']]
l[2][2] = 'goodbye'
print(l)

l = [5,3,4,6,1]
sorted_list = l.sort() #permenant to original
# sorted_list Wont print variable
print(l)



# Dictionaries

d = {'simple_key':'hello'}
# Grab 'hello'
print(d['simple_key'])

d = {'k1':{'k2':'hello'}}
# Grab 'hello'
print(d['k1']['k2'])

# Getting a little tricker
d = {'k1':[{'nest_key':['this is deep',['hello']]}]}
#Grab hello
print(d['k1'][0]['nest_key'][1][0])


# Sets
l = [1,2,2,33,4,4,11,22,3,3,2]
s = set(l)
print(s)

# Answer before running cell
one = 2 > 3
print(one)
two = 3 <= 2
print(two)
three = 3 == 2.0
print(three)
four = 3.0 == 3
print(four)
five = 4**0.5 != 2
print(five)

# Final Question: What is the boolean output of the cell block below?
# two nested lists
l_one = [1,2,[3,4]]
l_two = [1,2,{'k1':4}]

#True or False?
final = l_one[2][0] >= l_two[2]['k1']
print(final)




