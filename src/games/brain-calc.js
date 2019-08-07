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
    default:
      return x * y;
  }
};

const getCalcGame = () => {
  const number1 = randomNumber(1, 30);
  const number2 = randomNumber(1, 10);
  const randomOperation = mathOperations.charAt(randomNumber(1, mathOperations.length));
  const question = `${number1} ${randomOperation} ${number2}`;
  const correctAnswer = getTaskResult(number1, number2, randomOperation);

  return cons(question, correctAnswer);
};

export default () => gameEngine(description, getCalcGame);
