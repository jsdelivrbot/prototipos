from django.shortcuts import render
from django.views import generic
from homesapp.models import Location
from homesapp.models import Property
# Create your views here.


class IndexView(generic.ListView):
    template_name = 'homesapp/index.html'

    def get_queryset(self):
        return Location.objects.all()

class LocationView(generic.DetailView):
    model = Location
    template_name = 'homesapp/locationview.html'

class PropertyDetail(generic.DetailView):
    model = Property
    template_name= 'homesapp/propertyview.html'