# Generated by Django 2.2.2 on 2019-09-27 14:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dashboards', '0032_auto_20190925_0951'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='dashboard',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='images', to='dashboards.Dashboard'),
        ),
    ]