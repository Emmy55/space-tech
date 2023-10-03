from django.contrib import admin
from .models import SpaceTech
# Register your models here.



class SpaceTechAdmin(admin.ModelAdmin):
    list_display = ('title', 'description')


admin.site.register(SpaceTech, SpaceTechAdmin)