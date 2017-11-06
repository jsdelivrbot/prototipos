from django.shortcuts import render
from rosario_form_app import form  # same as from . import forms
# Create your views here.

def index(request):
    return render(request, 'rosario_form_app/index.html')

def form_view(request):
    formz = form.FormName()
    if request.method == 'POST':
        formz = form.FormName(request.POST)
        if formz.is_valid():
            print('Name: '+formz.cleaned_data['name'])
            print('Email: '+formz.cleaned_data['email'])
            print('Password: '+formz.cleaned_data['password'])
            print('Text: '+formz.cleaned_data['text'])
            
    return render(request,'rosario_form_app/form.html',{'form':formz})

