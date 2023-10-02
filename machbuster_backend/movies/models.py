from django.db import models

class Movie(models.Model):
    movie_id = models.CharField(max_length=60)
    title = models.CharField(max_length=100)
    movie_img = models.URLField(max_length=200)
    
    def __str__(self):
        return self.title
