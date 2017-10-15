# 10/14/2017 9:00PM PST
import math
class Line (object):
    
    def __init__(self, coordinates_1 = (0, 0), coordinates_2 = (0, 0)):
        self.x1 = coordinates_1[0]
        self.y1 = coordinates_1[1]
        self.x2 = coordinates_2[0]
        self.y2 = coordinates_2[1]

    def distance(self):
        distance = (self.x2 - self.x1)**2 + (self.y2 - self.y1)**2
        distance = math.sqrt(distance)
        return distance
    
    def slope(self):
        slope = (self.y2 - self.y1) / (self.x2 - self.x1)
        return slope

coordinate1 = (3, 2)
coordinate2 = (8, 10)

line_1 = Line(coordinate1, coordinate2)

print(line_1.distance())
print(line_1.slope())


class Cylander(object):

    pi = 3.14

    def __init__(self, height = 1, radius = 1):
        self.height = height
        self.radius = radius

    def volume(self):
        volume = self.pi * self.radius**2 * self.height
        return volume

    def surface_area(self):
        area = (2 * self.pi * self.radius * self.height) + (2 * self.pi * self.radius**2)
        return area

height = 2
radius = 3
c = Cylander(height, radius)
print(c.volume())
print(c.surface_area())