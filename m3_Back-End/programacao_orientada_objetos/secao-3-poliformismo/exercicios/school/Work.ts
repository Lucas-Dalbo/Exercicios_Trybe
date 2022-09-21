import Evaluation from './Evaluation';
import Teacher from './Teacher';

class Work extends Evaluation {
  constructor(score: number, teacher: Teacher) {
    super(score, teacher);
  }

  scoreValidation(score: number): number {
    if (score < 0) throw new Error('A nota não pode ser menor que zero');
    if (score > 50) throw new Error('A nota de prova não pode ser maior que 50');
    return score;
  }
}

export default Work;