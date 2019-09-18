from rest_framework import routers
from .api import DashboardViewSet, KpiViewSet, SeriesViewSet, DatapointViewSet, ActionTableViewSet, ActionViewSet, WinViewSet, AuditViewSet

# RESTful API endpoints

router = routers.DefaultRouter()
router.register('dashboards', DashboardViewSet, 'dashboards')
router.register('kpis',  KpiViewSet, 'kpis')
router.register('series', SeriesViewSet, 'series')
router.register('datapoint', DatapointViewSet, 'datapoint')
router.register('actionTable', ActionTableViewSet, 'actionTable')
router.register('action', ActionViewSet, 'action')
router.register('win', WinViewSet, "win")
router.register('audit', AuditViewSet, "audit")


urlpatterns = router.urls