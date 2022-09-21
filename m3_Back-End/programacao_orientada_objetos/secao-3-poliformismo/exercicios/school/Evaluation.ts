import Teacher from "./Teacher";

type types = 'prova' | 'trabalho'

abstract class Evaluation {
  protected _score: number;
  protected _teacher: Teacher;

  constructor(score: number, teacher: Teacher) {
    this._teacher = teacher;
    this._score = this.scoreValidation(score);
  }

  abstract scoreValidation(score: number): number; 

  public get teacher() { return this._teacher }
  public get score() { return this._score }

  public setTeacher(value: Teacher) { this._teacher = value }
  public setScore(value: number) { this._score = this.scoreValidation(value) }
}

export default Evaluation;