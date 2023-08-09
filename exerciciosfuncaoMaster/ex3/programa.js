import {febre} from './febre.js'

import prompt  from 'prompt-sync';
let ler = prompt();



console.log('||PROGRAMA DA VERIFICAÇÃO DE FEBRE||');

console.log('\nDigite a temperatura do paciente:');
let temperatura = Number(ler());


let verificarFebre = febre(temperatura);


console.log(`\nO paciente está com febre? ||${verificarFebre}||`);
