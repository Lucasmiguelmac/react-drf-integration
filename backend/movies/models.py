from django.core import validators
from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models


class MovieGenre(models.TextChoices):
    ACTION  = "Action"
    COMEDY  = "Comedy"
    DRAMA   = "Drama"

class Movie(models.Model):
    title           = models.CharField(max_length=300)
    release_date    = models.DateField()
    genre           = models.CharField(choices=MovieGenre.choices, max_length=123)
    plot            = models.TextField()