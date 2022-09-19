class Person {
  protected _name: string;
  protected _birthDate: Date;

  constructor(
    name: string,
    birthDate: string,
  ) {
    const birth = this.validateBirth(birthDate);
    this.validateName(name);

    this._name = name;
    this._birthDate = birth;
  }

  get name() {
    return this._name;
  }

  get birthDate() {
    return this._birthDate;
  }

  setName(value: string): void {
    this.validateName(value);
    this._name = value;
  }

  setBirthDate(value: string): void {
    const birth = this.validateBirth(value);
    this._birthDate = birth;
  }

  private validateBirth(value: string): Date {
    const birth = new Date(value);

    if (isNaN(birth.getDate())) throw new Error ('INVALID_DATE_TYPE')
    if (birth.getTime() >=  Date.now()) throw new Error('INVALID_DATE_TIME');
    if (this.getYears(Date.now() - birth.getTime()) > 120) throw new Error('INVALID_AGE');

    return birth;
  }

  private validateName(value: string): void {
    if (value.length <= 2) throw new Error('INVALID_LENGTH_NAME');
  }

  // Ajuda com Date: https://www.w3schools.com/js/js_date_methods.asp
  private getYears(value: number): number {
    const seconds = value / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;
    const weeks = days / 7;
    const months = weeks / 4.345
    const years = months / 12;
  
    return years;
  };
}

export default Person;

// const p1 = new Person('Anne', '10/21/1997');
// const p2 = new Person('Pedro', '12/12/1973');

// console.log(p1);
// console.log(p2);