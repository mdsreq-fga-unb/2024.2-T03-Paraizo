from fastapi import FastAPI, Query
from typing import Annotated
from core.routers.modules.index import Modules
from core.routers.models.authenticator.index import User

app = FastAPI()

@app.get('')
def main(body: Annotated[User, Query()]):
    try:
        
        result = Modules().Authenticator.authenticate(body)
        
        response = {
            "message": "O usuário foi autenticado com sucesso",
            "status": 200,
            "result": result
        }
    except Exception as e:
        response = {
            "message": f"Erro não catalogado: {e}",
            "status": 500,
            "result": {}
        }
    finally:
        return response
    
@app.post('')
def main(body: User):
    try:
        result = Modules().Authenticator.registerUser(body)
        
        response = {
            "message": "O usuário foi criado com sucesso",
            "status": 200,
            "result": result
        }
    except Exception as e:
        response = {
            "message": f"Erro não catalogado: {e}",
            "status": 500,
            "result": {}
        }
    finally:
        return response