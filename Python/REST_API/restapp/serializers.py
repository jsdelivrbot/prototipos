from restapp.models import Task
from rest_framework import serializers

class TaskSerializers(serializers.ModelSerializer):
    class Meta:
        image = serializers.ImageField(max_length=None, use_url=True)
        model = Task
        fields = ('id', 'task_name', 'task_desc', 'completed', 'date_created', 'image')