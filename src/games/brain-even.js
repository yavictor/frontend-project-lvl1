#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import gameEngine, { isEven, randomNumber } from '..';

const description = 'Answer "yes" if number even otherwise answer "no". \n';

const isEvenGame = () => {
  const question = randomNumber(0, 100);
  const correctAnswer = isEven(question);

  return cons(question, correctAnswer);
};

gameEngine(description, isEvenGame);
