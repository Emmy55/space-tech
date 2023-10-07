from rest_framework import serializers
from rest_framework import viewsets
from .serializers import SpaceTechSerializer,UserSerializer
from .models import SpaceTech
from django.contrib.auth.models import User
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
# from django.shortcuts import get_object_or_404, render




class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'slug'
    # blog = get_object_or_404(SpaceTech, slug=slug)

class SpaceTechViewSet(viewsets.ModelViewSet):
    queryset = SpaceTech.objects.all()
    serializer_class = SpaceTechSerializer
    lookup_field = 'slug'
    authentication_classes = (TokenAuthentication,)



class SpaceTechDetailView(APIView):
    def get(self, request, slug):
        spacetech = get_object_or_404(SpaceTech, slug=slug)
        serializer = SpaceTechSerializer(spacetech)
        return JsonResponse(serializer.data)