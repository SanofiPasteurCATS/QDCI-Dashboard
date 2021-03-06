# Generated by Django 2.2.2 on 2019-08-06 14:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dashboards', '0004_auto_20190802_1323'),
    ]

    operations = [
        migrations.CreateModel(
            name='ActionTable',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=26)),
                ('parent', models.IntegerField()),
                ('dashboard', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='actionTables', to='dashboards.Dashboard')),
            ],
        ),
        migrations.CreateModel(
            name='Action',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('letter', models.CharField(choices=[('+', 'Safety'), ('Q', 'Quality'), ('D', 'Delivery'), ('C', 'Cost'), ('I', 'Involvement')], max_length=1)),
                ('problem', models.CharField(max_length=50)),
                ('root_cause', models.CharField(max_length=50)),
                ('solution', models.CharField(max_length=50)),
                ('leader', models.CharField(max_length=50)),
                ('date', models.DateField(default=None, null=True)),
                ('tables', models.ManyToManyField(related_name='actions', to='dashboards.ActionTable')),
            ],
        ),
    ]
