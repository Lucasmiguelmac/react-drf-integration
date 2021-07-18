from django.db import models


class Movie(models.Model):
    title           = models.CharField(max_length=300)
    release_date    = models.DateField()
    genre           = models.CharField(max_length=123)
    plot            = models.TextField()