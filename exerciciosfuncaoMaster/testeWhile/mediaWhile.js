

export function mediaWhile (nota1, nota2, nota3) {
    let i;

    let calcMedia = (nota1 + nota2 + nota3) / 3;

    let msg;

    while (i <= 5) {
         

        if (calcMedia >= 7 ) {
            msg = 'O aluno foi aprovado!!!';
        
        }  else if (calcMedia > 5 && calcMedia < 7) {
    
            msg = 'O aluno está de recuperação!';
    
        } else {
    
            msg = 'Aluno reprovado!';
    
        }

        i++;
    }

    return msg;
}