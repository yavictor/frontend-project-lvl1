import { cons } from '@hexlet/pairs';
import gameEngine from '..';
import randomNumber from '../utils';

const description = 'What is the result of the expression?';

const mathOperations = '+-*';

const getTaskResult = (x, y, operation) => {
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
  const number1 = randomNumber(1, 30);
  const number2 = randomNumber(1, 10);
  const operation = mathOperations.charAt(randomNumber(0, mathOperations.length));
  const question = `${number1} ${operation} ${number2}`;
  const correctAnswer = String(getTaskResult(number1, number2, operation));

  return cons(question, correctAnswer);
};

export default () => gameEngine(description, getGameData);
