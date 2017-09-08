my_dic = {
    'key1': 'value1',
    'key2': 'value2'
}

print(my_dic['key1'])
    # 3

my_dic = {
    'key1': 'one',
    'key2': '2',
    'key3': 3
}

print(my_dic['key3'])
    # 3
print(my_dic['key1'][::-1])
    # eno
print(my_dic['key1'].upper())
    # ONE
print(my_dic['key3'] - 1)
    # 2
my_dic['key3'] = my_dic['key3'] + 1 # permen
print(my_dic['key3'])
    # 4

my_dic['key3'] += 100 # permen
print(my_dic['key3'])
    # 104

# =============================================
d = {}
d['animal'] = 42
d['hello'] = 5
d['lol'] = 'haha'
print(d)
    # {'animal': 42}


print(d.keys())
    # dict_keys(['animal', 'hello', 'lol'])

print(d.items())
    # dict_items([('animal', 42), ('hello', 5), ('lol', 'haha')])

print(d.items())
    # dic