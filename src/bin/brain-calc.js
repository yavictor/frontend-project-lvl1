#!/usr/bin/env node
import { car, cdr, cons } from '@hexlet/pairs';
import gameEngine, { isEven, randomNumber } from '..';

const rules = 'Answer "yes" if number even otherwise answer "no". \n';

const isEvenGame = () => {
  const number = randomNumber(100);
  const isAnswerCorrect = isEven(number);

  return cons(number, isAnswerCorrect);
};

gameEngine(rules, isEvenGame);
