from fastapi import FastAPI, HTTPException
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request
from dotenv import load_dotenv, dotenv_values
import os

load_dotenv()
API_KEY = os.getenv("API_KEY")

config = dotenv_values(f".env.{os.getenv('PYTHON_AGRS')}")

class APIKeyMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        api_key = request.headers.get("X-API-KEY")
        
        if api_key != API_KEY:
            raise HTTPException(status_code=403, detail="API Key inválida.")
        
        response = await call_next(request)
        return response

