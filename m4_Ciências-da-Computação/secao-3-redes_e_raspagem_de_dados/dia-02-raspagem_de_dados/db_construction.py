import requests
from pymongo import MongoClient

response = requests.get("https://lms-assets.betrybe.com/lms/books.json")
content = response.json()

with MongoClient() as client:
    db = client.library
    db.books.drop()
    books = db.books
    db.books.insert_many(content)