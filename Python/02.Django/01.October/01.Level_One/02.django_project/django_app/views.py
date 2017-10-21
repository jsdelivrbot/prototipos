from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    index = {'home': 'Hello You are on root'}
    return render(request, 'index.html', context=index)
    
def _help(request):
    _help = {'help': 'Hello You are on help extension'}
    return render(request, 'django_app/help.html', context=_help)
