from pydantic import BaseModel

class Role(BaseModel):
    id: str = None
    name: str = None

class User(BaseModel):
    fullName: str = None
    dateOfBirth: str = None
    phone: str = None
    username: str = None
    email: str = None
    password: str = None
    role: Role = None

    
    
