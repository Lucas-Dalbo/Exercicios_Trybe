import Evaluation from './Evaluation';

class EvaluationResult {
  private _evaluation: Evaluation;
  private _score: number;

  constructor(evaluation: Evaluation, score: number) {
    this._evaluation = evaluation;
    this._score = this.scoreValidation(score);
  }

  private scoreValidation(score: number) {
    if (score < 0) throw new Error('A nota não pode ser menor que zero');
    if (score > this._evaluation.score) throw new Error('A nota não pode ser maior que a nota de avaliação');
    return score;
  }

  public get evaluation() { return this._evaluation }
  public get score() { return this._score }

  public setScore(value: number) { this._score = this.scoreValidation(value) }
  public setEvaluation(value: Evaluation, score: number) {
    this._evaluation = value;
    this._score = this.scoreValidation(score);
  }  
}

export default EvaluationResult;