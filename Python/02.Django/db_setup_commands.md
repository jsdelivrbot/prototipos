After making models run this to register sql to django app
01.first_project> :: python manage.py migrate
01.first_project> :: python manage.py makemigrations first_app
01.first_project> :: python manage.py migrate

test with
01.first_project> :: python manage.py shell
01.first_project> >>> from first_app.model import {Class Name}
print({Class Name}.objects.all())

for db user interface create a super user with
01.first_project> :: python manage.py createsuperuser

then run the server
01.first_project> :: python manage.py runserver

to fake data install
01.first_project> :: pip install Faker
