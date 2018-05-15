from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
from Database.models import *
import requests, re

url = 'https://www.baidu.com/s'
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.87 Safari/537.36'}
r = re.compile('<h3[\s\S]*?<a[^>]*?href[^>]*?"(.*?)"[^>]*?>(.*?)</a>')

def home(request):
    context = {}
    return HttpResponse(json.dumps(context))

@csrf_exempt
def add_record(request):
    context = {"msg":"success", "code":0}
    userid = request.GET.get("userid")
    courseid = request.GET.get("courseid")
    print userid,courseid
    case = Record(userid = userid, courseid = courseid)
    case.save()
    return HttpResponse(json.dumps(context))

@csrf_exempt
def record_return(request):
    context = {}
    for record in Record.objects.all():
        if record.userid == 1:
            context.setdefault(str(record.userid),[]).append(record.courseid)
            print 'me'
        else:
            context.setdefault(str(record.userid),[]).append(record.courseid)
            print 'user'
    return HttpResponse(json.dumps(context))


@csrf_exempt
def keyword_search(request):
    context = {}
    keyword = request.GET.get("keyword")
    for i, result in enumerate(baidu_search(keyword)):
        if 30 < i: break
        print('%s: %s'%result)
        context[i] = result
    return HttpResponse(json.dumps(context))


def baidu_search(keyword):
    params = {'wd': keyword, 'pn': 0, 'ie': 'utf-8'}
    try:
        while 1:
            for i in r.findall(requests.get(url, params, headers = headers).content):
                yield (re.compile('<.*?>').sub('', i[1]).decode('utf8'), i[0])
            params['pn'] += 10
    except GeneratorExit:
        pass
    except:
        while 1: yield ('', '')

