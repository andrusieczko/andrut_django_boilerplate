from django.shortcuts import render_to_response, redirect
from apps.frontend.models import Address, Person
from django.http.response import HttpResponse
from django.core import serializers

def app(request):
    return render_to_response('base.html')

def createExample(request):
    Address.objects.all().delete()
    address = Address.objects.create(postal_code='20-383', city="nyc", region="ny")

    Person.objects.all().delete()
    Person.objects.create(name="Karol", age=26, address = address)

    return HttpResponse("created")

def example(request):
    json = serializers.serialize('json', Person.objects.all(), relations=('address',))
    return HttpResponse(json, mimetype="application/json")

def vendorFiles(request, path):
    return redirect('/static/js/vendor' + path)