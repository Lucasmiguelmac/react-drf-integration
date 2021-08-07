from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework.routers import DefaultRouter

from users import views

app_name = 'users'

router = DefaultRouter()
router.register('users', views.CustomUserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    re_path(r'^auth/', include('rest_auth.urls')),
    re_path(r'^auth/registration/', include('rest_auth.registration.urls')),
]