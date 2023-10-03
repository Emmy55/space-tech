from django.urls import path, include
from .views import SpaceTechViewSet,UserViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register('spacetech', SpaceTechViewSet, basename='SpaceTech')
router.register('users', UserViewSet)


urlpatterns = [
    path('model/', include(router.urls)),
    path('api/spacetech/<slug:slug>/', UserViewSet.as_view({'get': 'retrieve'}), name='SPT'),
]
