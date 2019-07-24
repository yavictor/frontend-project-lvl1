#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import gameEngine, { randomMinMax } from '..';

const rules = 'What number is missing in the progression? \n';

const progressionGame = () => {
  const number1 = randomMinMax(1, 30);
  const progressionStep = randomMinMax(2, 6);
  const missingNumberPosition = randomMinMax(0, 9);
  const createProgression = (from, progressStep, missingNumber) => {
    let progressionStr = '';
    const progressionLimit = progressStep * 10 + from;
    for (let i = from; i < progressionLimit; i += progressionStep) {
      if (i === missingNumber * progressStep + from) {
        progressionStr += '.. ';
      } else progressionStr += `${i} `;
    }
    return progressionStr;
  };
  const correctAnswer = missingNumberPosition * progressionStep + number1;
  const runProgression = createProgression(number1, progressionStep, missingNumberPosition);
  return cons(runProgression, correctAnswer);
};

gameEngine(rules, progressionGame);
