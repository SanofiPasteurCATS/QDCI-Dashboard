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

DASHBOARD_TYPE_CHOICES = [
    (0, 'QDCI Dashboard')
]

LEVEL_CHOICES = [
    (0,"Level 1"),
    (1,"Level 2"),
    (2,"Level 3"),
    (3,"Level 4")
]

FREQUENCY_CHOICES = [
    (0, "Monthly"),
    (1, "Weekly"),
    (2, "Bi-Weekly")
]

class Dashboard(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=26)
    background = models.CharField(max_length=7)
    dashboard_type = models.IntegerField(default=0)
    level = models.IntegerField(default=1)
    owner = models.ForeignKey(User, related_name="dashboards", on_delete = models.CASCADE,
    null=True)

class Kpi(models.Model):
    name = models.CharField(max_length=26)
    pillar = models.CharField(max_length=1,choices=PILLAR_CHOICES)
    danger = models.FloatField()
    safe = models.FloatField()
    frequency = models.IntegerField(choices=FREQUENCY_CHOICES)
    dashboard = models.ForeignKey(Dashboard,related_name='kpis',on_delete=models.CASCADE)

class Series(models.Model):
    name = models.CharField(max_length=26)
    plot_type = models.CharField(max_length=2, choices=PLOT_TYPE_CHOICES)
    color = models.CharField(max_length=7)
    kpi = models.ForeignKey(Kpi, on_delete=models.CASCADE, related_name="series")

class Datapoint(models.Model):
    target = models.FloatField(null=True)
    value = models.FloatField(null=True)
    date = models.DateField(default=None, null=True)
    series = models.ForeignKey(Series, on_delete=models.CASCADE, related_name="entries")



