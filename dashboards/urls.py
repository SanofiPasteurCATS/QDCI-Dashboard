from rest_framework import routers
from .api import DashboardViewSet, KpiByDashboardViewSet, SeriesByKpiViewSet, DatapointViewSet

# RESTful API endpoints

router = routers.DefaultRouter()
router.register('api/dashboards', DashboardViewSet, 'dashboards')
router.register('api/kpis',  KpiByDashboardViewSet, 'kpis')
router.register('api/series', SeriesByKpiViewSet, 'series')
router.register('api/datapoint', DatapointViewSet, 'datapoint')

urlpatterns = router.urls