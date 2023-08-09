import { totalCompra } from './totalCompra.js'

import prompt from 'prompt-sync'
let ler = prompt();

console.log('||Vamos fazer as contas da suas compras||');

console.log('Digite o total da sua compra:');
let total = Number(ler());

console.log('Digite valor do seu cupom em %:');
let cupom = Number(ler());

let vlFinal = totalCompra (total, cupom);

console.log (`O total da sua compra com desconto é de ${vlFinal}`);























