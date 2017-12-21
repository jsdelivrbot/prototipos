import sys
import math
# print(sys.argv[1])

class Circle (object):
    pi = math.pi
    def __init__(self, radius = 0, area = 1):
        self._radius = radius
        self._area = area
    
    def area(self):
        area = self.pi * self._radius**2
        return area
    
    def circumference(self):
        circumference = 2 * self.pi * self._radius
        return circumference

    def diameter(self):
        diameter = 2 * self._radius
        return diameter

    def radius(self):
        radius = self._area / self.pi
        radius = math.sqrt(radius)
        return radius

# radius = sys.argv[1]
# # area = sys.argv[1]
# radius = float(radius)
# # radius = float(radius)
# radius = Circle(radius, radius)
# print(radius.area())
# print(radius.circumference())
# print(radius.diameter())
# print(radius.radius())