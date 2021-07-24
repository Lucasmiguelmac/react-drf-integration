import uuid
from django.db.models.signals import pre_save
from django.conf import settings
from django.dispatch import receiver

from users.models import CustomUser

@receiver(pre_save, sender=CustomUser)
def random_username(sender, instance, **kwargs):
    if not instance.username:
        instance.username = str(uuid.uuid4().hex[:30])