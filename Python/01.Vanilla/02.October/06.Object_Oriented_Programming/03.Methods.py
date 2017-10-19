class Circle(object):
    #class object attribute
    pi = 3.14

    def __init__(self, radius = 1):
        self.radius = radius
    def area(self):
        # the radius square multiply by pi
        return (self.radius**2) * Circle.pi
    def set_radius(self, new_radius):
        self.radius = new_radius
    def get_radius(self):
        return self.radius

c = Circle()
print(c.pi)
print(c.radius)
c = Circle(radius = 100)
print(c.radius)
c.area()
c.set_radius(50)
print(c.radius)



