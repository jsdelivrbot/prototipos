l = names = ['Ever', 'Uriel', 'Garcia']
counter = -5
while counter < len(l):
    print('counter is currently: ', counter)
    counter += 1
    if counter == 2:
        print('counter equals', counter)
        break
    else: 
        print('continueing...')
        continue
        # else is not really needed
else:
    print('finished')


# breack and continue