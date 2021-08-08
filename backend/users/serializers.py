from rest_framework import serializers

from .models import CustomUser


class CustomUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'password', 'username']
        extra_kwargs = {
            'password': {'write_only': True}
        }
        read_only_fields = ('username',)