from fastapi import FastAPI, Query
from typing import Annotated
from core.routers.modules.index import Modules
import json
from bson import json_util
from core.routers.models.pacient.index import Pacient

app = FastAPI()

@app.get('')
def main(body: Annotated[Pacient, Query()]):
    try:
        result = Modules().Pacient.getPacient(body)
        result = json.loads(json_util.dumps(result))

        response = {
            "message": "O paciente foi recuperado com sucesso",
            "status": 200,
            "result": result
        }
    except Exception as e:
        response = {
            "message": f"Erro: {e}",
            "status": 500,
            "result": {}
        }
    finally:
        return response

@app.get('/all')
def main():
    try:
        result = Modules().Pacient.getAllPacient()
        result = json.loads(json_util.dumps(result))

        response = {
            "message": "O paciente foi recuperado com sucesso",
            "status": 200,
            "result": result
        }
    except Exception as e:
        response = {
            "message": f"Erro: {e}",
            "status": 500,
            "result": []
        }
    finally:
        return response

@app.post('')
def main(body: Pacient):
    try:
        result = Modules().Pacient.setPacient(body)
        result = json.loads(json_util.dumps(result))

        response = {
            "message": "O paciente foi cadastrado com sucesso",
            "status": 200,
            "result": result
        }
    except Exception as e:
        response = {
            "message": f"Erro: {e}",
            "status": 500,
            "result": {}
        }
    finally:
        return response

@app.put('')
def main(body: Pacient):
    try:

        result = Modules().Pacient.putPacient(body)
        result = json.loads(json_util.dumps(result))
        response = {
            "message": "O paciente foi editado com sucesso",
            "status": 200,
            "result": result
        }
    except Exception as e:
        response = {
            "message": f"Erro: {e}",
            "status": 500,
            "result": {}
        }
    finally:
        return response

@app.delete('')
def main(body: Annotated[Pacient, Query()]):
    try:
        result = Modules().Pacient.deletePacient(body)
        result = json.loads(json_util.dumps(result))
        response = {
            "message": "O paciente foi deletado com sucesso",
            "status": 200,
            "result": result
        }
    except Exception as e:
        response = {
            "message": f"Erro: {e}",
            "status": 500,
            "result": {}
        }
    finally:
        return response
