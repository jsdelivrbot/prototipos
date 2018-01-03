import math

class Isosceles_triangle(object):
    def __init__(self, height=0, base=0, area=0, side_a=0, side_c=0, gamma=0):
        self._height = height
        self._base = base
        self._area = area
        self._side_a = side_a
        self._side_c = side_c
        self._gamma = gamma

    def area(self):
        result = self._height * self._base / 2
        return result

    def base(self):
        result = 2 * self._area / self._height
        return result

    def height(self):
        result = 2 * self._area / self._base
        return result

    def perimeter(self):
        result = self._side_a + self._base + self._side_c
        return result

    def side(self):
        result = 2 * self._area  / (self._base * math.sin(math.radians(self._gamma)))
        return result

isosceles_triangle = Isosceles_triangle(height=3, base=4, area=5, side_a=6, side_c=7, gamma=8)

print(isosceles_triangle.area())
print(isosceles_triangle.base())
print(isosceles_triangle.height())
print(isosceles_triangle.perimeter())
print(isosceles_triangle.side())

