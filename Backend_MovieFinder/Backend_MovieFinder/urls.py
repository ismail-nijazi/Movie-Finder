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
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from api import views as apiView
from user import views as userView
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('admin/', admin.site.urls),
	path('', apiView.apiOverview, name="api-overview"),
	path('search/<str:searchKey>', apiView.SearchView.as_view(), name="search-movie"),
	path('search/<str:searchKey>/<int:page>', apiView.SearchView.as_view(), name="search-movie"),
	path('movie/<str:imdbID>', apiView.MovieDetailsView.as_view(), name="movieInfo"),
	path('recommend/', apiView.RecommendedView.as_view(), name="recommend"),
	path('user/register', userView.CreateUserView.as_view(), name="register"),
	path('user/login', obtain_auth_token, name="login"),
	path('user/logout', userView.LogoutView.as_view(), name="logout"),
	path('user/watchList', apiView.WatchlistView.as_view(), name="watchlist"),
	path('user/watchList/add/<str:imdbID>', apiView.WatchlistViewAdd.as_view(), name="addToWatchList"),
] 

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)