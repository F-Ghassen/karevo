import os

structure = {
        "backend": {
            "src": {
                "__init__.py": "",
                "main.py": "",
                "api": {
                    "__init__.py": "",
                    "v1": {
                        "__init__.py": "",
                        "routes": {
                            "__init__.py": "",
                            "confidence_routes.py": ""  # Example route file
                        }
                },
                    },
                "schemas": {
                    "__init__.py": "",
                    "confidence_schema.py": ""  # Example schema file
                },
                "services": {
                    "__init__.py": "",
                    "confidence_service.py": ""  # Example service file
                },
                "core": {
                    "__init__.py": "",
                    "settings.py": ""  # Example settings file
                }
            }
        }
}

def create_structure(base_path, structure):
    for name, sub_structure in structure.items():
        path = os.path.join(base_path, name)
        if isinstance(sub_structure, dict):
            os.makedirs(path, exist_ok=True)
            create_structure(path, sub_structure)
        else:
            with open(path, 'w') as file:
                file.write(sub_structure)

# Create the structure starting from the current directory
create_structure('.', structure)

print("Project structure created successfully.")