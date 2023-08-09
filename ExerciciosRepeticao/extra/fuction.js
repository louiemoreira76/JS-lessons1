export function IMCf (x,y){

    let resultado = (x * 2)/y
    if(resultado <= 16.9){
        return 'Muito abaixo do peso'
    }

    else if(resultado > 16.9 && resultado < 18.5 ){
        return 'Abaixo do peso'
    }

    else if(resultado >= 18.5 && resultado < 25){
        return 'Peso normal'
    }

    else if(resultado >= 25 && resultado < 30){
        return 'Acima do peso'
    }

    else if(resultado >= 30 && resultado < 35){
        return 'Obesidade grau I'
    }

    else if(resultado >= 35 && resultado < 41){
        return 'Obesidade grau II'
    }

    else if(resultado > 40){
        return 'Obesidade grau III'
    }
}

export function IMC (a,b){
    const mult = (a * a)
    let resultado = b / mult 
    var pesado = true
    var magrao = false

    if(resultado <= 24.9){
        return `Seu IMC é ${resultado}\n Você esta acima do peso ideal? ${magrao}`
    }
    else{
        return `Seu IMC é ${resultado}\n Você esta acima do peso ideal? ${pesado}`
    }
}