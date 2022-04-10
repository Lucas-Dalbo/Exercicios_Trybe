import React from 'react';

class Button extends React.Component {
  render() {
    const { name, type, btnClick } = this.props;

    return(
      <button type={type} onClick={btnClick} >{name}</button>
    );
  }
}

export default Button;
