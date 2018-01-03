import math

class Octagon(object):
    def __init__(self,side_a=0, area=0):
        self._side_a = side_a
        self._area = area

    def area(self):
        result = 2 * (1 + math.sqrt(2)) * self._side_a**2
        return result

    def perimeter(self):
        result = 8 * self._side_a
        return result


    def side(self):
        result = math.sqrt((math.sqrt(2) - 1) * self._area / 2)
        return result

# octagon = Octagon(side_a=3, area=4)

# print(octagon.area())
# print(octagon.perimeter())
# print(octagon.side())