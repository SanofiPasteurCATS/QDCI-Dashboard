from rest_framework import serializers, fields
from dashboards.models import Dashboard, Kpi, Datapoint, Series, Action, ActionTable, Audit, Win, Heat, Image

# Serializers for all Dashboard models (converts python objects to JSON format for REST API endpoints)

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = '__all__'

class DashboardSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many = True, read_only=True)
    class Meta:
        model = Dashboard
        fields = ('title', 'author', 'background', 'dashboard_type', 'level', 'owner', 'images', 'id')

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
    series =  SeriesSerializer(many = True, read_only=True)
    class Meta:
        model = Kpi
        fields = '__all__'

class ShallowActionTableSerializer(serializers.ModelSerializer):

    dashboard = DashboardSerializer(many = False, read_only=True)

    class Meta:
        model = ActionTable
        fields = ('id','dashboard')

class ActionSerializer(serializers.ModelSerializer):
    source = ShallowActionTableSerializer(many = False, read_only = True)
    source_id = serializers.PrimaryKeyRelatedField(
        queryset=ActionTable.objects.all(), source='source', write_only=True)
    class Meta:
        model = Action
        fields = ('letter','problem','solution','root_cause', 'date', 'leader', 'id', 'tables','source', 'source_id', 'date_created')

class ActionTableSerializer(serializers.ModelSerializer):
    actions = ActionSerializer(many=True, read_only=True)
    class Meta:
        model = ActionTable
        fields = ('title', 'actions', 'id', 'parent', "dashboard", "parent_dashboard")

class AuditSerializer(serializers.ModelSerializer):
    class Meta:
        model = Audit
        fields = '__all__'

class WinSerializer(serializers.ModelSerializer):
    class Meta:
        model = Win 
        fields = '__all__'

class HeatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Heat
        fields = '__all__'

