import os
from flask import Flask, render_template, request, json

app = Flask(__name__, static_url_path='/static')
@app.route('/')
def index():
    # return 'Welcome to Flask'
    return render_template('index.html')

@app.route('/lol')
def lol():
    return 'lol'


@app.route('/signUpUser', methods=['POST'])
def signUpUser():
    # user = request.POST['firstname']
    name = request.form['name']
    age = request.form['age']

    enc_str = { 
        'status':621, 
        'name':name, 
        'age': age 
    }
    return json.dumps(enc_str)

if __name__ == '__main__':    
    app.run()
