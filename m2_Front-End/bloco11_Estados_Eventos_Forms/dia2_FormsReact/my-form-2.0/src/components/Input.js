import React from "react";
import PropTypes from 'prop-types';
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

Input.propTypes = {
  name: PropTypes.string,
  length: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.string,
}

export default Input;
