import json
import csv
from collections import Counter

with open("books.json") as file:
    data = json.load(file)

list = [book["categories"] for book in data if len(book["categories"]) > 0]

book_quant = len(list)

all_categories = []
for elem in list:
    for cat in elem:
      all_categories.append(cat)

counter = dict(Counter(all_categories))

percetage = {}
for key in counter:
    percetage[key] = (counter[key] / book_quant) * 100


with open("porcentagem_books.csv", "w", encoding="utf8") as file:
    headers = ["category", "quantity_in_%"]

    writer = csv.DictWriter(file, headers)

    writer.writeheader()

    for name, perc in percetage.items():
        row = {"category": name, "quantity_in_%": perc }
        writer.writerow(row)