import pytest
from django.db.models.signals import pre_save
from model_bakery import baker

from users.models import CustomUser


pytestmark = pytest.mark.unit

class TestTransactionFiller:

    def test_pre_save(self, mocker):
        instance = baker.prepare(CustomUser)
        mock = mocker.patch(
            'users.signals.random_username'
        )

        pre_save.send(CustomUser, instance=instance, created=True)

        mock.assert_called_with(instance)