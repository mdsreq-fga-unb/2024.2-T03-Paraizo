from pydantic import BaseModel

class User(BaseModel):
    email: str = None
    username: str = None
    password: str = None
    
