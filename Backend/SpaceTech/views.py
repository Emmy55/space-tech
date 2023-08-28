from django.shortcuts import render
from rest_framework import viewsets
from .serializers import SpaceTechSerializer
from .models import SpaceTechp

# Create your views here.

class SpaceTechpView(viewsets.ModelViewSet):
    serializer_class = SpaceTechSerializer
    queryset = SpaceTechp.objects.all()