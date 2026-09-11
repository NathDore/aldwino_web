import secrets

from fastapi import Header, HTTPException, status

from ai.core.config import settings


def verify_internal_secret(x_internal_secret: str = Header(...)) -> None:
    if not secrets.compare_digest(x_internal_secret, settings.ai_internal_secret):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid internal secret")