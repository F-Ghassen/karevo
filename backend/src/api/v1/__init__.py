from fastapi import APIRouter
from .routes.confidence_routes import router as confidence_router

api_router = APIRouter()
api_router.include_router(confidence_router, prefix="/confidence", tags=["confidence"])