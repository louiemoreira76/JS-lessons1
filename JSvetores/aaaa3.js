import prompt from 'prompt-sync';
const ler = prompt()

console.log('Insira a quantidade que você quer')

let numeros = Number(ler());
let array = []




for(let cont = 0; cont < numeros; cont++ ){
    console.log('Digite a nota' + (cont+1))
    array[cont] = Number(ler())
}


console.log(array)