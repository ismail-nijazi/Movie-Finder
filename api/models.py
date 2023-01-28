from django.db import models
from django.contrib.auth.models import User
from django.core.files import File
import os
import urllib.request
import urllib

# Create your models here.


class Movie(models.Model):
    name = models.CharField(max_length=200)
    type = models.CharField(max_length=50)
    image = models.ImageField(
        default="default-image.jpg", upload_to='movies_images', blank=True)
    image_url = models.URLField(blank=True, null=True)
    genre = models.CharField(max_length=200, blank=True)
    imdb_rating = models.CharField(max_length=10, null=True)
    imdb_id = models.CharField(max_length=50, unique=True, primary_key=True)
    released_date = models.DateField(null=True)
    endYear = models.DateField(blank=True, null=True)
    language = models.CharField(max_length=50, null=True)
    summary = models.TextField()
    actors = models.CharField(max_length=400, null=True)
    run_time = models.PositiveIntegerField(null=True, blank=True)
    totalSeason = models.PositiveIntegerField(null=True, blank=True)

    def __str__(self):
        return f"Movie: {self.name}"

    def save(self, *args, **kwargs):
        if self.image_url and self.image.name == "default-image.jpg":
            try:
                result = urllib.request.urlretrieve(self.image_url)
                self.image.save(
                    os.path.basename(self.image_url),
                    File(open(result[0], 'rb'))
                )
            except urllib.error.HTTPError:
                self.image_url = ""
            super().save(*args, **kwargs)
        else:
            super().save(*args, **kwargs)


class WatchList(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    movies = models.ManyToManyField(Movie)


class recommended_movies(models.Model):
    movies = models.ManyToManyField(Movie)
