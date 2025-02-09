from core.routers.models.pacient.index import Pacient
from core.routers.functions.index import Functions

class Pacient:
    def __init__(self):
        self.Functions = Functions()
        pass

    def getPacient(self, body: Pacient):
        return self.Functions.Pacient.getPacient(body)

    def getAllPacient(self):
        return self.Functions.Pacient.getAllPacient()

    def setPacient(self, body: Pacient):
        return self.Functions.Pacient.setPacient(body)

    def putPacient(self, body: Pacient):
        return self.Functions.Pacient.putPacient(body)

    def deletePacient(self, body: Pacient):
        return self.Functions.Pacient.deletePacient(body)

