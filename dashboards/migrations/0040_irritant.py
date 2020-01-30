# Generated by Django 2.2.2 on 2020-01-29 16:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dashboards', '0039_auto_20200124_1132'),
    ]

    operations = [
        migrations.CreateModel(
            name='Irritant',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(max_length=256, null=True)),
                ('date', models.CharField(max_length=50, null=True)),
                ('votes', models.IntegerField(default=0)),
                ('dashboard', models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='irritant', to='dashboards.Dashboard')),
            ],
        ),
    ]
