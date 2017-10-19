class Animal(object):
    def __init__(self):
        print("Animal created")
    def who_am_i(self):
        print ('Animal')

    def eat(self):
        print ('eating')

class Dog(Animal):
    def __init__(self):
        Animal.__init__(self)
        print('Dog created')
    def who_am_i(self):
        print('Dog')
    def bark(self):
        print('woof')

d = Dog()
print(d)