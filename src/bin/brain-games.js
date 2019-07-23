#!/usr/bin/env node
import { askPlayerName } from '..';

console.log('Welcome to the Brain Games! \n');
const playerName = askPlayerName();
console.log(`Hello, ${playerName}!`);
