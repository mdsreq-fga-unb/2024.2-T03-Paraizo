from datetime import datetime, timedelta, timezone
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jwt.exceptions import InvalidTokenError
from passlib.context import CryptContext
from pydantic import BaseModel
from core.config.mongoDB.index import MongoDB
import jwt
import os
from core.routers.models.pacient.index import Pacient as PacientModel
from bson import ObjectId
from fastapi import HTTPException, status
from core.config.mongoDB.index import MongoDB
from core.routers.models.pacient.index import Pacient as PacientModel


class Pacient:
    def __init__(self):
        self.collection = MongoDB().connect('management', 'pacient')

    def getPacient(self, pacientData: PacientModel):
        pacient = self.collection.find_one({"_id": ObjectId(pacientData.id)})
        if not pacient:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Paciente não encontrado")
        return pacient

    def getAllPacient(self):
        return list(self.collection.find())

    def setPacient(self, pacient: PacientModel):
        if self.collection.find_one({"cpf": pacient.cpf}):
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="O Paciente já existe")
        self.collection.insert_one(pacient.dict())

        return list(self.collection.find())

    def putPacient(self, pacientData: PacientModel):
        pacient_id = ObjectId(pacientData.id)
        existing_pacient = self.collection.find_one({"_id": pacient_id})
        if not existing_pacient:
            return None
        result = self.collection.update_one(
            {"_id": pacient_id}, 
            {"$set": pacientData.dict(exclude={"id"})}
        )
        return self.collection.find_one({"_id": pacient_id})

    def deletePacient(self, pacientData: PacientModel):
        result = self.collection.delete_one({"_id": ObjectId(pacientData.id)})
        if result.deleted_count == 0:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Paciente não encontrado")

        return list(self.collection.find())

