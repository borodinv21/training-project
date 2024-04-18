from django.db import models

class ProjectInfo(models.Model):
    name = models.CharField(max_length=256, null=False)
