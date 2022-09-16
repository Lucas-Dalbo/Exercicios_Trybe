class Estudante {
  private _matricula: string;
  private _nome: string;
  private _prova01: number | null;
  private _prova02: number | null;
  private _prova03: number | null;
  private _prova04: number | null;
  private _trabalho01: number| null;
  private _trabalho02: number | null;

  constructor (
    matricula: string,
    nome: string,
    prova01: number | null = null,
    prova02: number | null = null,
    prova03: number | null = null,
    prova04: number | null = null,
    trabalho01: number | null = null,
    trabalho02: number | null = null,
  ) {
    this._matricula = matricula;
    this._nome = nome;
    this._prova01 = prova01;
    this._prova02 = prova02;
    this._prova03 = prova03;
    this._prova04 = prova04;
    this._trabalho01 = trabalho01;
    this._trabalho02 = trabalho02;
  }
}

const pedrin = new Estudante('Matemática', 'Pedro');

console.log(pedrin);