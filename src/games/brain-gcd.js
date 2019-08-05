import { cons } from '@hexlet/pairs';
import gameEngine, { randomNumber } from '..';

const description = 'Find the greatest common divisor of given numbers.';

const gcdSearch = (num1, num2) => {
  if (num2 > num1) {
    return gcdSearch(num2, num1);
  } if (num2 === 0) {
    return num1;
  } return gcdSearch(num2, (num1 % num2));
};

const gcdGame = () => {
  const number1 = randomNumber(1, 101);
  const number2 = randomNumber(1, 101);
  const gcdNumbers = `${number1} ${number2}`;
  const correctAnswer = gcdSearch(number1, number2);

  return cons(gcdNumbers, correctAnswer);
};

const brainGcd = () => gameEngine(description, gcdGame);
export default brainGcd;
