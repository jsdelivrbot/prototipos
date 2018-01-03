import sys
import math

class Ellipse (object):

    def __init__(self, axis_a = 0, axis_b = 0, area=0):
        self._axis_a = axis_a
        self._axis_b = axis_b
        self._area = area

    def area(self):
        result = math.pi * self._axis_a * self._axis_b
        return result
    
    def axis_a(self):
        result = math.pi * self._axis_b
        result = self._area / result
        return result

    def axis_b(self):
        result = math.pi * self._axis_a
        result = self._area / result
        return result

    def circumference(self):
        result = math.pi * ( 3*(self._axis_a + self._axis_b) - math.sqrt( (3 * self._axis_a + self._axis_b) * (self._axis_a + 3 * self._axis_b) ) )
        return result

# ellipse = Ellipse(axis_a = 3, axis_b = 2, area=5)

# area = ellipse.area()
# axis_a = ellipse.axis_a()
# axis_b = ellipse.axis_b()
# circumference = ellipse.circumference()

# print('area: ', area)
# print('axis_a: ', axis_a)
# print('axis_b: ', axis_b)
# print('circumference: ', circumference)