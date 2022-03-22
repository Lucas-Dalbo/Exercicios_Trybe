// Exercício 1
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  const jokeHtml = document.getElementById('jokeContainer');

  fetch(API_URL, myObject)
    .then(resposta => resposta.json())
    .then(data => jokeHtml.innerText = data.joke);
};

window.onload = () => fetchJoke();
