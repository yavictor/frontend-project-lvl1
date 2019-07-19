import readlineSync from 'readline-sync';

export const askPlayerName = () => readlineSync.question('May I have your name? ');
