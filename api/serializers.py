from rest_framework import serializers
from .models import Movie 

class MovieSerializer(serializers.ModelSerializer):
	class Meta:
		model = Movie
		fields = '__all__'

class SearchMovieSerializer(serializers.ModelSerializer):
	class Meta:
		model = Movie
		fields = ['name', 'image','image_url', 'imdb_rating','imdb_id','genre']
