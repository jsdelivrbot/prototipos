from django import forms
from django.core import validators

def check_for_e(value):
    if value[0].lower() != 'e':
        raise forms.ValidationError('Needs to start with a E')

class FormName(forms.Form):
    name = forms.CharField(validators=[check_for_e])
    email = forms.EmailField()
    password = forms.CharField(widget=forms.PasswordInput)
    password_vertify = forms.CharField(widget=forms.PasswordInput, label='Enter your password again621:')
    text = forms.CharField(widget=forms.Textarea)

    # wipes chosen inputs
    def clean(self):
        all_clean_data = super().clean()
        password = all_clean_data['name']
        password = all_clean_data['password']
        v_password = all_clean_data['password_vertify']

        if password != v_password:
            raise forms.ValidationError('Your Passowrds dont match')
    
    
    
    # botcatcher = forms.CharField(required=False, 
    #                                 widget=forms.HiddenInput, 
    #                                 validators=[validators.MaxLengthValidator(0)])

    # def clean_botcatcher(self):
    #     botcatcher = self.cleaned_data['botcatcher']
    #     if len(botcatcher) > 0:
    #         raise forms.ValidationError('Gotcha Bot')
    #     return botcatcher





