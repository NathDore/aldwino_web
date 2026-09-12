import pytest
from fastapi import HTTPException

from ai.core.config import settings
from ai.core.security import verify_internal_secret


def test_verify_internal_secret_accepts_correct_secret() -> None:
    verify_internal_secret(settings.ai_internal_secret)


def test_verify_internal_secret_rejects_wrong_secret() -> None:
    with pytest.raises(HTTPException) as exc_info:
        verify_internal_secret("wrong-value")
    assert exc_info.value.status_code == 401