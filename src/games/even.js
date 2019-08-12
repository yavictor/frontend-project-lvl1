import { cons } from '@hexlet/pairs';
import gameEngine from '..';
import randomNumber from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const getGameData = () => {
  const question = randomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};

export default () => gameEngine(description, getGameData);
