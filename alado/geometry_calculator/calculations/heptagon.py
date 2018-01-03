import math

class Heptagon(object):
    def __init__(self, side=0, area=0):
        self._side = side
        self._area = area

    def area(self):
        result = self._side**2 / math.tan(math.pi / 7)
        result = 7 / 4 * result
        return result

    def perimeter(self):
        result = 7 * self._side
        return result

    def side(self):
        result = math.tan(math.pi / 7) / 7
        result = math.sqrt(4 * self._area * result)
        return result

# heptagon = Heptagon(side = 2, area=3)

# area = heptagon.area()
# perimeter = heptagon.perimeter()
# side = heptagon.side()

# print(area)
# print(perimeter)
# print(side)