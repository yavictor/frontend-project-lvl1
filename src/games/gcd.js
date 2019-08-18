import { cons } from '@hexlet/pairs';
import gameEngine from '..';
import randomNumber from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const searchGcd = (num1, num2) => {
  if (num2 > num1) {
    return searchGcd(num2, num1);
  } if (num2 === 0) {
    return num1;
  } return searchGcd(num2, (num1 % num2));
};

const getGameData = () => {
  const number1 = randomNumber(1, 101);
  const number2 = randomNumber(1, 101);
  const question = `${number1} ${number2}`;
  const answer = String(searchGcd(number1, number2));

  return cons(question, answer);
};

export default () => gameEngine(description, getGameData);
