import { cons } from '@hexlet/pairs';
import gameEngine, { randomNumber } from '..';

const description = 'What number is missing in the progression? \n';

const progressionGame = () => {
  const number1 = randomNumber(1, 30);
  const progressionStep = randomNumber(2, 6);
  const missingNumberPosition = randomNumber(0, 9);
  const createProgression = (from, progressStep, missingNumber) => {
    let progressionLine = '';
    const progressionLimit = progressStep * 10 + from;
    for (let i = from; i < progressionLimit; i += progressionStep) {
      if (i === missingNumber * progressStep + from) {
        progressionLine += '.. ';
      } else progressionLine += `${i} `;
    }
    return progressionLine;
  };
  const correctAnswer = missingNumberPosition * progressionStep + number1;
  const runProgression = createProgression(number1, progressionStep, missingNumberPosition);
  return cons(runProgression, correctAnswer);
};

const brainProgression = () => gameEngine(description, progressionGame);
export default brainProgression;
