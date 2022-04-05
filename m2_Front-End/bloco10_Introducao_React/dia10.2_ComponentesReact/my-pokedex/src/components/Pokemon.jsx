import React, { Component } from "react";

class Pokemom extends Component {
  render(){
    const { name, type, averageWeight, image } = this.props;

    return(
      <div>
        <div>
          <p>{name}</p>
          <p>Type: {type}</p>
          <p>Average weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
        <img src={image} alt="Pokemon" />
      </div>
    );
  }
}

export default Pokemom;
