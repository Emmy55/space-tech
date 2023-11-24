from django.db import models
from django.urls import reverse
from django.utils.text import slugify  # Add this import statement




class Category(models.Model):

    title = models.CharField(max_length=200)

    image = models.URLField(max_length=200)

    slug = models.SlugField(max_length=200,
                            unique=True)

    class Meta:
        ordering = ['title']
        indexes = [
            models.Index(fields=["title"]),
        ]
        verbose_name = 'category'
        verbose_name_plural = 'categories'









class SpaceTech(models.Model):
    # category = models.ForeignKey(Category, related_name='blogs', on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    
    slug = models.SlugField(max_length=255, unique=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('spacetech:product_list_by_category',
                       args=[self.slug])

