import {mediaWhile} from './mediaWhile.js'

import prompt  from 'prompt-sync';
let ler = prompt();



console.log('||PROGRAMA DA MÉDIA PARA PASSAR DE ANO||');

console.log ('\nDigite a primera nota:');
let nota1 = Number(ler());

console.log ('\nDigite a segunda nota:');
let nota2 = Number(ler());

console.log ('\nDigite a terceira nota:');
let nota3 = Number(ler());

let mediaPassou = mediaWhile(nota1, nota2, nota3);

console.log (`\nO aluno passou de ano? || ${mediaPassou} ||`);

console.log('');