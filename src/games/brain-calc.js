import { cons } from '@hexlet/pairs';
import gameEngine, { randomNumber } from '..';

const description = 'What is the result of the expression? \n';

const number1 = randomNumber(1, 30);
const number2 = randomNumber(1, 10);
const operations = '+-*';
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

const brainCalc = () => gameEngine(description, calcGame);
export default brainCalc;
