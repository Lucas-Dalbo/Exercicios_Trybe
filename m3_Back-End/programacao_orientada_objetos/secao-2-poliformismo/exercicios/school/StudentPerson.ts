import Enrollable from '../Enrollable';
import Person from '../Person';
import EvaluationResult from './EvaluationResult';

class Student extends Person implements Enrollable {
  private _enrollment: string;
  private _evaluationResults: EvaluationResult[];

  constructor (
    nome: string,
    birthDate: string,
  ) {
    super(nome, birthDate);
    this._enrollment = this.generateEnrollment();
    this._evaluationResults = [];
  }

  public generateEnrollment(): string {
    const result = String(Date.now() * (Math.random() +1)).replace(/\W/g, '');

    return `STUDENT:${result}`;
  }

  get enrollment() { return this._enrollment }
  get evaluationResults() { return this._evaluationResults }

  public setEnrollment(value: string): void {
    if (value.length < 16) throw new Error('INVALID_ENROLLMENT_LENGTH');

    this._enrollment = `STUDENT:${value}`;
  }

  public setEvaluationResult(value: EvaluationResult): void  {
    this._evaluationResults.push(value);
  }

  public sumGrades(): number {
    const soma = this._evaluationResults.reduce((acc, crr) => acc + crr.score, 0);

    return soma;
  }

  public sumAverageGrades(): string {
    const soma = this.sumGrades();
    let quant = this._evaluationResults.length;
    if (quant === 0) quant = 1;

    return (soma / quant).toFixed(1);
  }
}

const student = new Student('Jacobino', '10/05/1990');

export default Student;