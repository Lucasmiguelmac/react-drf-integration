import uuid
from django.db import models
from django.conf import settings

def random_username(sender, instance, **kwargs):
    if not instance.username:
        instance.username = uuid.uuid4().hex[:30]
models.signals.pre_save.connect(random_username, sender=settings.AUTH_USER_MODEL)