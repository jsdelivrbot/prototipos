# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2018-03-16 21:42
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restapp', '0004_auto_20180316_1438'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='image',
            field=models.ImageField(default='Images/None/No-img.jpg', upload_to='Image/'),
        ),
    ]