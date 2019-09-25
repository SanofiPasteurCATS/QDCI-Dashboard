from rest_framework import routers
from .api import DashboardViewSet, KpiViewSet, SeriesViewSet, DatapointViewSet, ActionTableViewSet, ActionViewSet, WinViewSet, AuditViewSet, HeatViewSet, ImageViewSet

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
router.register('heat', HeatViewSet, 'heat')
router.register('image', ImageViewSet, 'image')


urlpatterns = router.urls