from rest_framework import serializers
from .models import ProjectInfo

class ProjectInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectInfo
        fields = ['name']
