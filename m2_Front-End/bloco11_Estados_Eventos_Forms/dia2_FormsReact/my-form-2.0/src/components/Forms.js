import React from "react";
import Input from "./Input";
import estados from "../data";
import './Forms.css'

class Forms extends React.Component {
  render() {
    return(
      <form className="form">
        <legend>Dados Pessoais</legend>
        <fieldset className="container">
          <Input name="nome" length="40" text="Nome" />
          <Input name="email" length="50" text="Email" />
          <Input name="cpf" length="11" text="CPF" />
          <Input name="endereço" length="200" text="Endereço" />

          <div className="cidadeEstado">
          <Input name="cidade" length="28" text="Cidade" />
          <label> {'Estado'}
            <select defaultValue="none" name="estado" required>
              <option value="none"></option>
              {estados.map((map)=> <option key={map} value={map}>{map}</option>)}
            </select>
          </label>
          </div>

          <div className="radio">
            <spam>{'Residência: '}</spam>
            <label> 
              <input type={'radio'} name="residencia"></input>
              Casa
            </label>
            <label> 
              <input type={'radio'} name="residencia"></input>
              Apartamento
            </label>
          </div>
        </fieldset>

        <legend>Último Emprego</legend>
        <fieldset className="container">
          <label className="text-container">
            Resumo do Curriculo
            <textarea name="resumo" maxLength={1000} required></textarea>
          </label>
          <label className="text-container">
            Cargo
            <textarea name="resumo" maxLength={40} required></textarea>
          </label>
          <label className="text-container">
            Descrição do Cargo
            <textarea name="cargo" maxLength={500} required></textarea>
          </label>
        </fieldset>
      </form>
    );
  }
}

export default Forms;
