# Generated by Django 2.2.2 on 2019-09-18 13:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboards', '0022_kpi_unit'),
    ]

    operations = [
        migrations.AddField(
            model_name='kpi',
            name='isPercentage',
            field=models.BooleanField(default=True),
        ),
    ]
