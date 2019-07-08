from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render

# Renders template index.html
def index(request):
    return render(request, 'frontend/index.html')