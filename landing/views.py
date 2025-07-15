from django.shortcuts import render
from django.apps import apps

def index(request):
    activeApps = ['zendev', 'calculator']
    appsInfo = []

    for info in activeApps:
        appConfig = apps.get_app_config(info)
        appsInfo.append({
            'name': appConfig.verbose_name,
            'label':appConfig.label,
        })

    return render(request, 'dashboard.html', {'appsInfo':appsInfo})