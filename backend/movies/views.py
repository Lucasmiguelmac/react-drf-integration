from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.generics import GenericAPIView

from movies import models as mm
from . import serializers as ms


class MovieViewset(ModelViewSet):
    queryset = mm.Movie.objects.all().order_by('-release_date')
    lookup_field = 'slug'

    serializer_class_by_action = {
        'retrieve': ms.MovieDetailSerializer,
        'list': ms.MovieListSerializer,
    }

    def get_serializer_class(self):
        if hasattr(self, 'serializer_class_by_action'):
            return self.serializer_class_by_action.get(self.action, self.serializer_class)
        return super(MyModelViewSet, self).get_serializer_class()

class RatingAPIView(GenericAPIView):
    queryset = mm.Rating.objects.all()
    serializer_class = ms.RatingSerializer
    lookup_field = 'movie'
