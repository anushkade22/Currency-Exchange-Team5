from django.urls import path
from . import views

urlpatterns = [
    path('', views.home,name='Home-page'),
    path('exchange/',views.exchange,name='Exchange-rate'),
    path('graph/',views.graphp,name='Graph')
]