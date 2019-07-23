import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';


const askPlayerName = () => readlineSync.question('May I have your name? ');

const askAnswer = () => readlineSync.question('Your answer: ');

const randomNumber = maxNum => Math.floor(Math.random() * (maxNum - 1));

const isEven = num => ((num % 2 === 0) ? 'yes' : 'no');

const gameEngine = (gameDescr, gameCons) => {
  console.log('Welcome to Brain Games');
  console.log(gameDescr);
  const playerName = askPlayerName();
  console.log(`Hello ${playerName}! \n`);

  for (let i = 0; i < 3; i += 1) {
    const constructor = gameCons();
    const askQuestion = car(constructor);
    const corAnswer = cdr(constructor);
    console.log(`Question: ${askQuestion}`);
    const playerAnswer = askAnswer();
    if (+corAnswer === +playerAnswer) {
      console.log('Correct');
    } else {
      i = 3;
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${corAnswer}. \r
  Let's try again, ${playerName}!`);
    }
  }
  console.log(`Congratulations, ${playerName}`);
};

export default gameEngine;

export {
  isEven, randomNumber,
};
