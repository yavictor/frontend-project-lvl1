import { cons } from '@hexlet/pairs';
import gameEngine from '..';
import randomNumber from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => ((num % 2 === 0) ? true : false);

const evenGame = () => {
  const question = randomNumber(0, 100);
  const correctAnswer = isEven(question);

  return cons(question, correctAnswer);
};

const brainEven = () => gameEngine(description, evenGame);
export default brainEven;
