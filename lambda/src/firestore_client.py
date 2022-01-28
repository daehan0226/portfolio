from firebase_admin import initialize_app, credentials, firestore

from config import config


class FirestoreClient:
    cred = credentials.Certificate(config["credentials_path"])
    app = initialize_app(cred)
    db = firestore.client(app=app)

    @classmethod
    def get(cls, collection_name):
        return cls.db.collection(collection_name).stream()

    @classmethod
    def upsert(cls, collection_name, _id, data):
        cls.db.collection(collection_name).document(_id).set(data)
