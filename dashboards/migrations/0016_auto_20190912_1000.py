# Generated by Django 2.2.2 on 2019-09-12 14:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboards', '0015_auto_20190909_1431'),
    ]

    operations = [
        migrations.AlterField(
            model_name='kpi',
            name='threshold_type',
            field=models.IntegerField(choices=[(0, 'Greater Than'), (1, 'Less Than')], default=0),
        ),
    ]
