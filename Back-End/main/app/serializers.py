from rest_framework import serializers
from .models import *

class EmployDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmployData
        fields = '__all__'