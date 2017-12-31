from django.db import models
from django.core.exceptions import ValidationError
from django.core.validators import RegexValidator


# Create your models here.
class Clients_info(models.Model):
    full_name = models.CharField(max_length=20)
    phone_number = models.IntegerField(unique=True, validators=[RegexValidator(regex='^\d{10}$', message='Length has to be 10', code='Invalid number')])
    email = models.EmailField(max_length=20, unique=True)
    message = models.CharField(max_length=500, unique=True)