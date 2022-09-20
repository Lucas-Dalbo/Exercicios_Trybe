import Enrollable from './Enrollable';
import Person from './Person';

class Employee extends Person implements Enrollable {
  protected _salary: number;
  protected _admissionDate: Date;
  private _enrollment: string;

  constructor(name: string, birthDate: string, salary: number) {
    super(name, birthDate);

    if (salary <= 0) throw new Error('Salário não pode ser zero');

    this._salary = salary;
    this._admissionDate = new Date(Date.now());
    this._enrollment = this.generateEnrollment();
  }

  public generateEnrollment(): string {
    const result = String(Date.now() * (Math.random() +1)).replace(/\W/g, '');
    return `EMPLOYEE:${result}`;
  }

  public get salary() { return this._salary }
  public get admission() { return this._admissionDate }
  public get enrollment() { return this._enrollment }

  public setSalary(value: number) {
    if (value <= 0) throw new Error('Salário não pode ser zero');
    this._salary = value;
  }

  public setAdmission(value: string) {
    const date = new Date(value);
    if (date.getTime() - Date.now() > 0) throw new Error('Data de admissão não pode ser no futuro');
    this._admissionDate = date;
  }

  public setEnrollment(value: string) {
    if (value.length < 16) throw new Error('Registro precisa ter pelo menos 16 caracteres');
    this._enrollment = `EMPLOYEE:${value}`;
  }
}

export default Employee;