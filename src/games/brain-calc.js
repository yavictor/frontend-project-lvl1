#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import gameEngine, { randomNumber } from '..';

const rules = 'What is the result of the expression? \n';

const calcGame = () => {
  const number1 = randomNumber(30);
  const number2 = randomNumber(10);
  const values = '+-*';
  const expression = values.charAt(randomNumber(4));
  const randomExpression = `${number1} ${expression} ${number2}`;
  const randomExpressionResult = (x, y, exp) => {
    if (exp === '-') {
      return x - y;
    } if (exp === '+') {
      return x + y;
    } return x * y;
  };
  const correctAnswer = randomExpressionResult(number1, number2, expression);

  return cons(randomExpression, correctAnswer);
};

gameEngine(rules, calcGame);
