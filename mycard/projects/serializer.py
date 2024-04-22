from rest_framework import serializers
from projects.models import ProjectDetails
from drf_extra_fields.fields import Base64ImageField

class ProjectDetailsSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()
    image_big_size = serializers.SerializerMethodField()

    class Meta:
        model = ProjectDetails
        fields = ["title", "skills", "image", "image_big_size", "git_hub_link"]
