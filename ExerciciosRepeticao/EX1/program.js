import prompt from 'prompt-sync';
const ler = prompt();
import { somanaurais } from './fuction.js';

console.log('Olá digite um número natural\npara que seja somado do 1 até o número informado:')
console.log('');

let numero = Number(ler());

let result = somanaurais(numero);

console.log(`A somas deu o seguinte resultado ${result}`);

