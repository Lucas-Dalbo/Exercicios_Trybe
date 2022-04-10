import React from "react";
import Button from "./Button";
import './DataToSend.css'

class DataToSend extends React.Component{
  render() {
    const { nome, email, cpf, endereço, cidade, estado, residencia, resumo, cargo, resumoCargo, btnClick, btnSend } = this.props;

    return(
      <div className="modal-container">
        <div className="modal">
          <h2>Essas informações estão corretas?</h2>
          <p><b>{'Nome: '}</b>{nome}</p>
          <p><b>{'E-mail: '}</b>{email}</p>
          <p><b>{'CPF: '}</b>{cpf}</p>
          <p><b>{'Endereço: '}</b>{`${endereço} - ${cidade}/${estado}`}</p>
          <p><b>{'Residência: '}</b>{residencia}</p>
          <div>
            <b>{'Curriculo'}</b>
            <p>{resumo}</p>
          </div>
          <div>
            <b>{'Último Cargo'}</b>
            <p>{cargo}</p>
          </div>
          <div>
            <b>{'Resumo do Cargo'}</b>
            <p>{resumoCargo}</p>
          </div>
          <div className="btn-container">
            <Button type='button' name='CONFIRMAR' btnClick={btnSend} />
            <Button type='button' name='CORRIGIR' btnClick={btnClick} />
          </div>
        </div>      
      </div>
    );
  }
}

export default DataToSend;
