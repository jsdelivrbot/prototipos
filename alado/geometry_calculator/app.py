import sys
import os
from flask import Flask, render_template, request, json

from calculations.circle import Circle
from calculations.cone import Cone
from calculations.cube import Cube
from calculations.cylinder import Cylinder
from calculations.parallelogram import Parallelogram

app = Flask(__name__, static_url_path='/static')
@app.route('/')
def index():
    # return 'Welcome to Flask'
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    shape = request.form['shape']
    print('Chosen Shape: ', shape, file=sys.stderr)
    
    # print(shape, file=sys.stderr)
    formula = request.form['formula']
    print('Chosen formula: ', formula, file=sys.stderr)
    # print(needed_values, file=sys.stderr)
    
    needed_values = request.form['needed_values']    
    data = needed_values.split(',')
    data = [(data[2*i], int(data[2*i+1])) for i in range(len(data)//2)]
    # print('Inputs: ', data, file=sys.stderr)
    pairs = {}
    for pair in data:
        pairs[pair[0]] = pair[1]

    print('Inputs: ', pairs, file=sys.stderr)
    result = find(shape, formula, pairs)
    print('Inputs: ', pairs, file=sys.stderr)

    
    # enc_str = { 
    #     'shape': shape, 
    #     'formula': formula,
    #     'needed_values': needed_values
    # }
    return json.dumps(result)

def circle(formula, pairs):
    result = None
    if formula == 'area':
        circle = Circle(pairs['radius'])
        result = circle.area()
    elif formula == 'circumference':
        circle = Circle(pairs['radius'])
        result = circle.circumference()
    elif formula == 'diameter':
        circle = Circle(pairs['radius'])
        result = circle.diameter()
    elif formula == 'radius':
        circle = Circle(None, pairs['area'])
        result = circle.radius()
    return round(result, 3)

def cone(formula, pairs):
    result = None
    if formula == 'base_area':
        cone = Cone(pairs['radius'])
        result = cone.base_area()
    elif formula == 'height':
        cone = Cone(pairs['radius'], pairs['surface_area'])
        result = cone.height()
    elif formula == 'lateral_surface':
        cone = Cone(pairs['radius'], None, pairs['height'])
        result = cone.lateral_surface()
    elif formula == 'radius':
        cone = Cone(None, pairs['surface_area'], pairs['height'])
        result = cone.radius()
    elif formula == 'slant_height':
        cone = Cone(pairs['radius'], None, pairs['height'])
        result = cone.slant_height()
    elif formula == 'surface_area':
        cone = Cone(pairs['radius'], None, pairs['height'])
        result = cone.surface_area()
    elif formula == 'volume':
        cone = Cone(pairs['radius'], None, pairs['height'])
        result = cone.volume()
    return round(result, 3)

def cube(formula, pairs):
    result = None
    if formula == 'diagonal':
        cube = Cube(pairs['edge'])
        result = cube.diagonal()
    elif formula == 'edge':
        cube = Cube(None, pairs['surface_area'])
        result = cube.edge()
    elif formula == 'surface_area':
        cube = Cube(pairs['edge'])
        result = cube.surface_area()
    elif formula == 'volume':
        cube = Cube(pairs['edge'])
        result = cube.volume()
    
    return round(result, 3)

def cylinder(formula, pairs):
    result = None
    if formula == 'base_area':
        cylinder = Cylinder(pairs['radius'])
        result = cylinder.base_area()
    elif formula == 'height':
        cylinder = Cylinder(pairs['radius'], pairs['area'])
        result = cylinder.height()
    elif formula == 'lateral_surface':
        cylinder = Cylinder(pairs['radius'], None, pairs['height'])
        result = cylinder.lateral_surface()
    elif formula == 'radius':
        cylinder = Cylinder(None, None, pairs['height'], pairs['surface_area'])
        result = cylinder.radius()
    elif formula == 'surface_area':
        cylinder = Cylinder(pairs['radius'], None, pairs['height'])
        result = cylinder.surface_area()
    elif formula == 'volume':
        cylinder = Cylinder(pairs['radius'], None, pairs['height'])
        result = cylinder.volume()
        
    return round(result, 3)




def parallelogram(formula, pairs):
    result = None
    if formula == 'area':
        parallelogram = Parallelogram(base=2, height=3, area=4, side=5, perimeter=6)
        result = parallelogram.area()
    elif formula == 'base':
        cparallelogram = Parallelogram(base=2, height=3, area=4, side=5, perimeter=6)
        result = parallelogram.base()
    elif formula == 'height':
        parallelogram = Parallelogram(base=2, height=3, area=4, side=5, perimeter=6)
        result = parallelogram.height()
    elif formula == 'perimeter':
        parallelogram = Parallelogram(base=2, height=3, area=4, side=5, perimeter=6)
        result = parallelogram.perimeter()
    elif formula == 'side':
        parallelogram = Parallelogram(base=2, height=3, area=4, side=5, perimeter=6)
        result = parallelogram.side()

    return round(result, 3)

def find(shape, formula, pairs):
    result = None
    if shape == 'circle':     
        result = circle(formula, pairs)
    elif shape == 'cone':
        result = cone(formula, pairs)
    elif shape == 'cube':
        result = cube(formula, pairs)
    elif shape == 'cylinder':
        result = cylinder(formula, pairs)
    elif shape == 'ellipse':
        result = ellipse(formula, pairs)
    elif shape == 'equilateral_triangle':
        result = equilateral_triangle(formula, pairs)
    elif shape == 'heptagon':
        result = heptagon(formula, pairs)
    elif shape == 'hexagon':
        result = hexagon(formula, pairs)
    elif shape == 'isosceles_triangle':
        result = isosceles_triangle(formula, pairs)
    elif shape == 'octagon':
        result = octagon(formula, pairs)
    elif shape == 'octahedron':
        result = octahedron(formula, pairs)
    elif shape == 'parallelogram':
        result = parallelogram(formula, pairs)    
    return result


if __name__ == '__main__':    
    app.run()
