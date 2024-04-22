from django.db import models

class ProjectDetails(models.Model):
    title = models.CharField(max_length=255)
    skills = models.CharField(max_length=255)
    image = models.ImageField(upload_to='images')
    image_big_size = models.ImageField(upload_to='images')
    git_hub_link = models.CharField(max_length=300)

    def __str__(self):
        return self.title
