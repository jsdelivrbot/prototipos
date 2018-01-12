from django import forms
from rosario_construction_app.models import Clients_info

class NewUserForm(forms.ModelForm):
    class Meta:
        model = Clients_info

        # all attributes
        fields = '__all__'