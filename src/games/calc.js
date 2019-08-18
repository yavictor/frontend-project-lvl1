import { cons } from '@hexlet/pairs';
import gameEngine from '..';
import randomNumber from '../utils';

const description = 'What is the result of the expression?';

const mathOperations = '+-*';

const calculate = (x, y, operation) => {
  switch (operation) {
    case '-':
      return x - y;
    case '+':
      return x + y;
    case '*':
      return x * y;
    default:
      return null;
  }
};

const getGameData = () => {
  const a = randomNumber(1, 30);
  const b = randomNumber(1, 10);
  const operation = mathOperations.charAt(randomNumber(0, mathOperations.length - 1));
  const question = `${a} ${operation} ${b}`;
  const answer = String(calculate(a, b, operation));

  return cons(question, answer);
};

export default () => gameEngine(description, getGameData);
