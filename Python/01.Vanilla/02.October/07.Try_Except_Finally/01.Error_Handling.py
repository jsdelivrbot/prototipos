# try:
#     2 + 's'
# except:
#     print('There was a type error!')
# finally: #execeutes any code zfter exceptions
#     print('Finally this was printed')



# try:
#     f = open('Testfile', 'r')
#     f = write('test write this')
# except: # if error
#     print('Error in writing to this file')
# else:  # else no error
#     print('File print was a success')
# finally: #always executes
#     print('ALWAYS')

def askint():
    while True: 
        try:
            val = input('Please Enter an integer: ')
            val = int(val)
        except: # if error
            print('Thats not an integer')
            # continue # dont know why?
        else:  # else no error
            print('Thank you')
            break
        finally: #always executes
            print('Finally block executed')

        print(val)
askint()