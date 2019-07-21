#!/usr/bin/env node
import askPlayerName, { askAnswer } from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no". \n');

const playerName = askPlayerName();
console.log(`Hello, ${playerName}! \n`);

const isEven = num => ((num % 2 === 0) ? 'yes' : 'no');

const isEvenGame = () => {
  let answer = null;
  let number = 0;
  let i = 1;
  const askNumber = () => {
    number = Math.floor(Math.random() * (100 - 1)) + 1;
    console.log(`Question: ${number}`);
    answer = askAnswer();
  };
  const askNewNumber = () => {
    askNumber();
    if (answer !== isEven(number)) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${isEven(number)}. \r
Let's try again, ${playerName}!`);
    } if (answer === isEven(number) && i === 3) {
      console.log(`Correct! \nCongratulations ${playerName}!`);
    } if (answer === isEven(number) && i < 3) {
      console.log('Correct!');
      i += 1;
      askNewNumber();
    }
  };
  askNewNumber();
};
isEvenGame();
