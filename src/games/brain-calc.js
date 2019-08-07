import { cons } from '@hexlet/pairs';
import gameEngine from '..';
import randomNumber from '../utils';

const description = 'What is the result of the expression?';

const number1 = randomNumber(1, 30);
const number2 = randomNumber(1, 10);
const mathOperations = '+-*';
const randomOperation = mathOperations.charAt(randomNumber(1, operations.length));

const calcGame = () => {
  const task = `${number1} ${randomOperation} ${number2}`;
  const taskResult = (x, y, operation) => {
    switch (operation) {
      case '-':
        return x - y;
      case '+':
        return x + y;
      default:
        return x * y;
    }
  };
  const correctAnswer = taskResult(number1, number2, randomOperation);

  return cons(task, correctAnswer);
};

export default () => gameEngine(description, calcGame);
