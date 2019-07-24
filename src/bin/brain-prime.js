#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import gameEngine, { randomMinMax } from '..';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no". \n';

const isPrimeGame = () => {
  const number1 = randomMinMax(1, 100);
  const isPrime = (number) => {
    if (number < 2) {
      return false;
    }
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };
  return cons(number1, isPrime(number1));
};

gameEngine(rules, isPrimeGame);
