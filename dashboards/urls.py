from rest_framework import routers
from .api import DashboardViewSet, KpiViewSet, SeriesViewSet, DatapointViewSet, ActionTableViewSet, ActionViewSet, ExportKpiViewSet

# RESTful API endpoints

router = routers.DefaultRouter()
router.register('dashboards', DashboardViewSet, 'dashboards')
router.register('kpis',  KpiViewSet, 'kpis')
router.register('series', SeriesViewSet, 'series')
router.register('datapoint', DatapointViewSet, 'datapoint')
router.register('actionTable', ActionTableViewSet, 'actionTable')
router.register('action', ActionViewSet, 'action')
router.register('exportKpi',ExportKpiViewSet, 'exportKpi' )

urlpatterns = router.urls