# Generated by Django 2.2.2 on 2019-08-12 19:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dashboards', '0008_actiontable_parent_dashboard'),
    ]

    operations = [
        migrations.AddField(
            model_name='action',
            name='source',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='native_actions', to='dashboards.ActionTable'),
        ),
    ]