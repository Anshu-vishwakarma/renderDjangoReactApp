from django.shortcuts import render
from .serializers import EmployDataSerializer
from rest_framework import viewsets
from .models import *

# Create your views here.

class EmployViewSet(viewsets.ModelViewSet):
    serializer_class = EmployDataSerializer
    queryset = EmployData.objects.all()