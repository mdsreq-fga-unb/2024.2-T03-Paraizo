from datetime import datetime, timedelta, timezone
from typing import Annotated
from dotenv import load_dotenv, dotenv_values
from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jwt.exceptions import InvalidTokenError
from passlib.context import CryptContext
from pydantic import BaseModel
from core.config.mongoDB.index import MongoDB
import jwt
import os
from core.routers.functions.index import Functions
import bcrypt

load_dotenv()

class Authenticator:
        
    def __init__(self) -> None:
        self.Functions = Functions()
        self.config = dotenv_values(f".env.{os.getenv("PYTHON_AGRS")}")
        
    def authenticate(self, body) -> str:

        user = self.Functions.Authenticator.authenticateUser(body)
        if not user:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Incorrect username or password",
                headers={"WWW-Authenticate": "Bearer"},
            )
        access_token = self.Functions.Authenticator.createAccessToken()
        return {"token": access_token, "token_type": 'bearer'}
    
    async def getCurrentUser(self, body):
        credentialsException = HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Could not validate credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
        try:
            payload = jwt.decode(
                body.token, self.config['AUTHENTICATOR_SECRET_KEY'], algorithms=self.config['AUTHENTICATOR_ALGORITHM'])
            username: str = payload.get("sub")
            if username is None:
                raise credentialsException
        except InvalidTokenError:
            raise credentialsException
        user = self.getUser(body)
        if user is None:
            raise credentialsException
        return user
        
        
    def registerUser(self, body):
        if not body.email or not body.password:
            return False
        user = self.Functions.Authenticator.getUser(body)
        if user:
            return False

        bytes = body.password.encode('utf-8') 
        salt = bcrypt.gensalt() 
        hash = bcrypt.hashpw(bytes, salt) 
        
        user = {
            'email': body.email,
            'username': body.username,
            'password': hash
        }
        
        self.Functions.Authenticator.setUser(user)
        return True