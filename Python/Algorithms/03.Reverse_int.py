def reverse_int(num):
    reverse = ''
    for letter in str(num):
        reverse = letter + reverse

    if num < 0:
        reverse = reverse.replace('-', '')
        return int(reverse) * -1

    return int(reverse)

print(reverse_int(-621))
# -126


