# Generated by Django 4.2.5 on 2023-09-30 21:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
        ('movies', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='movie',
            name='users_who_like',
            field=models.ManyToManyField(blank=True, related_name='liked_movies', to='accounts.userprofile'),
        ),
        migrations.DeleteModel(
            name='UserProfile',
        ),
    ]
