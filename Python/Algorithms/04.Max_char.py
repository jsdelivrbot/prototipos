def max_characters(string):
  char_map = {}
  max_count = 0
  max_chars = None
  for letter in string:
    if letter in char_map.keys():
      char_map[letter] += 1
    else:
      char_map[letter] = 1
    
  for keys, values in char_map.items():
    if values > max_count:
      max_count = values
      max_chars = keys
    
  return max_chars

print(max_characters('Helloooooo Worldddd'))