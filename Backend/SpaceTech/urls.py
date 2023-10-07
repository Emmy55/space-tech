from django.urls import path, include
from .views import SpaceTechViewSet, UserViewSet, SpaceTechDetailView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register('spacetech', SpaceTechViewSet, basename='SpaceTech')
router.register('users', UserViewSet)


urlpatterns = [
    path('model/', include(router.urls)),
    path('model/spacetech', SpaceTechViewSet.as_view({'get': 'retrieve'}), name='SpaceTech'),
    path('model/spacetech/<slug>/', SpaceTechDetailView.as_view)
]
