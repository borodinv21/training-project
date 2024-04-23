from rest_framework import serializers
from projects.models import ProjectDetails


class ProjectDetailsSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProjectDetails
        # fields = ("title", "skills")
        fields = ["title", "skills", "image", "image_big_size", "git_hub_link"]
