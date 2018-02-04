def palindrome(str):
    new_str = str.replace(' ', '')
    reverse_str = ''

    for letter in str:
        reverse_str = letter + reverse_str
    
    return new_str == reverse_str

print('Type word or sentence')
palindrome_input = input()
print('{} is a {} palindrome'.format(palindrome_input, palindrome(palindrome_input)))
