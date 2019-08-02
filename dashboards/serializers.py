from rest_framework import serializers, fields
from dashboards.models import Dashboard, Kpi, Datapoint, Series

# Serializers for all Dashboard models (converts python objects to JSON format for REST API endpoints)

class DashboardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dashboard
        fields = '__all__'

class DatapointSerializer(serializers.ModelSerializer):
    class Meta:
        model = Datapoint
        fields = ('target', 'value', 'date', 'series', 'id')

class SeriesSerializer(serializers.ModelSerializer):
    entries = DatapointSerializer(many=True, read_only=True)
    class Meta:
        model = Series
        fields = ('name','plot_type','color','kpi', 'entries','id')

class KpiSerializer(serializers.ModelSerializer):
    series = SeriesSerializer(many = True, read_only=True)
    class Meta:
        model = Kpi
        fields = ("pillar", "name", "safe", "danger", "frequency","dashboard",'series','id')