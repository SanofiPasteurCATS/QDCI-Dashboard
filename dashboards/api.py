from dashboards.models import Dashboard, Kpi
from rest_framework import viewsets, permissions
from .serializers import DashboardSerializer, KpiSerializer

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

        if dashboard is not None:
            queryset = queryset.filter(dashboard=dashboard)
        return queryset