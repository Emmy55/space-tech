from pydoc import describe
from django.db import models
from autoslug import AutoSlugField


# Create your models here.

class SpaceTech(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    slug = AutoSlugField(unique=True, populate_from='get_slug')

    def get_slug(self):
        return f"{self.id}-{self.title}".lower().replace(" ", "-")

        
    def save(self, *args, **kwargs):
        # Generate slug if it doesn't exist
        if not self.slug:
            self.slug = slugify(self.title)
        
        super().save(*args, **kwargs)
    def __str__(self):
        return self.title
