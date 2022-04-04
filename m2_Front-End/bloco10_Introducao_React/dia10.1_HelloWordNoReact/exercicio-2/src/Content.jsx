import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component{
  render(){
    return(
      <div>
        <ul>
        {conteudos.map((map, id) => <li key={id}>
          O conteúdo é: {map.conteudo} <br/>
          Status: {map.status}<br/>
          Bloco: {map.bloco}<br/>
          </li> )}
        </ul>
      </div>
    )
  }
}

export default Content;
