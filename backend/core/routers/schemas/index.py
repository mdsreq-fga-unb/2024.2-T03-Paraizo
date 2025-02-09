from fastapi import FastAPI
from core.routers.schemas.authenticator.index import app as authenticator
from core.routers.schemas.pacient.index import app as pacient

subapp = FastAPI()

subapp.include_router(authenticator.router, prefix='/authenticator')
subapp.include_router(pacient.router, prefix='/pacient')