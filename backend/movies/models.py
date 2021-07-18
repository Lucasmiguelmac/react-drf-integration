from django.db import models


class GenreChoices(models.TextChoices):
    ACTION  = "Action"
    COMEDY  = "Comedy"
    DRAMA   = "Drama"

class Movie(models.Model):
    title           = models.CharField(max_length=300)
    release_date    = models.DateField()
    genre           = models.CharField(choices=GenreChoices.choices, max_length=123)
    plot            = models.TextField()