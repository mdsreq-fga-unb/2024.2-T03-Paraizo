from fastapi import FastAPI
from core.routers.schemas.authenticator.index import app as authenticator

subapp = FastAPI()

subapp.include_router(authenticator.router, prefix='/authenticator')