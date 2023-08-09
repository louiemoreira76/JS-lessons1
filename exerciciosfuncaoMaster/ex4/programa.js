import {corPrimaria} from './corPrimaria.js'

import prompt  from 'prompt-sync';
let ler = prompt();



console.log('||PROGRAMA DAS COPRES PRIMÁRIAS||');

console.log('\nDigite uma cor:');
let cor = ler();


let verificarCorPrimaria = corPrimaria(cor);


console.log(`\nA cor ${cor} é primária? ||${verificarCorPrimaria}||`);
