from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include, re_path
from rest_auth.registration.views import VerifyEmailView, RegisterView, LoginView
from rest_framework.routers import DefaultRouter

from users import views


app_name = 'users'

router = DefaultRouter()
router.register('users', views.CustomUserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('login/', LoginView.as_view(), name='account_login'),
    path('register/', include('rest_auth.registration.urls')),
    path('register/', RegisterView.as_view(), name='account_signup'),
]