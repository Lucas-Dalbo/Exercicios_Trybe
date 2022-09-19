import Person from './Person';

class Estudante extends Person {
  private _enrollment: string;
  private _examsGrades: number[];
  private _worksGrade: number[];

  constructor (
    nome: string,
    birthDate: string,
    examsGrades?: number[],
    worksGrade?: number[],
  ) {
    super(nome, birthDate);
    this._enrollment = this.generateEnrollment();

    this._examsGrades = [];
    if (examsGrades) this.setExamsGrades(examsGrades)

    this._worksGrade = [];
    if (worksGrade) this.setWorksGrades(worksGrade);
  }

  private generateEnrollment(): string {
    const result = String(Date.now() * (Math.random() +1)).replace(/\W/g, '');

    return `STUDENT:${result}`;
  }

  get enrollment() {
    return this._enrollment;
  }

  get examsGrades() {
    return this._examsGrades;
  }

  get worksGrade() {
    return this._worksGrade;
  }

  public setEnrollment(value: string): void {
    if (value.length < 16) throw new Error('INVALID_ENROLLMENT_LENGTH');

    this._enrollment = `STUDENT:${value}`;
  }

  public setExamsGrades(value: number[]): void  {
    if (value.length > 4) throw new Error('INVALID_EXAMS_LENGTH');

    this._examsGrades = value;
  }

  public setWorksGrades(value: number[]): void {
    if (value.length > 2) throw new Error('INVALID_WORKS_LENGTH');

    this._worksGrade = value;
  }

  public sumGrades(): number {
    const exams = this._examsGrades.reduce((acc, crr) => acc + crr, 0);
    const works = this._worksGrade.reduce((acc, crr) => acc + crr, 0);

    return exams + works;
  }

  public sumAverageGrade(): string {
    const soma = this.sumGrades();
    let quant = this._examsGrades.length + this._worksGrade.length;
    if (quant === 0) quant = 1;

    return (soma / quant).toFixed(1);
  }
}

const pedrin = new Estudante('Pedro', '07/01/2002');
const anne = new Estudante('Anne', '10/21/1997', [8, 9, 7, 7], [10, 9]);

console.log('antes:', pedrin);

pedrin.setExamsGrades([4, 3, 5, 8]);
pedrin.setWorksGrades([10, 8]);
pedrin.setEnrollment('PedrinZikaTopDaEscola')

console.log('depois:', pedrin);
console.log(pedrin.sumGrades());
console.log(pedrin.sumAverageGrade());

console.log(anne);
console.log(anne.sumGrades());
console.log(anne.sumAverageGrade());