# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2018-05-09 07:53
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Database', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Record',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('userid', models.IntegerField(verbose_name=10)),
                ('courseid', models.IntegerField(verbose_name=10)),
            ],
        ),
        migrations.AddField(
            model_name='course',
            name='classname',
            field=models.CharField(default='course class', max_length=200),
        ),
        migrations.AddField(
            model_name='course',
            name='coursename',
            field=models.CharField(default='course name', max_length=200),
        ),
    ]
