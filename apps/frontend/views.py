from django.shortcuts import redirect, render_to_response
    
def app(request):
    return render_to_response('base.html')