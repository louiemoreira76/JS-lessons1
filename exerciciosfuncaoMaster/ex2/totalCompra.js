

export function totalCompra (total, cupom) {
    let x = (cupom * total) / 100;
    let totalCalc = total - x; 
    return totalCalc;
}