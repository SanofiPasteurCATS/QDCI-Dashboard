# Generated by Django 2.2.2 on 2019-08-14 12:41

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('dashboards', '0009_action_source'),
    ]

    operations = [
        migrations.AddField(
            model_name='action',
            name='date_created',
            field=models.DateField(default=django.utils.timezone.now),
        ),
    ]
