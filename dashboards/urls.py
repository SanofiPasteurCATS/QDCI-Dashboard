from rest_framework import routers
from .api import DashboardViewSet, KpiByDashboardViewSet

# RESTful API endpoints

router = routers.DefaultRouter()
router.register('api/dashboards', DashboardViewSet, 'dashboards')
router.register('api/kpis',  KpiByDashboardViewSet, 'kpis')

urlpatterns = router.urls