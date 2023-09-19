from rest_framework import serializers
from rest_framework import viewsets
from .serializers import SpaceTechSerializer,UserSerializer
from .models import SpaceTech
from django.contrib.auth.models import User

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class SpaceTechViewSet(viewsets.ModelViewSet):
    queryset = SpaceTech.objects.all()
    serializer_class = SpaceTechSerializer
    authentication_classes = (TokenAuthentication,)