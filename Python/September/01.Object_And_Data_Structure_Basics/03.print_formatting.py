variable = 'String'

print("Place my variable here: %s" %(variable))
    # Place my variable here: String

print('Floating point number: %1.2f' %(13.145)) # 1.2 similar to .fixed(2)
    #Floating point number: 13.14

# %s converts to string str()
# %r converts to string repr()
# % tupple

print("1%s, 2%s, 3%s" %('st', 'nd', 'rd'))
    # 1st, 2nd, 3rd

print("1%s, 1%s, 3%s" %('st', 'st', 'rd'))
    # 1st, 1st, 3rd
# better !!!!!!!!!!!!!!!!!!!!!!!!
print("1{x}, 1{x}, 3{y}" .format(x = 'st', y = 'rd'))
    # 1st, 1st, 3rd





