from django.shortcuts import render
from users_app.models import Users
# Create your views here.

def index(request):
    index = {'message': 'Hello, Welcome!'}
    return render(request, 'users_app/index.html', context=index)

def user(request):
    users_list = Users.objects.order_by('first_name')
    users = {'insert': users_list}
    return render(request, 'users_app/views/users.html', context=users)