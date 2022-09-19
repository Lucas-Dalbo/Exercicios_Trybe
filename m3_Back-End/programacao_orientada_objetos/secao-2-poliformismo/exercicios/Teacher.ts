import Employee from './Employee';
import Subject from './Subject';

class Teacher extends Employee {
  private _subject: Subject;

  constructor(name: string, birthDate: string, subject: Subject, salary: number) {
    super(name, birthDate, salary);
    this._subject = subject;
  }

  public get subject() { return this._subject };

  public setSubject(value: Subject) { this._subject = value};

  public generateEnrollment(): string {
    const result = String(Date.now() * (Math.random() +1)).replace(/\W/g, '');
    return `TEACHER:${result}`;
  }

  public setEnrollment(value: string): void {
    if (value.length < 16) throw new Error('Registro precisa ter pelo menos 16 caracteres');
    this.setEnrollment(`TEACHER:${value}`);
  }
}

export default Teacher;

const teacher = new Teacher('Samara', '09/15/1990', new Subject('Inglês'), 2500);

console.log(teacher);