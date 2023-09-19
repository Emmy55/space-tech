from pydoc import describe
from django.db import models

# Create your models here.

class SpaceTech(models.Model):
    title = models.CharField(max_length=200)
    des = models.TextField()

    def __str__(self):
        return self.title
