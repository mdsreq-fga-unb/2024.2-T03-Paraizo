from fastapi import FastAPI
from core.routers.schemas.index import subapp

app = FastAPI()

@app.get('/')
def main():
    return {'message': 'hello world'}

app.mount('/api', subapp)

if __name__ == "__main__":
    main()