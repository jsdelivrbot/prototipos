from django.conf.urls import url
from users_app import views

urlpatterns = [
    url(r'^$', views.user, name='user')
]