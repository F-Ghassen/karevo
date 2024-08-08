import json
from pathlib import Path
from ..core.settings import settings
from ..schemas.confidence_schema import ConfidenceValues

def save_confidence_values(confidence_values: ConfidenceValues) -> str:
    file_path = Path(settings.JSON_FILE_PATH)
    
    try:
        # Ensure the directory exists
        file_path.parent.mkdir(parents=True, exist_ok=True)
        
        # Write the confidence values to a JSON file
        with file_path.open("w") as file:
            json.dump(confidence_values.model_dump(), file, indent=4)
        
        return "Confidence values saved successfully"
    except Exception as e:
        raise Exception(f"Failed to save confidence values: {e}")
