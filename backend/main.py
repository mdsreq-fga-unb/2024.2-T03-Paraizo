from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from core.routers.schemas.index import subapp
from dotenv import load_dotenv, dotenv_values
from core.config.api.index import APIKeyMiddleware
import os


load_dotenv()
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"], 
)

app.add_middleware(APIKeyMiddleware)

@app.get('/')
def main():
    return {'message': 'hello world'}

app.mount('/api', subapp)

if __name__ == "__main__":
    main()
