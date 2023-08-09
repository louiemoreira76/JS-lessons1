import prompt from 'prompt-sync';
const ler = prompt();
import { fatoraracao } from './fuction.js';

console.log('Olá digite um número para fatorar: ');

let numero = Number(ler());

let result = fatoraracao(numero);

console.log('O resultado dá fatoração é:'+result);      