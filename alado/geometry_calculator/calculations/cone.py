import sys
import math

class Cone(object):
        
    def __init__(self, radius=0, surface_area=0, height=0):
        self._radius = radius
        self._surface_area = surface_area
        self._height = height

    def base_area(self):
        result = math.pi * self._radius**2
        return result

    def height(self):
        result = (self._surface_area / (math.pi*self._radius)-self._radius)
        result = result**2 
        result = result - self._radius**2 
        result = math.sqrt(result)
        return result

    def lateral_surface(self):
        result = self._height**2 + self._radius**2
        result = math.sqrt(result)
        result = math.pi * self._radius * result
        return result

    def radius(self):
        result = math.pi*self._height**2 + (2*self._surface_area)
        result = math.pi * result
        result = self._surface_area**2 / result
        result = math.sqrt(result)
        return result

    def slant_height(self):
        result = self._radius**2 + self._height**2
        result = math.sqrt(result)
        return result

    def surface_area(self):
        result = self._height**2 + self._radius**2
        result = math.sqrt(result)
        result = self._radius + result
        result = math.pi * self._radius * result
        return result

    def volume(self):
        result = math.pi * self._radius**2
        result = result*self._height / 3
        return result

# cone = Cone(radius=3, surface_area=300, height=10)
# base_area = cone.base_area()
# height = cone.height()
# lateral_surface = cone.lateral_surface()
# radius = cone.radius()
# slant_height = cone.slant_height()
# surface_area = cone.surface_area()
# volume = cone.volume()

# print('base_area: ', base_area)
# print('height: ', height)
# print('lateral_surface: ', lateral_surface)
# print('radius: ', radius)
# print('slant_height: ', slant_height)
# print('surface_area: ', surface_area)
# print('volume: ', volume)