import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

const stepsCount = 3;

export default (gameDescription, gameData) => {
  console.log('Welcome to the Brain Games');
  console.log(`${gameDescription} \n`);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${playerName}! \n`);

  for (let i = 0; i < stepsCount; i += 1) {
    const roundData = gameData();
    const question = car(roundData);
    const correctAnswer = cdr(roundData);
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== playerAnswer) {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      return console.log(`Let's try again, ${playerName}!`);
    }
    console.log('Correct');
  }
  return console.log(`Congratulations, ${playerName}!`);
};
