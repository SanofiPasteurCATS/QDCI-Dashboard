from django.db import models
from django.contrib.auth.models import User
from datetime import date

# Choices for pillar field for kpis
PILLAR_CHOICES = [
    ('+','Safety'),
    ('Q','Quality'),
    ('D','Delivery'),
    ('C','Cost'),
    ('I','Involvement')
]
# Choices for plot-type field for series
PLOT_TYPE_CHOICES = [
    ('li', 'Connected Scatter Plot'),
]

class Dashboard(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=26)
    primary_color = models.CharField(max_length=7)
    owner = models.ForeignKey(User, related_name="dashboards", on_delete = models.CASCADE,
    null=True)

class Kpi(models.Model):
    name = models.CharField(max_length=26)
    pillar = models.CharField(max_length=1,choices=PILLAR_CHOICES)
    danger = models.FloatField()
    safe = models.FloatField()
    frequency = models.IntegerField()
    dashboard = models.ForeignKey(Dashboard,related_name='kpis',on_delete=models.CASCADE)

class Series(models.Model):
    name = models.CharField(max_length=26)
    plot_type = models.CharField(max_length=2, choices=PLOT_TYPE_CHOICES)
    color = models.CharField(max_length=7)
    kpi = models.ForeignKey(Kpi, on_delete=models.CASCADE, related_name="series")

class Datapoint(models.Model):
    target = models.FloatField()
    value = models.FloatField()
    series = models.ForeignKey(Series, on_delete=models.CASCADE, related_name="entries")



