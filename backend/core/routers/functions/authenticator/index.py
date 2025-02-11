from datetime import datetime, timedelta, timezone
from typing import Annotated
from dotenv import load_dotenv, dotenv_values
from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from passlib.context import CryptContext
from pydantic import BaseModel
from core.config.mongoDB.index import MongoDB
import jwt
import bcrypt
import os

load_dotenv()

class Authenticator:
    def __init__(self):
        self.passwordContext = CryptContext(
            schemes=["bcrypt"], deprecated="auto")
        
        self.collection = MongoDB().connect('authenticator', 'user')
        
        self.config = dotenv_values(f".env.{os.getenv('PYTHON_AGRS')}")

    def verifyPassword(self, plainPassword, hashedPassword):
        return bcrypt.checkpw(plainPassword, hashedPassword)

    def getPasswordHash(self, password):
        return self.passwordContext.hash(password)

    def getUser(self, body):
        user = self.collection.find_one({'email': body.email})
        if user:
            return user
        return None

    def setUser(self, user):
        user = self.collection.insert_one(user)
        return user

    def createAccessToken(self):
        expiresDelta = timedelta(
            minutes=int(self.config['AUTHENTICATOR_ACCESS_TOKEN_EXPIRE_MINUTES']))
        
        if expiresDelta:
            expire = datetime.now(timezone.utc) + expiresDelta
        else:
            expire = datetime.now(timezone.utc) + timedelta(minutes=15)
            
        encoded_jwt = jwt.encode(
            {"exp": expire}, self.config['AUTHENTICATOR_SECRET_KEY'], algorithm=self.config['AUTHENTICATOR_ALGORITHM'])
        return encoded_jwt

    def authenticateUser(self, body):
        user = self.getUser(body)
        if not user:
            return False
        
        if not self.verifyPassword(body.password.encode('utf-8') , user['password']):
            return False
        
        return user
