from django.shortcuts import render
from rest_framework.views import APIView
from .models import ProjectInfo
from .serializer import ProjectInfoSerializer
from rest_framework.response import Response

class ProjectInfoView(APIView):
    def get(self, request):
        output = [
            {
                "name": output.name
            } for output in ProjectInfo.objects.all()
        ]
        return Response(output)

    def post(self, request):
        serializer = ProjectInfoSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
