from core.routers.modules.authenticator.index import Authenticator
from core.routers.modules.pacient.index import Pacient

class Modules:
    def __init__(self):
        self.Authenticator = Authenticator() 
        self.Pacient = Pacient() 
    
    