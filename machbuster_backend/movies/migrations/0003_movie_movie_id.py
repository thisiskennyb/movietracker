# Generated by Django 4.2.5 on 2023-09-30 23:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0002_movie_users_who_like_delete_userprofile'),
    ]

    operations = [
        migrations.AddField(
            model_name='movie',
            name='movie_id',
            field=models.CharField(default='--', max_length=20, unique=True),
            preserve_default=False,
        ),
    ]