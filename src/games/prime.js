import { cons } from '@hexlet/pairs';
import gameEngine from '..';
import randomNumber from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < Math.floor(Math.sqrt(number)) + 1; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const isPrimeGame = () => {
  const number1 = randomNumber(1, 100);
  return cons(number1, isPrime(number1));
};

export default () => gameEngine(description, isPrimeGame);
