class Subject {
  private _name: string;

  constructor(name: string) {
    this.nameValidation(name);

    this._name = name;
  }

  private nameValidation(value: string): void {
    if (value.length < 3) throw new Error('INVALID_NAME_LENGTH');
  }

  get name() {
    return this._name;
  }

  set name(value: string) {
    this.nameValidation(value);

    this._name = value;
  }
}

export default Subject;