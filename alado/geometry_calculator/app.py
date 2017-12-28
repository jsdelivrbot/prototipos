import sys
import os
from flask import Flask, render_template, request, json
from calculations.circle import Circle

print('kkkk')

app = Flask(__name__, static_url_path='/static')
@app.route('/')
def index():
    # return 'Welcome to Flask'
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    print(621, file=sys.stderr)
    
    shape = request.form['shape']
    print(shape, file=sys.stderr)
    formula = request.form['formula']
    print(formula, file=sys.stderr)
    needed_values = request.form['needed_values']
    print(needed_values, file=sys.stderr)
    
    array_tthi = needed_values.split(',')
    print(array_tthi, file=sys.stderr)
    
    # counter = 0
    # d = {}
    # for element in array_tthi:
    #     counter++
    #     if counter == 2
    #         lista = []
    #         lista.append(element)
    #         d[formula] = lista



        # print(element, file=sys.stderr)

        # print(element, file=sys.stderr)
        # for (num1, num2) in array_tthi:
        #     print(num1, num2, file=sys.stderr)


    enc_str = { 
        'shape': shape, 
        'formula': formula,
        'needed_values': needed_values
    }
    return json.dumps(enc_str)

print('lop')
radius = 4
area = 4
circle = Circle(radius, area)

print(circle.area())
print(circle.circumference())
print(circle.diameter())
print(circle.radius())

if __name__ == '__main__':    
    app.run()
