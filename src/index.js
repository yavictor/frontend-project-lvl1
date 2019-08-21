import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

const stepsCount = 3;

export default (gameQuestion, getGameData) => {
  console.log('Welcome to the Brain Games');
  console.log(`${gameQuestion}\n`);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${playerName}!\n`);

  for (let i = 0; i < stepsCount; i += 1) {
    const roundData = getGameData();
    const question = car(roundData);
    const correctAnswer = cdr(roundData);
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== playerAnswer) {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    console.log('Correct');
  }
  console.log(`Congratulations, ${playerName}!`);
};
