import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const gameEngine = (gameDescr, gameCons) => {
  console.log('Welcome to the Brain Games');
  console.log(`${gameDescr} \n`);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${playerName}! \n`);

  for (let i = 0; i <= 3; i += 1) {
    const constructor = gameCons();
    const askQuestion = car(constructor);
    const corAnswer = cdr(constructor);
    console.log(`Question: ${askQuestion}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (String(corAnswer) === String(playerAnswer)) {
      console.log('Correct');
      if (i === 3) {
        console.log(`Congratulations, ${playerName}!`);
      }
    } else if (String(corAnswer) !== String(playerAnswer)) {
      i = 3;
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${corAnswer}. \r
Let's try again, ${playerName}!`);
    }
  }
};

export default gameEngine;

export { randomNumber };
