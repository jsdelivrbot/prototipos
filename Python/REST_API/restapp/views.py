from django.shortcuts import render
from rest_framework import viewsets
from restapp.serializers import TaskSerializers
from restapp.models import Task
from rest_framework import filters
# Create your views here.

class TaskViewSet(viewsets.ModelViewSet):
    # replaced by filters
    queryset = Task.objects.all().order_by('date_created')
    # queryset = Task.objects.all()
    serializer_class = TaskSerializers

    # filter_backends = (filters.DjangoFilterBackend, filters.OrderingFilter)
    # filter_fields = ('completed', )
    # ordering = ('date_created',)

# replaced by filters
class DueTaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.order_by('date_created').filter(completed=False)
    serializer_class = TaskSerializers

class CompletedTaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.order_by('date_created').filter(completed=True)
    serializer_class = TaskSerializers

