const meses = [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];


class Data {
  private _dia: number;
  private _mes: number;
  private _ano: number;

  private diaValidacao(dia: number) {
    if (dia < 1 || dia > 31 || !Number.isInteger(dia)) return false;
  }

  private mesValidacao(mes: number) {
    if (mes < 1 || mes > 12 || !Number.isInteger(mes)) return false;
  }

  private anoValidacao(ano: number) {
    if (!Number.isInteger(ano)) return false;
  }

  constructor(dia: number, mes: number, ano: number) {
    if (!this.diaValidacao(dia) || !this.mesValidacao(mes) || !this.anoValidacao(ano)) {
      this._dia = 1;
      this._mes = 1;
      this._ano = 1900;
    }

    this._dia = dia;
    this._mes = mes;
    this._ano = ano;
  }

  get dia() {
    return this._dia;
  }

  get mes() {
    return this._mes;
  }

  get ano() {
    return this._ano;
  }

  public getMonthName(): string {
    return meses[11];
  };

  // Para saber se o ano é bissexto ou não:
  // https://mundoeducacao.uol.com.br/matematica/anos-bissextos.htm

  public isLeapYear(): boolean {
    const ano = this._ano.toString().slice(-2);

    if( this._ano % 400 === 0) return true;
    if( ano !== '00' && this._ano % 4 === 0) return true;

    return false;
  }

  public compare(data: Data) {
    const difDia = this._dia - data.dia;
    const difMes = this._mes - data.mes;
    const difAno = this._ano - data.ano;

    if (difDia === 0 && difMes === 0 && difAno === 0) return 0;

    if (difAno > 0) return 1;
    if (difAno === 0 && difMes > 0) return 1;
    if (difAno === 0 && difMes === 0 && difDia > 0) return 1;

    if (difAno < 1) return -1;
    if (difAno === 0 && difMes < 0) return -1;
    if (difAno === 0 && difMes === 0 && difDia < 0) return -1;
  }
}

const novaData = new Data(5, 11, 2000);

console.log(novaData);
console.log(novaData.getMonthName());
console.log(novaData.isLeapYear());

console.log(novaData.compare(new Data(5, 11, 2000)));
console.log(novaData.compare(new Data(1, 11, 2000)));
console.log(novaData.compare(new Data(1, 10, 2000)));
console.log(novaData.compare(new Data(1, 10, 1999)));
console.log(novaData.compare(new Data(10, 11, 2000)));
console.log(novaData.compare(new Data(10, 12, 2000)));
console.log(novaData.compare(new Data(10, 12, 2022)));