from django.db import models
from django.contrib.auth.models import User
from datetime import date
from django.utils import timezone

# Choices for pillar field for kpis
PILLAR_CHOICES = [
    ('Plus','Safety'),
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

KPI_TYPE_CHOICES = [
    (0, "Deviation" ),
    (1, "Win-lose"),
    (2, "Threshold")
]

THRESHOLD_TYPE_CHOICES = [
    (0, "Greater Than"),
    (1, "Less Than"),
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
    name = models.CharField(max_length=256)
    pillar = models.CharField(max_length=5,choices=PILLAR_CHOICES)
    danger_deviation = models.FloatField(null=True)
    safe_deviation = models.FloatField(null=True)
    kpi_type = models.IntegerField(choices= KPI_TYPE_CHOICES, default=0)
    threshold_type = models.IntegerField(choices= THRESHOLD_TYPE_CHOICES, null= False, default=0)
    warning_margin = models.FloatField(null=True)
    frequency = models.IntegerField(choices=FREQUENCY_CHOICES)
    dashboard = models.ForeignKey(Dashboard,related_name='kpis',on_delete=models.CASCADE)
    global_target = models.FloatField(null=True, default=None)
    leader = models.CharField(max_length=256, null=True)
    unit = models.CharField(max_length=256, null=True, default=None)
    isPercentage = models.BooleanField(default= True)
    
class Series(models.Model):
    name = models.CharField(max_length=256)
    plot_type = models.CharField(max_length=2, choices=PLOT_TYPE_CHOICES)
    color = models.CharField(max_length=7)
    kpi = models.ForeignKey(Kpi, on_delete=models.CASCADE, related_name="series")

class Datapoint(models.Model):
    target = models.FloatField(null=True)
    value = models.FloatField(null=True)
    date = models.DateField(default=None, null=True)
    series = models.ForeignKey(Series, on_delete=models.CASCADE, related_name="entries")


class ActionTable(models.Model):
    dashboard = models.ForeignKey(Dashboard,related_name='actionTables',on_delete=models.CASCADE)
    title = models.CharField(max_length=256)
    parent = models.IntegerField(null=True)
    parent_dashboard = models.ForeignKey(Dashboard,null=True, related_name="childTables", on_delete=models.SET_NULL)

class Action(models.Model):
    tables = models.ManyToManyField(ActionTable, related_name="actions")
    source = models.ForeignKey(ActionTable, related_name="native_actions", on_delete=models.CASCADE)
    letter = models.CharField(null=True,max_length=1, choices = PILLAR_CHOICES)
    problem = models.CharField(null=True,max_length=256)
    root_cause = models.CharField(null=True,max_length=256)
    solution = models.CharField(null=True,max_length=256)
    leader = models.CharField(null=True,max_length=256)
    date = models.DateField(default=None, null=True)
    date_created = models.DateTimeField(default=timezone.now, null=False)

class Win(models.Model):
    description = models.CharField(max_length=256, null=True)
    participants = models.CharField(max_length = 256, null=True)
    date= models.CharField(max_length=50, null=True)



class Audit(models.Model):
    description = models.CharField(max_length=256, null= True)
    date = models.DateField(default= None, null=True)



