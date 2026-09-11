from fastapi import Depends, FastAPI

from ai.core.security import verify_internal_secret
from ai.health.router import router as health_router

def create_app() -> FastAPI:
    app = FastAPI(dependencies=[Depends(verify_internal_secret)])
    app.include_router(health_router)
    return app

app = create_app()