export function hifen (texto){
    let trasao = '-'

    for(let cont = 0; cont < texto.length; cont++){
        let letra = texto.charAt(cont);
        trasao = letra + trasao;
    }
    return trasao
}