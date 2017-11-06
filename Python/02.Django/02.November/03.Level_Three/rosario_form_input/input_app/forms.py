from django import forms
from input_app.models import Users

class NewUserForm(forms.ModelForm):
    class Meta:
        model = Users

        # all attributes
        fields = '__all__'