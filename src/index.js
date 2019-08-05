import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const gameEngine = (gameDescr, gameCons) => {
  console.log('Welcome to the Brain Games');
  console.log(`${gameDescr} \n`);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${playerName}! \n`);

  const numberOfRounds = 3;
  for (let i = 0; i <= numberOfRounds; i += 1) {
    const constructor = gameCons();
    const askQuestion = car(constructor);
    const corAnswer = cdr(constructor);
    console.log(`Question: ${askQuestion}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (String(corAnswer) === String(playerAnswer)) {
      console.log('Correct');
      if (i === numberOfRounds) {
        console.log(`Congratulations, ${playerName}!`);
      }
    } else if (String(corAnswer) !== String(playerAnswer)) {
      i = numberOfRounds;
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${corAnswer}. \r
Let's try again, ${playerName}!`);
    }
  }
};

export default gameEngine;

export { randomNumber };
