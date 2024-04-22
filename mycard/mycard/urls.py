"""
URL configuration for mycard project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf.urls.static import static
from django.urls import path, include
from django.conf import settings
from info.views import index
from backend_api.views import *
from projects.views import ProjectDetailsView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index),
    path('backend-api/', ProjectInfoView.as_view(), name='project_info'),
    path('api/projects', ProjectDetailsView.as_view(), name='ProjectDetails')
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

