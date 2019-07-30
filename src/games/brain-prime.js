#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import gameEngine, { randomNumber } from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no". \n';

const isPrimeGame = () => {
  const number1 = randomNumber(1, 100);
  const isPrime = (number) => {
    if (number < 2) {
      return false;
    }
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };
  return cons(number1, isPrime(number1));
};

gameEngine(description, isPrimeGame);
