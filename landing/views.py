from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

def index(request):
    dashboard = loader.get_template('dashboard.html')
    return HttpResponse(dashboard.render())
