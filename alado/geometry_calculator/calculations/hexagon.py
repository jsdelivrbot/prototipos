import math

class Hexagon(object):
    def __init__(self, side=0, area=0):
        self._side = side
        self._area = area

    def area(self):
        result = 3 * math.sqrt(3) / 2 * self._side**2
        return result

    def perimeter(self):
        result = 6 * self._side
        return result

    def side(self):
        result = self._area * 2 / (3 * math.sqrt(3))
        result = math.sqrt(result)
        return result

# hexagon = Hexagon(side=2, area=3)

# area = hexagon.area()
# perimeter = hexagon.perimeter()
# side = hexagon.side()

# print(area)
# print(perimeter)
# print(side)