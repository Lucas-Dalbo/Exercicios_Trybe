import React from "react";
import './Pokemon.css';

class Pokemom extends React.Component {
  render(){
    const { name, type, averageWeight, image } = this.props.pokeinfo;
    return(
      <div className="pokemon">
        <div className="poke-data">
          <p>{name}</p>
          <p>Type: {type}</p>
          <p>Average weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
        <img src={image} alt="Pokemon" className="poke-img" />
      </div>
    );
  }
}

export default Pokemom;
