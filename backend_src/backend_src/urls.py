from django.contrib import admin
from django.urls import path, include

from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('chess_club.urls')),
    path('auth/token/', jwt_views.TokenObtainPairView.as_view()),
    path('auth/token/refresh/', jwt_views.TokenRefreshView.as_view())
]

