import os
from flask import Flask, render_template, request, json
from calculations.circle import Circle

app = Flask(__name__, static_url_path='/static')
@app.route('/')
def index():
    # return 'Welcome to Flask'
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    # user = request.POST['firstname']
    name = request.form['name']
    age = request.form['age']

    enc_str = { 
        'status':621, 
        'name':name, 
        'age': age 
    }
    return json.dumps(enc_str)


radius = 4
area = 4
circle = Circle(radius, area)

print(circle.area())
print(circle.circumference())
print(circle.diameter())
print(circle.radius())

if __name__ == '__main__':    
    app.run()
