export function fatoraracao (n){
    let fatorial = 1;

    for ( let cont = n; cont > 0; cont--){
        fatorial = fatorial * cont
    }
    return fatorial
}
