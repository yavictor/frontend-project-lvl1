import readlineSync from 'readline-sync';

const askPlayerName = () => readlineSync.question('May I have your name? ');

const askAnswer = () => readlineSync.question('Your answer: ');

const randomNumber = Math.floor(Math.random() * (100 - 1)) + 1;

export default askPlayerName;

export { askAnswer, randomNumber };
