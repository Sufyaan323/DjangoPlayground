from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

def index(request):
    default = loader.get_template('default.html')
    return HttpResponse(default.render())
