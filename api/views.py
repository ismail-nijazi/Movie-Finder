from django.core.paginator import Paginator
from .models import Movie, WatchList, recommended_movies
from .serializers import MovieSerializer, SearchMovieSerializer
from rest_framework.decorators import api_view
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from api import serializers

# from rest_framework.decorators import permission_classes

# Create your views here.


@api_view(['GET'])
def apiOverview(request):
    response = {
        'Search': 'search/<str:searchKey>',
        'Movie by id': 'movie/<str:pk>',
    }
    return Response(response)


# @api_view(['GET'])
# def searchView(request, searchKey,page=1):
# 	movies = Movie.objects.filter(name__contains=searchKey)
# 	paginator = Paginator(movies, 10)
# 	page_obj = paginator.get_page(page)
# 	serialized = SearchMovieSerializer(page_obj.object_list, many=True,context={'request': request})
# 	return Response({'result': serialized.data, 'totalPages':page_obj.paginator.num_pages, 'currentPage':page })

# @api_view(['GET'])
# def getMovie(request, imdbID):
# 	movies = Movie.objects.filter(imdb_id=imdbID).first()
# 	serialized = MovieSerializer(movies, many=False,context={'request': request})
# 	return Response({'result': serialized.data})

# @api_view(['GET'])
# def getRecommended(request):
# 	recommended = RecommendedMovie.objects.all().first()
# 	movies = recommended.movies.all()
# 	serialized = SearchMovieSerializer(movies, many=True,context={'request': request})
# 	return Response({'result': serialized.data})

# @api_view(['GET'])
# @permission_classes((IsAuthenticated,))
# def getWatchList(request):
# 	watchlist = WatchList.objects.filter(user=request.user).first()
# 	serialized = WatchListSerializer(watchlist,context={'request': request})
# 	return Response({'result': serialized.data})


class RecommendedView(APIView):
    def get(self, request):
        recommended = recommended_movies.objects.all().first()
        if recommended:
            queryset = recommended.movies.all()
            serializer_class = SearchMovieSerializer(
                queryset, many=True, context={'request': request})
            return Response(serializer_class.data)
        return Response([])


class MovieDetailsView(APIView):
    def get(self, request, imdbID):
        movies = Movie.objects.filter(imdb_id=imdbID).first()
        serialized = MovieSerializer(
            movies, many=False, context={'request': request})
        return Response({'result': serialized.data})


class SearchView(APIView):
    def get(self, request, searchKey, page=1):
        movies = Movie.objects.filter(name__icontains=searchKey)
        paginator = Paginator(movies, 10)
        page_obj = paginator.get_page(page)
        serialized = SearchMovieSerializer(
            page_obj.object_list, many=True, context={'request': request})
        return Response({'result': serialized.data, 'totalPages': page_obj.paginator.num_pages, 'currentPage': page})


class WatchlistView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user_watchList = WatchList.objects.filter(user=request.user).first()
        movies = user_watchList.movies.all()
        serialized = SearchMovieSerializer(
            movies, many=True, context={'request': request})
        return Response(serialized.data)


class WatchlistViewAdd(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, imdbID):
        movie = Movie.objects.filter(imdb_id=imdbID).first()
        usersWatchList = WatchList.objects.filter(user=request.user).first()
        is_users_watchList = usersWatchList.movies.all().filter(imdb_id=imdbID)
        if len(is_users_watchList) > 0:
            usersWatchList.movies.remove(movie)
            respons = ' removed from your watch list'
        else:
            usersWatchList.movies.add(movie)
            respons = ' added to your watch list'
        usersWatchList.save()
        return Response({'response': movie.name + respons})
