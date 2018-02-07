def chunk_array(array, size):
    new_list = []
    for element in array:
        last = None
        if len(new_list) == 0:
            new_list.append([element])
        elif len(new_list[-1]) == size:
            new_list.append([element])
        else:
            last = new_list[-1]
            last.append(element)
    return new_list

print(chunk_array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2))