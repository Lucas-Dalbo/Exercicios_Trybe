import requests
from parsel import Selector

BASE_URL = "http://books.toscrape.com/"
response = requests.get(BASE_URL + "catalogue/the-grand-design_405/index.html")
selector = Selector(text=response.text)

title = selector.css("h1::text").get()
price = selector.css("p.price_color::text").re_first(r"\d+\.\d{2}")

description = selector.css(".product_page > p::text").get()
sufixo = "...more"
if description.endswith(sufixo):
    description = description[:-len("...more")]

cover = BASE_URL + selector.css(".item > img::attr(src)").re_first(r"media\S+")

print(
  title,
  price,
  description,
  cover,
  sep="\n"
)