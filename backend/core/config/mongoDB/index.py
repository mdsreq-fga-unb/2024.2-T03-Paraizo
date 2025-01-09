from dotenv import load_dotenv, dotenv_values
import os
from pymongo import MongoClient

load_dotenv()

class MongoDB:
    def __init__(self):
        self.config = dotenv_values(f".env.{os.getenv('PYTHON_AGRS')}")

    def connect(self, database, collection):
        client = MongoClient(self.config['MONGO_DB_URI'])
        return client[database][collection]