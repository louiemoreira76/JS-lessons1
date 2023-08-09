export function somanaurais (n) {
    let voltas = 1;
    let somar = 0;

    while(voltas <= n){
        somar = somar + voltas;
        voltas++;
    }
    return somar
}