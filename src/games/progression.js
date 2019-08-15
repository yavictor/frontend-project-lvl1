import { cons } from '@hexlet/pairs';
import gameEngine from '..';
import randomNumber from '../utils';

const description = 'What number is missing in the progression?';

const progressionSize = 10;

const createQuestion = (progressionStart, progressStep, missingItemIndex, progressionLength) => {
  let progression = '';
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === missingItemIndex) {
      progression = `${progression}.. `;
    } else progression = `${progression}${progressionStart + progressStep * i} `;
  }
  return progression;
};

const getGameData = () => {
  const startElement = randomNumber(1, 30);
  const progressionStep = randomNumber(2, 6);
  const missingElementIndex = randomNumber(0, progressionSize - 1);
  const correctAnswer = String(missingElementIndex * progressionStep + startElement);
  const progression = createQuestion(startElement, progressionStep, missingElementIndex,
    progressionSize);
  return cons(progression, correctAnswer);
};

export default () => gameEngine(description, getGameData);
