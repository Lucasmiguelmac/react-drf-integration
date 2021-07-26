from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models

from users.models import CustomUser


class MovieGenre(models.TextChoices):
    ACTION  = "Action"
    COMEDY  = "Comedy"
    DRAMA   = "Drama"

class Movie(models.Model):
    title           = models.CharField(max_length=300)
    release_date    = models.DateField()
    genre           = models.CharField(choices=MovieGenre.choices, max_length=123)
    plot            = models.TextField()
    image           = models.URLField(default="https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-no-image-available-icon-flat.jpg")
    slug            = models.SlugField(editable=False, null=True)


class Rating(models.Model):
    rating  = models.PositiveSmallIntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    comment = models.CharField(max_length=500)
    user    = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True)
    movie   = models.ForeignKey(Movie, on_delete=models.CASCADE, related_name='ratings')