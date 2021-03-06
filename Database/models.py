# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class User(models.Model):
    name = models.CharField(max_length=20)

class Course(models.Model):
    classid = models.IntegerField(10)
    classname = models.CharField(max_length = 200, default = 'course class')
    coursename = models.CharField(max_length = 200, default = 'course name')

class Record(models.Model):
    userid = models.IntegerField(10)
    courseid = models.IntegerField(10)

