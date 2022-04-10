import React from "react";
import Input from "./Input";
import Button from "./Button";
import estados from "../data";
import DataToSend from "./DataToSend";
import './Forms.css';

class Forms extends React.Component {
  constructor() {
    super()
    this.handleInfo = this.handleInfo.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.btnHandler = this.btnHandler.bind(this);
    this.btnSend = this.btnSend.bind(this);

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
      resumoCargo: '',
      btnClick: false,
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

  btnSend() {
    this.setState({
      nome: '',
      email: '',
      cpf: '',
      endereço: '',
      cidade: '',
      estado: '',
      residencia: '',
      resumo: '',
      cargo: '',
      resumoCargo: '',
      btnClick: false,
    });
    console.log('Enviou');
  }

  btnHandler(e) {
    // e.preventDefault();
    let btn = this.state.btnClick;
    if(btn === false) {
      this.setState({
        btnClick: true
      })
    } else {
      console.log('correção')
      this.setState({
        nome: '',
        email: '',
        cpf: '',
        endereço: '',
        cidade: '',
        estado: '',
        residencia: '',
        resumo: '',
        cargo: '',
        resumoCargo: '',
        btnClick: false,
      });
    }
  }

  render() {
    const { nome, email, cpf, endereço, cidade, estado, residencia, resumo, cargo, resumoCargo, btnClick } = this.state;
    let dados;


    if(btnClick === true) {
     dados = <DataToSend nome={nome} email={email} cpf={cpf} endereço={endereço} cidade={cidade} estado={estado} residencia={residencia} resumo={resumo} cargo={cargo} resumoCargo={resumoCargo} btnClick={this.btnHandler} btnSend={this.btnSend} />
    } else {
      dados = '';
    }
  
    return(
      <form className="form" onSubmit={this.btnHandler}>
        <legend>Dados Pessoais</legend>
        <fieldset className="container">
          <Input name="nome" length="40" text="Nome" value={nome} onChange={this.handleInfo} />
          <Input name="email" length="50" text="Email" value={email} onChange={this.handleInfo} />
          <Input name="cpf" length="11" text="CPF" value={cpf} onChange={this.handleInfo} />
          <Input name="endereço" length="200" text="Endereço" value={endereço} onChange={this.handleInfo} />

          <div className="cidadeEstado">
          <Input name="cidade" length="28" text="Cidade" value={cidade} onChange={this.handleInfo} onBlur={this.onBlur} />
          <label> {'Estado'}
            <select defaultValue={estado} name="estado" onChange={this.handleInfo} required>
              <option value="none"></option>
              {estados.map((map)=> <option key={map} value={map}>{map}</option>)}
            </select>
          </label>
          </div>

          <div className="radio">
            {'Residência: '}
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
            <textarea name="resumo" maxLength={1000} required value={resumo} onChange={this.handleInfo}></textarea>
          </label>
          <label className="text-container">
            Cargo
            <textarea name="cargo" maxLength={40} required value={cargo} onMouseOver={this.onMouseOver} onChange={this.handleInfo}></textarea>
          </label>
          <label className="text-container">
            Descrição do Cargo
            <textarea name="resumoCargo" maxLength={500} required value={resumoCargo} onChange={this.handleInfo}></textarea>
          </label>
        </fieldset>
        <Button type='submit' name={'ENVIAR'} />
        {dados}
      </form>
    );
  }
}

export default Forms;
