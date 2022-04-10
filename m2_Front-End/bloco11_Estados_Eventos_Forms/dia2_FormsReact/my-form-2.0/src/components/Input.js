import React from "react";
import "./Input.css";

class Input extends React.Component {
  render() {
    const { name, length, text } = this.props;

    return(
      <label className="input"> {text}
        <input
          type={'text'}
          name={name}
          maxLength={length}
          required
          >
        </input> 
      </label>
    )
  }
}

export default Input;
