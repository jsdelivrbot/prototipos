
def reverse_str(str):
    reverse = ''
    for letter in string:
        reverse = letter + reverse
    return reverse

print('Type a word or sentence')
string = input()
print(reverse_str(string))
