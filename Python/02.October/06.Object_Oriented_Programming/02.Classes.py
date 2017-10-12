class Sample(object):
    pass

x = Sample()

print(type(x)) # int


class Dog(object):
    # Class Object Attribute
    species = 'mammal' # class object attribute (always before __init__)

    def __init__(self, breed, name, fur = True):
        self.breed = breed
        self.name = name
        self.fur = fur

sam = Dog(breed = 'Chihuahua', name = 'Choco')

print(sam.breed)
print(sam.species)
