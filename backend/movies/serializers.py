from django.db.models import fields
from rest_framework import serializers

from movies.models import Movie, Rating


class MovieSerializer(serializers.ModelSerializer):
    

    class Meta:
        model = Movie
        fields = '__all__'


class RatingSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField()

    class Meta:
        model = Rating
        exclude = ('movie',)