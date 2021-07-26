from django.db.models.signals import pre_save
from django.dispatch import receiver
from django.template.defaultfilters import slugify

from movies.models import Movie
from movies.utils import unique_slug_generator

@receiver(pre_save, sender=Movie)
def generate_movie_slugk(sender, instance, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance)
        