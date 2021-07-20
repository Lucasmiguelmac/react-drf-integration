from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views

app_name = 'movies'

router = DefaultRouter()
router.register('movies', views.MovieViewset)

urlpatterns = [
    path('', include(router.urls))
]