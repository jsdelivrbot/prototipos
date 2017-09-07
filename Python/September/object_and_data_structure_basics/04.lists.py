my_list = [1, 2, 3]
    # 1st, 1st, 3rd
my_list = ['string', 5, 6.2]
    # ['string', 5, 6.2]
# print(my_list)

print(len(my_list))
    # 3


# indexing andslicing

my_list = ['one', '2', 3]

print(my_list[0])
    # one
print(my_list[1:])
    # ['2', 3]
print(my_list[:2])
    # ['one', '2']


# ==============================================
# methods

print(my_list + ['fourth']) # SAME AS append
    # ['one', '2', 3, 'fourth']

# permenant
my_list = my_list + ['fourth']
print(my_list)
    # ['one', '2', 3, 'fourth'] 
print(my_list * 2)
    # ['one', '2', 3, 'fourth', 'one', '2', 3, 'fourth']
a = [1, 2, 3]
a.append('append') # SAME AS +
print(a)
    # [1, 2, 3, 'append']

a.pop() #permanent last index
print(a)
    # [1, 2, 3]

firsttt = a.pop(0) # permanent index
print(a)
    # [2, 3]
print(firsttt)
    # 1

new_list = ['e', 'v', 'e', 'r']

new_list.reverse()  #permen
print(new_list)
    # ['r', 'e', 'v', 'e']
new_list.sort()
print(new_list)
    # ['e', 'e', 'r', 'v']

# ====================================================
a_1 = [1, 2, 3]
a_2 = [4, 5, 6]
a_3 = [7, 8, 9]

matrix = [a_1, a_2, a_3]
print(matrix)
    # [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

print(matrix[1][2], matrix[0][1], matrix[0][0])
    # 6 2 1

# =================List Comprehension =====================
first_col = [row[0] for row in matrix]
print(first_col)
    # [1, 4, 7]








