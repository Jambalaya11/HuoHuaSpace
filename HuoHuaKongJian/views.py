from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
from Database.models import *

def home(request):
    return render(request, 'index.html', {})

@csrf_exempt
def add_record(request):
    context = {"msg":"success", "code":0}
    userid = request.POST.get("userid","")
    courseid = request.POST.get("couseid","")
    case = Record(userid = userid, courseid = courseid)
    return HttpResponse(json.dumps(context))

