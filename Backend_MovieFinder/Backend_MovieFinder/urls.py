"""Backend_MovieFinder URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.contrib.auth import views as auth_view
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from api import views as apiView
from user import views as userView
from django.views.generic.base import RedirectView
from rest_framework.authtoken.views import obtain_auth_token
from django.views.generic import TemplateView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html'), name="home_page"),
    path('search/<str:searchKey>',
         apiView.SearchView.as_view(), name="search-movie"),
    path('search/<str:searchKey>/<int:page>',
         apiView.SearchView.as_view(), name="search-movie"),
    path('movie/<str:imdbID>', apiView.MovieDetailsView.as_view(), name="movieInfo"),
    path('recommend/', apiView.RecommendedView.as_view(), name="recommend"),
    path('user/register', userView.CreateUserView.as_view(), name="register"),
    path('user/login', obtain_auth_token, name="login"),
    path('user/logout', userView.LogoutView.as_view(), name="logout"),
    path('user/watchList', apiView.WatchlistView.as_view(), name="watchlist"),
    path('user/watchList/add/<str:imdbID>',
         apiView.WatchlistViewAdd.as_view(), name="addToWatchList"),
    path('user/resetPassword/', auth_view.PasswordResetView.as_view(
        template_name="user/resetPassword.html"), name="password_reset"),
    path('user/resetPassword/emailWasSended/', auth_view.PasswordResetDoneView.as_view(template_name="user/emailWasSend.html"),
         name="password_reset_done"),
    path('user/confirmResetPassword/<uidb64>/<token>/', auth_view.PasswordResetConfirmView.as_view(template_name="user/ConfirmResetPassword.html"),
         name="password_reset_confirm"),
    path('user/confirmResetPassword/PasswordResetComplete', auth_view.PasswordResetCompleteView.as_view(
        template_name="user/PasswordResetComplete.html"), name="password_reset_complete")
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
