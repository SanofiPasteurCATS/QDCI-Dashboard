# Generated by Django 2.2.2 on 2019-09-17 13:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboards', '0020_kpi_leader'),
    ]

    operations = [
        migrations.CreateModel(
            name='Audit',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(max_length=50, null=True)),
                ('date', models.DateField(default=None, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Win',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(max_length=50, null=True)),
                ('participants', models.CharField(max_length=50, null=True)),
                ('date', models.CharField(max_length=50, null=True)),
            ],
        ),
    ]
