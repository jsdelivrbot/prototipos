:: conda create --name myDjangoEnv django

or more specific
:: conda create --name myDjangoEnv python=3.5

to activateor deactivate
:: activate myDjangoEnv
:: deactivate myDjangoEnv

all my envorments
:: conda info --envs

install django for the virtual envorment
:: conda install django

for normal (non conda) python distibution
:: pip install django

new folder my_django_stuff
my_django_stuff> :: activate (name of enviroment optional)
:: django-admin startproject first_project621
my_django_stuff>first_project621>:: python manage.py runserver

to crate a django app within a django project
my_django_stuff>first_project621>:: python manage.py startapp first_app621 





