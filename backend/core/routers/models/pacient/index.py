from pydantic import BaseModel
from typing import List, Optional

class Evolution(BaseModel):
    s: str = ""
    data: str = ""
    estado: str = ""
    conduta: str = ""
    eva_if: str = ""
    intercorrencias: str = ""
    ass: str = ""

class Info(BaseModel):
    endereco: str = ""
    profissao: str = ""
    diagnostico: str = ""
    patologias_associadas: str = ""
    queixa_principal: str = ""
    etiologia: str = ""
    sinais: str = ""
    sintomas: str = ""
    obs: str = ""
    inicio: str = ""
    melhora: str = ""
    piora: str = ""
    cadeira_anterior: List[str] = []
    cadeira_posterior: List[str] = []
    alongamentos: str = ""
    tracao: str = ""
    pompagem: str = ""
    lb_digito_comp: str = ""
    conduta_cadeira_anterior: List[str] = []
    conduta_cadeira_posterior: List[str] = []
    consciencia_corporal: str = ""
    adams_gibosidades: str = ""
    adams_zonasPlanas: str = ""
    ca: str = ""
    cp: str = ""
    escoliose: str = ""
    avaliador: str = ""
    crefito: str = ""
    data: str = ""
    evolucao: List[Evolution] = []

class Document(BaseModel):
    id: str = ""
    type: str = ""
    infos: Info = None

class Pacient(BaseModel):
    id: str = ""
    name: str = ""
    cpf: str = ""
    birthDate: str = ""
    phone: str = ""
    email: str = ""
    docs: List[Document] = None
