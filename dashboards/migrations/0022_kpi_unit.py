# Generated by Django 2.2.2 on 2019-09-17 19:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboards', '0021_audit_win'),
    ]

    operations = [
        migrations.AddField(
            model_name='kpi',
            name='unit',
            field=models.CharField(max_length=26, null=True),
        ),
    ]
