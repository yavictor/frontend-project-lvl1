import { cons } from '@hexlet/pairs';
import gameEngine from '..';
import randomNumber from '../utils';

const description = 'What number is missing in the progression?';

const length = 10;

const createQuestion = (start, step, missingIndex, progressionLength) => {
  let progression = '';
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === missingIndex) {
      progression = `${progression}.. `;
    } else progression = `${progression}${start + step * i} `;
  }
  return progression.trim();
};

const getGameData = () => {
  const init = randomNumber(1, 30);
  const step = randomNumber(2, 6);
  const missingElementIndex = randomNumber(0, length - 1);
  const answer = String(missingElementIndex * step + init);
  const question = createQuestion(init, step, missingElementIndex, length);
  return cons(question, answer);
};

export default () => gameEngine(description, getGameData);
