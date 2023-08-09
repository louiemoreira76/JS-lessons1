import prompt from 'prompt-sync';
import { IMCf } from './fuction.js';
const ler = prompt();

console.log('Esse progrma vai determinar com base na sua altura e peso seu IMC!\n')

console.log('Digite a seguir a sua altura:\n')
var altura = Number(ler())

console.log('Digite a seguir seu peso:\n')
var peso = Number(ler())


let result = IMCf(altura,peso)

console.log(`A conclusão do programa foi que você esta ${result}!`)
