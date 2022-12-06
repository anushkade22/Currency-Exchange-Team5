from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):
    return render(request,'currency/index.html')

def exchange(request):
    return render(request,'currency/exchange.html')

def graphp(request):
    return render(request,'currency/graph.html')    
