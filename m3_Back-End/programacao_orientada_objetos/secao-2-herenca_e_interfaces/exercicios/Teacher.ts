import Employee from './Employee';
import Person from './Person';
import Subject from './Subject';

class Teacher extends Person implements Employee {
  public subject: Subject;
  public salary: number;
  public admissionDate: Date;
  public registration: string;

  constructor(name: string, birthDate: string, subject: Subject, salary: number) {
    super(name, birthDate);

    if (salary <= 0) throw new Error('Salário não pode ser zero');

    this.subject = subject;
    this.salary = salary;
    this.admissionDate = new Date(Date.now());
    this.registration = this.generateRegistration();
  }

  public generateRegistration(): string {
    const result = String(`TEACHER:${Date.now() * (Math.random() + 1)}`).replace(/\W/g, '');
    return result;
  }

  public setSubject(value: Subject) {
    this.subject = value;
  }

  public setSalary(value: number) {
    if (value <= 0) throw new Error('Salário não pode ser zero');
    this.salary = value;
  }

  public setAdmission(value: string) {
    const date = new Date(value);
    if (date.getTime() - Date.now() > 0) throw new Error('Data de admissão não pode ser no futuro');
    this.admissionDate = date;
  }

  public setRegistration(value: string) {
    if (value.length < 16) throw new Error('Registro precisa ter pelo menos 16 caracteres');
    this.registration = `TEACHER:${value}`;
  }
}

const teacher = new Teacher('Samara', '09/15/1990', new Subject('Inglês'), 2500);

console.log(teacher);