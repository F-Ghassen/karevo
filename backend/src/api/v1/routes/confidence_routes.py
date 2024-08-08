from fastapi import APIRouter, HTTPException
from typing import Dict
from ....schemas.confidence_schema import ConfidenceValues
from ....services.confidence_service import save_confidence_values

router = APIRouter()

@router.post("/", response_model=Dict[str, str])
async def handle_confidence_values(confidence_values: ConfidenceValues):
    try:
        message = save_confidence_values(confidence_values)
        return {"message": message}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))