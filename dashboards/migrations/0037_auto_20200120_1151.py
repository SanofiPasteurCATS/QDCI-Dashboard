# Generated by Django 2.2.2 on 2020-01-20 16:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboards', '0036_auto_20191126_0955'),
    ]

    operations = [
        migrations.AlterField(
            model_name='series',
            name='plot_type',
            field=models.CharField(choices=[('li', 'line'), ('ar', 'area'), ('bar', 'bar'), ('sc', 'scatter')], max_length=2),
        ),
    ]
