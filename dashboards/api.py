
from dashboards.models import Dashboard, Kpi, Series, Datapoint, ActionTable, Action, Audit, Win, Heat, Image
from rest_framework import viewsets, permissions
from .serializers import DashboardSerializer, KpiSerializer, SeriesSerializer, DatapointSerializer, ActionTableSerializer, ActionSerializer, AuditSerializer, WinSerializer, HeatSerializer, ImageSerializer
from datetime import datetime, time, date, timedelta 
from rest_framework.viewsets import ReadOnlyModelViewSet
# Dashboard viewset

class DashboardViewSet(viewsets.ModelViewSet):

    serializer_class = DashboardSerializer
    def get_queryset(self):
        return Dashboard.objects.all()

    def perform_create(self, serializer):
        dashboard = serializer.save(owner=self.request.user)
        st = ActionTable(dashboard=dashboard, title="Short Term Action Plan")
        st.save()
        lt = ActionTable(dashboard=dashboard, title="Long Term Action Plan")
        lt.save()
        ul = ActionTable(dashboard=dashboard, title="Upper Level Escalation")
        ul.save()
        ll = ActionTable(dashboard=dashboard, title="Lower Level Feed")
        ll.save()
        heat = Heat(name="Good", color="#008000", dashboard=dashboard)
        heat.save()
        heat = Heat(name="Okay", color="#FFA500", dashboard=dashboard)
        heat.save()
        heat = Heat(name="Bad", color="#EF0000", dashboard=dashboard)
        heat.save()
    
    def put(self, request, *args, **kwargs):
        return self.update(self, request, *args, **kwargs)
    
    def patch(self, request, pk):
        dashboard = self.get_objects(pk)
        serializer = DashboardSerializer(dashboard, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()

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
        
class SeriesViewSet(viewsets.ModelViewSet):
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
    def perform_create(self, serializer):
        s = serializer.save()
 
        kpi = s.kpi
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
        series = self.get_objects(pk)
        serializer = SeriesSerializer(series, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
        
# Kpi Viewset 
# Takes a query param 'dashboard' to filter kpis by dashboard
class KpiViewSet(viewsets.ModelViewSet):

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
                d= Datapoint(series=s, date=d, target=kpi.global_target)
                d.save()
        elif (kpi.frequency == 1):
            for d in weekly():
                d=Datapoint(series=s, date=d, target=kpi.global_target)
                d.save()
        elif (kpi.frequency == 2):
            for d in biweekly():
                d= Datapoint(series=s, date=d, target=kpi.global_target)
                d.save()

    def put(self, request, *args, **kwargs):
        return self.update(self, request, *args, **kwargs)

    def patch(self, request, pk):
        kpi = self.get_object(pk)
        serializer = KpiSerializer(kpi, data=request.data, partial=True) # set partial=True to update a data partially
        if serializer.is_valid():
            serializer.save()

class ActionTableViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = ActionTableSerializer
    def get_queryset(self):
        queryset = ActionTable.objects.all()
        dashboard = self.request.query_params.get('dashboard', None)
        if dashboard is not None:
            queryset = queryset.filter(dashboard=dashboard)
        return queryset
    def perform_create(self, serializer):
        actionTable = serializer.save()


    def partial_update(self, request, *args, **kwargs):
        kwargs['partial'] = True
        parent_dashboard = self.request.query_params.get('parent', None)
        if parent_dashboard is not None:
            print(parent_dashboard)
            if parent_dashboard != "null":
                parent = ActionTable.objects.get(dashboard=parent_dashboard, title="Lower Level Feed")
                request.data["parent"] = parent.id
                request.data["parent_dashboard"] = parent_dashboard
            else:
                request.data["parent"] = None
                request.data["parent_dashboard"] = None
        
        return self.update(request, *args, **kwargs)

class ActionViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = ActionSerializer

    def get_queryset(self):
        queryset = Action.objects.all()
        dashboard = self.request.query_params.get('dashboard', None)
        if dashboard is not None:
            queryset = queryset.filter(dashboard=dashboard)
        return queryset

    def put(self, request, *args, **kwargs):
        return self.update(self, request, *args, **kwargs)

    def patch(self, request, pk):
        action = self.get_object(pk)
        serializer = ActionSerializer(action, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()       

class AuditViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = AuditSerializer

    def get_queryset(self):
        queryset = Audit.objects.all()
        dashboard = self.request.query_params.get('dashboard', None)
        if dashboard is not None:
            queryset = queryset.filter(dashboard=dashboard)
        return queryset

    def put(self, request, *args, **kwargs):
        return self.update(self, request, *args, **kwargs)

    def patch(self, request, pk):
        audit = self.get_object(pk)
        serializer = AuditSerializer(audit, data = request.data, partial=True)
        if serializer.is_valid():
            serializer.save()

class WinViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = WinSerializer

    def get_queryset(self):
        queryset =  Win.objects.all()
        dashboard = self.request.query_params.get('dashboard', None)
        if dashboard is not None:
            queryset = queryset.filter(dashboard=dashboard)
        return queryset

    def put(self, request, *args, **kwargs):
        return self.update(self, request, *args, **kwargs)
        
    def patch(self, request, pk):
        win = self.get_object(pk)
        serializer = WinSerializer(win, data = request.data, partial=True)
        if serializer.is_valid():
            serializer.save()

class HeatViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = HeatSerializer

    def get_queryset(self):
        queryset = Heat.objects.all()
        dashboard = self.request.query_params.get('dashboard', None)
        if dashboard is not None:
            queryset = queryset.filter(dashboard=dashboard)
        return queryset
    
    def put(self, request, *args, **kwargs):
        return self.update(self, request, *args, **kwargs)
        
    def patch(self, request, pk):
        heat = self.get_object(pk)
        serializer = HeatSerializer(heat, data = request.data, partial=True)
        if serializer.is_valid():
            serializer.save()

class ImageViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = ImageSerializer
    
    def perform_create(self, serializer):
        image = serializer.save()

    def get_queryset(self):
        return Image.objects.all()
