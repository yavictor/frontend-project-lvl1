import { cons } from '@hexlet/pairs';
import gameEngine, { randomNumber } from '..';

const description = 'What is the result of the expression? \n';

const number1 = randomNumber(1, 30);
const number2 = randomNumber(1, 10);
const operations = '+-*';
const expression = mathOperations.charAt(randomNumber(1, 3));

const calcGame = () => {
  const randomExpression = `${number1} ${expression} ${number2}`;
  const randomExpressionResult = (x, y, expressionType) => {
    switch (expressionType) {
      case '-':
        return x - y;
      case '+':
        return x + y;
      default:
        return x * y;
    }
  };
  const correctAnswer = randomExpressionResult(number1, number2, expression);

  return cons(randomExpression, correctAnswer);
};

const brainCalc = () => gameEngine(description, calcGame);
export default brainCalc;
