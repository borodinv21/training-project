from rest_framework.response import Response
from rest_framework.views import APIView
from .models import ProjectDetails

from projects.serializer import ProjectDetailsSerializer

class ProjectDetailsView(APIView):
    def get(self, request):
        output = [
            {
                'title': output.title,
                'skills': output.skills,
                'image': output.image,
                'imageBigSize': output.image_big_size,
                'gitHubLink': output.git_hub_link
            } for output in ProjectDetails.objects.all()
        ]
        return Response(output)