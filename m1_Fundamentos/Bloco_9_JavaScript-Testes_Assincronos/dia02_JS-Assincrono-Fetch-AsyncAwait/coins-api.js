// Exercicio 2

const showCoins = async (list) => {
  list
  .filter((filtro) => filtro.rank <= 10)
  .forEach((coin) => {
  const newLi = document.createElement('li');
  newLi.innerText = `${coin.name} (${coin.symbol}): ${coin.priceUsd} USD`
  myList.appendChild(newLi);
  });
};

const coinList = () => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  return fetch(`https://api.coincap.io/v2/assets`, requestOptions)
  .then(response => response.json())
  .then(data => {
    const lista = data.data;
    console.log(lista);
    showCoins(lista);
  })
  .catch(error => console.log('error', error));

};

const myList = document.querySelector('#coinContainer');

coinList();
