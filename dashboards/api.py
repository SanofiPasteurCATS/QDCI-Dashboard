from dashboards.models import Dashboard, Kpi, Series, Datapoint
from rest_framework import viewsets, permissions
from .serializers import DashboardSerializer, KpiSerializer, SeriesSerializer, DatapointSerializer
from datetime import datetime, time, date, timedelta 
# Dashboard viewset

class DashboardViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = DashboardSerializer
    def get_queryset(self):
        return self.request.user.dashboards.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class DatapointViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = DatapointSerializer
    def get_queryset(self):
        queryset = Datapoint.objects.all()
        series = self.request.query_params.get('series', None)
        if series is not None:
            queryset = queryset.filter(series=series)
        return queryset
    def put(self, *args, **kwargs):
        return self.update(self, request, *args, **kwargs)
    def patch(self, request, pk):
        datapoint = self.get_objects(pk)
        serializer = DatapointSerializer(datapoint, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
        
class SeriesByKpiViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = SeriesSerializer
    def get_queryset(self):
        queryset = Series.objects.all()
        kpi = self.request.query_params.get('kpi', None)
        if kpi is not None:
            queryset = querysey.filter(kpi=kpi)
        return queryset
    def preform_create(self, serializer):
        series = serializer.save()
    
    def put(self, request, *args, **kwargs):
        return self.update(self, request, *args, **kwargs)
    
    def patch(self, request, pk):
        series = self.get_objects(pk)
        serializer = SeriesSerializer(series, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()

# Kpi Viewset 
# Takes a query param 'dashboard' to filter kpis by dashboard
class KpiByDashboardViewSet(viewsets.ModelViewSet):

    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = KpiSerializer

    def get_queryset(self):
        queryset = Kpi.objects.all()
        dashboard = self.request.query_params.get('dashboard', None)
        pillar = self.request.query_params.get('pillar', None)

        if dashboard is not None:
            queryset = queryset.filter(dashboard=dashboard)
        if pillar is not None:
            queryset = queryset.filter(pillar=pillar)
        return queryset
    
    def perform_create(self, serializer):
        kpi = serializer.save()
        s = Series(name="My Series", plot_type="li", color="#000000", kpi=kpi)
        series = s.save()
        def monthly():
            year = datetime.now().year
            d = date(year,1,1)
            while d.year == year:
                yield d
                d += timedelta(31)
                d = d.replace(day=1)

        def weekly():
            year = datetime.now().year
            d = date(year, 1, 1)                    # January 1st
            d += timedelta(days = 7 - d.weekday())  # First Sunday
            while d.year == year:
                yield d
                d += timedelta(days = 7)

        def biweekly():
            year = datetime.now().year
            d = date(year, 1, 1)                    # January 1st
            d += timedelta(days = 7 - d.weekday())  # First Sunday
            while d.year == year:
                yield d
                d += timedelta(days = 14)

        if (kpi.frequency == 0):
            for d in monthly():
                d= Datapoint(series=s, date=d)
                d.save()
        elif (kpi.frequency == 1):
            for d in weekly():
                d=Datapoint(series=s, date=d)
                d.save()
        elif (kpi.frequency == 2):
            for d in biweekly():
                d= Datapoint(series=s, date=d)
                d.save()

    def put(self, request, *args, **kwargs):
        return self.update(self, request, *args, **kwargs)

    def patch(self, request, pk):
        kpi = self.get_object(pk)
        serializer = KpiSerializer(kpi, data=request.data, partial=True) # set partial=True to update a data partially
        if serializer.is_valid():
            serializer.save()