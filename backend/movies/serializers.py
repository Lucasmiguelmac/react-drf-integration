from django.db.models import fields
from rest_framework import serializers

from movies.models import Movie, Rating


class RatingSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField()

    class Meta:
        model = Rating
        exclude = ('movie',)

class MovieSerializer(serializers.ModelSerializer):
    ratings = RatingSerializer(many=True)

    class Meta:
        model = Movie
        fields = ('ratings', 'title', 'release_date', 'genre', 'plot')