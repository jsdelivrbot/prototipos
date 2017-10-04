def print_name(name):
    print('Hello ' + name)

print_name('Ever')

def addition(num1, num2):
    """
    Here is some comments for DOC strings
    """
    print (num1 + num2)
addition(2, 4)

def prime(number):
    """
    INPUT: a number
    OUTPUT: a print statement whether or not the number is prime
    """
    for n in range(2, number):
        if number % n == 0:
            print (number, 'Not Prime')
            break
        else:
            print(number, 'The number is prime')
            break

prime(11)