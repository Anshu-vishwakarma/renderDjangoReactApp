from django.urls import path,include
from .views import EmployViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'Employ', EmployViewSet, basename='user')
urlpatterns = router.urls

urlpatterns = [
    path('', include(router.urls)),
]
