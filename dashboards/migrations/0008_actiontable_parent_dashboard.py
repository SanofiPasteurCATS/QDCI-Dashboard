# Generated by Django 2.2.2 on 2019-08-08 15:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dashboards', '0007_auto_20190807_1005'),
    ]

    operations = [
        migrations.AddField(
            model_name='actiontable',
            name='parent_dashboard',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='childTables', to='dashboards.Dashboard'),
        ),
    ]
