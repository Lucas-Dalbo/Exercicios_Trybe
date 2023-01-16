import requests


response = requests.get(
    "https://scrapethissite.com/pages/advanced/?gotcha=headers",
    headers={"User-Agent": "Chrome", "Accept": "text/html"}
)

# Teste para verificar se deu certo
assert "bot detected" not in response.text
