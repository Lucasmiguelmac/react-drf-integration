from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet

from movies import models as mm
from . import serializers as ms

# Create your views here.
class MovieViewset(ModelViewSet):
    queryset = mm.Movie.objects.all().order_by('-release_date')
    serializer_class = ms.MovieSerializer