from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'rosario_construction_app/index.html')

def login(request):
    return render(request, 'rosario_construction_app/login.html')

def post(self):
    if request.method == 'POST':
        risk_type = request.POST.get('risk_type')
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        age = request.POST.get('age')

        print(risk_type)
        print(risk_type)
        print(risk_type)
        print(risk_type)