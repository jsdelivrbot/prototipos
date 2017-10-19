# Write a function that computes the volume of a sphere given its radius.
def volume(number):
    return number**3

v = volume(3)
print(v)

# Write a function that checks whether a number is in a given range (Inclusive of high and low)
def ran_check(num,low,high):
    within_range = False
    for number in range(low, high):
        if num == number:
            within_range = True
            break
    return within_range
r = ran_check(10, 10, 20)
print(r)

# Write a Python function that accepts a string and calculate the number of upper case letters and lower case letters.
# Sample String : 'Hello Mr. Rogers, how are you this fine Tuesday?'
# Expected Output : 
# No. of Upper case characters : 4
# No. of Lower case Characters : 33
def up_low(str):
    lowercase = 0
    uppercase = 0
    for letter in str:
        if letter.isupper():
            uppercase += 1
        elif letter.islower():
            lowercase += 1
    result = 'No. of Lower case Characters : {lower}'.format(lower=lowercase) + '\n' \
            'No. of Upper case Characters : {upper}'.format(upper=uppercase)
    return result
u = up_low('Hello Mr. Rogers, how are you this fine Tuesday?')
print(u)   

# Write a Python function that takes a list and returns a new list with unique elements of the first list.
# Sample List : [1,1,1,1,2,2,3,3,3,3,4,5]
# Unique List : [1, 2, 3, 4, 5]
def unique_list(l):
    the_set = set(l)
    new_list = list(the_set)
    return new_list
u = unique_list([1,1,1,1,2,2,3,3,3,3,4,5])
print(u)

# Write a Python function to multiply all the numbers in a list.
# Sample List : [1, 2, 3, -4]
# Expected Output : -24
def multiply(numbers):  
    product = 1
    for number in numbers:
        product *= number
    return product
m = multiply([1,2,3,-4])
print(m)

# Write a Python function that checks whether a passed string is palindrome or not.
# Note: A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
def palindrome(str):
    palindrome = None
    word = str.replace(" ", "")
    reverse = str[::-1].replace(" ", "")
    
    if word == reverse:
        palindrome = True
    else:
        palindrome = False
        
    return palindrome

p = palindrome('nurses run')
print(p)


# Hard:

# Write a Python function to check whether a string is pangram or not.

# Note : Pangrams are words or sentences containing every letter of the alphabet at least once.
# For example : "The quick brown fox jumps over the lazy dog"

# Hint: Look at the string module

def ispangram(str):
    ispangram = None
    alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

    string = str
    string = string.replace(" ", "")
    string = string.lower()
    
    str_letters = list(set(string))
    if len(alphabet) == len(str_letters):
        ispangram = True
    else:
        ispangram = False

    return ispangram
    

i = ispangram("The quick brown fox jumps over the lazy dog")
print(i)




