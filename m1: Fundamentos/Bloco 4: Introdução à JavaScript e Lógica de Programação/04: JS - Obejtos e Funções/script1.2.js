let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

// Exercício 6:
console.log ("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama '" + leitor.livrosFavoritos[0].titulo+ "'.");

// Exercício 7:
leitor.livrosFavoritos.push( {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  } );

// Exercício 8:
console.log ("A " + leitor.nome + " " + leitor.sobrenome + " tem 2 livros favoritos, '" + leitor.livrosFavoritos[0].titulo + "' e '" + leitor.livrosFavoritos[1].titulo + "'.");
