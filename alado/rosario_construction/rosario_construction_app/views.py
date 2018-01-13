from django.shortcuts import render
from django.http import HttpResponse
import json
import sqlite3
from django.views.decorators.csrf import csrf_exempt
from rosario_construction_app.models import Clients_info

# Create your views here.
def index(request):
    return render(request, 'rosario_construction_app/index.html')

def login(request):
    return render(request, 'rosario_construction_app/login.html')

@csrf_exempt
def post(request):
    if request.method == 'POST':
        name = request.POST['name']
        phone = int(request.POST['phone'])
        email = request.POST['email']
        message = request.POST['message']

        # clients_info = Clients_info(full_name=name, phone_number=phone, email=email, message=message)
        # clients_info.save()

        return HttpResponse('621')

def contacts(request):
    return render(request, 'rosario_construction_app/contacts.html')
        