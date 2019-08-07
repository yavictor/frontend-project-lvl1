import { cons } from '@hexlet/pairs';
import gameEngine from '..';
import randomNumber from '../utils';

const description = 'What number is missing in the progression?';

const progressionSize = 10;

const progressionGame = () => {
  const startElement = randomNumber(1, 30);
  const progressionStep = randomNumber(2, 6);
  const missingElementIndex = randomNumber(0, progressionSize - 1);
  const createProgression = (progressionStart, progressStep, missingNumber) => {
    let progression = '';
    const progressionEnd = progressStep * progressionSize + progressionStart;
    for (let i = progressionStart; i < progressionEnd; i += progressionStep) {
      if (i === missingNumber * progressStep + progressionStart) {
        progression = `..`;
      } else progression = `${i} `;
    }
    return progression;
  };
  const correctAnswer = missingElementIndex * progressionStep + startElement;
  const runProgression = createProgression(startElement, progressionStep, missingElementIndex);
  return cons(runProgression, correctAnswer);
};

export default () => gameEngine(description, progressionGame);
