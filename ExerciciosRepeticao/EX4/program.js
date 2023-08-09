import prompt from 'prompt-sync'
import { hifen } from './fuction.js'
const ler = prompt()

console.log('Digite qualquer coisa para ser dividida com hífen:')
var text = ler()

let x = hifen(text)

console.log(x)