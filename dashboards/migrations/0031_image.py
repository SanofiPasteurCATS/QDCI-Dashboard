# Generated by Django 2.2.2 on 2019-09-23 16:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dashboards', '0030_auto_20190923_0946'),
    ]

    operations = [
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(default='default.png', upload_to='')),
                ('Dashboard', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='dashboards.Dashboard')),
            ],
        ),
    ]
