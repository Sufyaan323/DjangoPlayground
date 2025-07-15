from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('zendev/', include('zendev.urls')),
    path('calculator', include('calculator.urls')),
]
