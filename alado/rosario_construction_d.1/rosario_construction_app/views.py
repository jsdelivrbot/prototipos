from django.shortcuts import render
from rosario_construction_app.forms import NewUserForm

from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponseRedirect, HttpResponse
from django.core.urlresolvers import reverse
from django.contrib.auth.decorators import login_required

# Create your views here.
def index(request):
    div = {'help':'help me'}
    return render(request, 'rosario_construction_app/index.html', context=div)

def login(request):
    return render(request, 'rosario_construction_app/login.html')

def user_login(request):
    if request.method == 'POST':
        username = request.POST.get('email')
        password = request.POST.get('password')

        user = authenticate(username=username, password=password)

        if user:
            if user.is_active:
                login(request, user)
                return HttpResponseRedirect(reverse('index'))
            
            else:
                return HttpResponse('ACCOUNT NOT ACTIVE')
        
        else:
            print('SOME ONE TRY TO LOGIN AND FAIL')
            print('Username: {} and password {}'.format(username, password))
            return HttpResponse('Invalid details supplied')

    else:
        return render(request, 'rosario_construction_app/views.html')