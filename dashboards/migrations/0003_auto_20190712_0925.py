# Generated by Django 2.2.2 on 2019-07-12 13:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboards', '0002_auto_20190709_1120'),
    ]

    operations = [
        migrations.RenameField(
            model_name='dashboard',
            old_name='primary_color',
            new_name='background',
        ),
        migrations.AddField(
            model_name='dashboard',
            name='dashboard_type',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='dashboard',
            name='level',
            field=models.IntegerField(default=1),
        ),
    ]
