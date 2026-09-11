from fastapi import APIRouter

from ai.health.schemas import HealthResponse
from ai.health.service import get_health_status

router = APIRouter()

@router.get("/health", response_model=HealthResponse)
def health() -> HealthResponse:
    return HealthResponse(status=get_health_status())