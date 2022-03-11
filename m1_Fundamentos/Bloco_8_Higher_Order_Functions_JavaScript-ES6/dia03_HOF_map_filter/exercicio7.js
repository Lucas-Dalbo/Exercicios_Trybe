const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
function authorWith3DotsOnName(arr) {
  // escreva seu código aqui
  return arr.filter((element) => element.author.name.replace(/[^.]/g,'').length === 3).map((element) => element.name)[0];
}

console.log(authorWith3DotsOnName(books))
// filter encontra o autor com 3 iniciais e retorna uma array que contém um objeto e as informações;
// map pega esse objeto e transforma em umaa array contendo uma string com o nome do livro;
// A string da array map é retornada devido o idetificador [0].
// replace(/[^?.]/g,'') = substitui tudo da string que não seja uma '.' (ponto) por vazio, deixando apenas os pontos.