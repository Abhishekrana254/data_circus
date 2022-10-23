from django.db import models

# Create your models here.


class Form(models.Model):
    id = models.CharField(max_length=32, primary_key=True)
    company = models.CharField(max_length=32)
    name = models.CharField(max_length=32)
    form_data = models.JSONField()
