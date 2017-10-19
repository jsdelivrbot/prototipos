import math
# Problem 1
# Handle the exception thrown by the code below by using try and except blocks.
for i in ['a','b','c']:
    try:
        i = int(i)
        print (i**2)
    except: # if error
        print('Cant power letters strings with numbers')

# Problem 2
# Handle the exception thrown by the code below by using try and except blocks. 
# Then use a finally block to print 'All Done.'
x = 5
y = 0
try:
    z = x/y
    print(z)
except: # if error
    print('division by zero')
finally: 
    print('Printing "Finally"')

# Problem 3
# Write a function that asks for an integer and prints the square of it. 
# Use a while loop with a try,except, else block to account for incorrect inputs.
def ask():
    while True:
        try:
            integer = input('Type an integer: ')
            integer =  int(integer)
        except:
            print('Type an integer AGAIN')
        else:
            square = math.sqrt(integer)
            square = int(square)
            print('Squared: ', square)
            break
ask()


















