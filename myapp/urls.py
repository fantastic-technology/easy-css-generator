from django.urls import path
from . import views

urlpatterns = [
     path('', views.landingPage, name='my_landingPage'),
     path('/about', views.about, name='about'),
]
