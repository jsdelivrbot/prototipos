import math

class Parallelogram(object):
    def __init__(self, base=0, height=0, area=0, side=0, perimeter=0):
        self._base = base 
        self._height = height 
        self._area = area 
        self._side = side
        self._perimeter = perimeter

    def area(self):
        result = self._base * self._height
        return result

    def base(self):
        result = self._area / self._height
        return result

    def height(self):
        result = self._area / self._base
        return result
    
    def perimeter(self):
        result = 2 * (self._side + self._base)
        return result
        
    def side(self):
        result = self._perimeter / 2 - self._base
        return result

octagon = Parallelogram(base=2, height=3, area=4, side=5, perimeter=6)

print(octagon.area())
print(octagon.base())
print(octagon.height())
print(octagon.perimeter())
print(octagon.side())