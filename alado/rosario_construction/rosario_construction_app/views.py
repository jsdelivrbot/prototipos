from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'rosario_construction_app/index.html')
