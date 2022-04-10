import React from "react";
import Input from "./Input";
import estados from "../data";
import './Forms.css'

class Forms extends React.Component {
  constructor() {
    super()
    this.handleInfo = this.handleInfo.bind(this);
    this.onBlur = this.onBlur.bind(this);

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereço: '',
      cidade: '',
      estado: '',
      residencia: '',
      resumo: '',
      cargo: '',
      resumoCargo: ''
    }
  }

  onMouseOver(e) {
    if(e.target.classList.length === 0) {
      alert('Preencha com cuidado esta informação.')
    }
    e.target.className = "show"
  }

  onBlur({target}) {
    let { value } = target;
    const verificador = value.replace(/[^0-9]/g, '');
    if(verificador.length > 0) value = '';
    this.setState({
      cidade: value,
    })
  }

  handleInfo({ target }) {
    let {name, value} = target;
    if(name === "nome") value = value.toUpperCase();
    this.setState({
      [name]: value,
    })
  }

  render() {
    return(
      <form className="form">
        <legend>Dados Pessoais</legend>
        <fieldset className="container">
          <Input name="nome" length="40" text="Nome" value={this.state.nome} onChange={this.handleInfo} />
          <Input name="email" length="50" text="Email" onChange={this.handleInfo} />
          <Input name="cpf" length="11" text="CPF" onChange={this.handleInfo} />
          <Input name="endereço" length="200" text="Endereço" onChange={this.handleInfo} />

          <div className="cidadeEstado">
          <Input name="cidade" length="28" text="Cidade" value={this.state.cidade} onChange={this.handleInfo} onBlur={this.onBlur} />
          <label> {'Estado'}
            <select defaultValue="none" name="estado" onChange={this.handleInfo} required>
              <option value="none"></option>
              {estados.map((map)=> <option key={map} value={map}>{map}</option>)}
            </select>
          </label>
          </div>

          <div className="radio">
            <spam>{'Residência: '}</spam>
            <label> 
              <input type={'radio'} name="residencia" value={'Casa'} onChange={this.handleInfo} required></input>
              Casa
            </label>
            <label> 
              <input type={'radio'} name="residencia" value={'Apartamento'} onChange={this.handleInfo} required></input>
              Apartamento
            </label>
          </div>
        </fieldset>

        <legend>Último Emprego</legend>
        <fieldset className="container">
          <label className="text-container">
            Resumo do Curriculo
            <textarea name="resumo" maxLength={1000} required onChange={this.handleInfo}></textarea>
          </label>
          <label className="text-container">
            Cargo
            <textarea name="cargo" maxLength={40} required onMouseOver={this.onMouseOver} onChange={this.handleInfo}></textarea>
          </label>
          <label className="text-container">
            Descrição do Cargo
            <textarea name="resumoCargo" maxLength={500} required onChange={this.handleInfo}></textarea>
          </label>
        </fieldset>
      </form>
    );
  }
}

export default Forms;
