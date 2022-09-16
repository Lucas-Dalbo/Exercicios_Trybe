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

  public somaNotas(): number {
    const provas = [this._prova01, this._prova02, this._prova03, this._prova04]
      .reduce((acc, crr) => crr === null ? acc as number + 0 : acc as number + crr  , 0);
    
    const trabalhos = [this._trabalho01, this._trabalho02]
      .reduce((acc, crr) => crr === null ? acc as number + 0 : acc as number + crr  , 0);

    return (provas as number) + (trabalhos as number);
  }

  public media(): string {
    const nota = this.somaNotas();
    return (nota / 6).toFixed(1);
  }
}

const pedrin = new Estudante('Matemática', 'Pedro', 10, 7, 5, 7, 5, 4);

console.log(pedrin);

console.log(pedrin.somaNotas());
console.log(pedrin.media());