from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.generics import GenericAPIView

from movies import models as mm
from . import serializers as ms


class MovieViewset(ModelViewSet):
    queryset = mm.Movie.objects.all().order_by('-release_date')
    serializer_class = ms.MovieSerializer
    lookup_field = 'slug'

class RatingAPIView(GenericAPIView):
    queryset = mm.Rating.objects.all()
    serializer_class = ms.RatingSerializer
    lookup_field = 'movie'
