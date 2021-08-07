from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import AllowAny

from users import models as um
from users import serializers as us


class CustomUserViewSet(ModelViewSet):
    queryset = um.CustomUser.objects.all()
    serializer_class = us.CustomUserSerializer
    permission_classes = [AllowAny]