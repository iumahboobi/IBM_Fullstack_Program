from django.shortcuts import render
from datetime import date
# Create your views here.
from django.http import HttpResponse

def index(request):
    # Create a simple html page as a string

    template = "<html>" \
                "This is your first view. Oh really" \
               "</html>"
    
    #Return the template as a content arguement in HTTP response
    return HttpResponse(template)

# View for today'S date

def get_date(request):
    today = date.today()
    template = f"<html>Today's date is {today}</html>"
    return HttpResponse(template)