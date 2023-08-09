import { media } from './media.js';

import prompt from 'prompt-sync'
let ler = prompt();

console.log ('Digite a primera nota:');
let nota1 = Number(ler());

console.log ('Digite a segunda nota:');
let nota2 = Number(ler());

console.log ('Digite a terceira nota:');
let nota3 = Number(ler());

let calcMedia = media(nota1, nota2, nota3) .toFixed(1);

console.log (`A média de ${nota1}, ${nota2} e ${nota3} é de ||${calcMedia}||`);