import sys
import math

class Cylinder (object):

    def __init__(self, radius = 0, area = 0, height=0, surface_area=0):
        self._radius = radius
        self._area = area
        self._height = height
        self._surface_area = surface_area

    def base_area(self):
        result = self._radius**2
        result = math.pi * result
        return result
    
    def height(self):
        result = 2 * math.pi * self._radius
        result = self._area / result
        result = result -self._radius
        return result

    def lateral_surface(self):
        result = 2 * math.pi * self._radius * self._height
        return result

    def radius(self):
        result = self._surface_area / math.pi
        result = 2 * result
        result = self._height**2 + result
        result = math.sqrt(result) 
        result = 1/2 * result- self._height / 2
        return result
    
    def surface_area(self):
        result = 2 * math.pi * self._radius * self._height + 2 * math.pi * self._radius**2
        return result

    def volume(self):
        result = math.pi * self._radius**2 * self._height
        return result

# cylinder = Cylinder(radius = 3, area = 5, height=10, surface_area=7)

# base_area = cylinder.base_area()
# height = cylinder.height()
# lateral_surface = cylinder.lateral_surface()
# radius = cylinder.radius()
# surface_area = cylinder.surface_area()
# volume = cylinder.volume()

# print('base_area: ', base_area)
# print('height: ', height)
# print('lateral_surface: ', lateral_surface)
# print('radius: ', radius)
# print('surface_area: ', surface_area)
# print('volume: ', volume)