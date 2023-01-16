import requests
import json

response = requests.get("https://api.github.com/users")
data_list = json.loads(response.text)

for user in data_list:
    print(user["login"], user["url"])
