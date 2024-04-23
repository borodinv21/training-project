from rest_framework.generics import ListAPIView
from .models import ProjectDetails
from .serializer import ProjectDetailsSerializer

class ProjectDetailsView(ListAPIView):
    queryset = ProjectDetails.objects.all()
    serializer_class = ProjectDetailsSerializer
