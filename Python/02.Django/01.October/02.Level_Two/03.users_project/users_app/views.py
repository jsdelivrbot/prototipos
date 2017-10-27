from django.shortcuts import render

# Create your views here.

def index(request):
    index = {'message': 'Hello, Welcome!'}
    return render(request, 'users_app/index.html', context=index)

def user(request):
    users = {'insert': 'User Table'}
    return render(request, 'users_app/views/users.html', context=users)