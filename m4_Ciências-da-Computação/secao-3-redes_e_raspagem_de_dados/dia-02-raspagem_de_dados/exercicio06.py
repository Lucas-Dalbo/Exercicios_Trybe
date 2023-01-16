# Executar db_constructor antes deste arquivo
from pymongo import MongoClient


category = input("Digite uma categoria: ")

with MongoClient() as client:
    db = client.library
    books = db.books
    search = books.find({"categories": {"$regex": f"^{category}$", "$options": "i"} })
    for book in search:
        print(book["title"])