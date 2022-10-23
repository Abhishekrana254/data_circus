from django.contrib import admin
from .models import *

from django.contrib.auth.models import User
# TokenAdmin.raw_id_fields = ['user']

# Register your models here.
# admin.site.register(User)
admin.site.register(Form)