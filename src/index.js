import readlineSync from 'readline-sync';

const askPlayerName = () => readlineSync.question('May I have your name? ');

export default askPlayerName;
