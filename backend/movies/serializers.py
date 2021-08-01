from django.db.models import fields
from rest_framework import serializers

from movies.models import Movie, Rating


class RatingSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField()
    movie = serializers.StringRelatedField()

    class Meta:
        model = Rating
        fields = '__all__'

class MovieListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Movie
        fields = ('title', 'image', 'slug')

class MovieDetailSerializer(serializers.ModelSerializer):
    ratings = RatingSerializer(many=True, read_only=False)

    class Meta:
        model = Movie
        fields = ('ratings', 'title', 'release_date', 'genre', 'plot', 'image', 'slug')
        lookup_field = 'slug'