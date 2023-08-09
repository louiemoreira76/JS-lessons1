

export function calcMedia (nota1, nota2, nota3) {
    let x = (nota1 + nota2 + nota3) / 3;

    let passou = x >= 5;

    return passou;
}