from pydantic import BaseModel, Field

class ConfidenceValues(BaseModel):
    greening_min: float = Field(..., description="Minimum confidence level for greening")
    greening_max: float = Field(..., description="Maximum confidence level for greening")
    malformed_min: float = Field(..., description="Minimum confidence level for malformed")
    malformed_max: float = Field(..., description="Maximum confidence level for malformed")

    class Config:
        schema_extra = {
            "example": {
                "greening_min": 0.5,
                "greening_max": 0.8,
                "malformed_min": 0.4,
                "malformed_max": 0.7,
            }
        }