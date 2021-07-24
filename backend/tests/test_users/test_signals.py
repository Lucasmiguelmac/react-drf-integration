import pytest
from django.db.models.signals import pre_save
from model_bakery import baker

from users.models import CustomUser


class TestTransactionFiller:

    @pytest.mark.django_db
    def test_pre_save(self, mocker):
        instance = baker.make(CustomUser)
        mock = mocker.patch(
            'users.signals.random_username'
        )

        assert instance.username