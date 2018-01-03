import math

class Equilateral_triangle(object):
    def __init__(self, side=0):
        self._side = side

    def area(self):
        result = (math.sqrt(3) / 4) * (self._side**2)
        return result

    def perimeter(self):
        result = 3 * self._side
        return result

# equilateral_triangle = Equilateral_triangle(side = 2)

# area = equilateral_triangle.area()
# perimeter = equilateral_triangle.perimeter()

# print(area)
# print(perimeter)