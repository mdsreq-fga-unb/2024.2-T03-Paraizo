from core.routers.functions.authenticator.index import Authenticator
from core.routers.functions.pacient.index import Pacient

class Functions:
    def __init__(self):
        self.Authenticator = Authenticator()
        self.Pacient = Pacient()