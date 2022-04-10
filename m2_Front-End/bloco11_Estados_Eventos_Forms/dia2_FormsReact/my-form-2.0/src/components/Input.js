import React from "react";
import "./Input.css";

class Input extends React.Component {
  render() {
    const { name, length, text, onChange, value, onBlur } = this.props;

    return(
      <label className="input"> {text}
        <input
          type={'text'}
          name={ name }
          maxLength={ length }
          onChange={ onChange }
          onBlur={ onBlur }
          value={ value }
          required
          >
        </input> 
      </label>
    )
  }
}

export default Input;
