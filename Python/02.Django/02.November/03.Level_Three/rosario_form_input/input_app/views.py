from django.shortcuts import render
from input_app.forms import NewUserForm

# Create your views here.

def index(request):
    # index = {'message': 'Hello and Welcome '}
    # return render(request, 'input_app/index.html', context=index)
    return render(request, 'input_app/index.html')
    

def users(request):

    form = NewUserForm()
    if request.method == 'POST':
        form = NewUserForm(request.POST)

        if form.is_valid():
            form.save(commit=True)
            return index(request)
        else:
            print('ERROR FROM INVALID')

    return render(request, 'input_app/views/users.html', {'form': form})
