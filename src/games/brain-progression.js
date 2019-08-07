import { cons } from '@hexlet/pairs';
import gameEngine from '..';
import randomNumber from '../utils';

const description = 'What number is missing in the progression?';

const progressionSize = 10;

const progressionGame = () => {
  const startNumber = randomNumber(1, 30);
  const progressionStep = randomNumber(2, 6);
  const missingNumberPosition = randomNumber(0, progressionSize - 1);
  const createProgression = (progressionStart, progressStep, missingNumber) => {
    let progressionLine = '';
    const progressionLimit = progressStep * progressionSize + progressionStart;
    for (let i = progressionStart; i < progressionLimit; i += progressionStep) {
      if (i === missingNumber * progressStep + progressionStart) {
        progressionLine = `.. `;
      } else progressionLine = `${i} `;
    }
    return progressionLine;
  };
  const correctAnswer = missingNumberPosition * progressionStep + startNumber;
  const runProgression = createProgression(progressionStart, progressionStep, missingNumberPosition);
  return cons(runProgression, correctAnswer);
};

export default () => gameEngine(description, progressionGame);
