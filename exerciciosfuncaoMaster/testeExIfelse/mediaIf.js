

export function mediaIf (nota1, nota2, nota3) {
    let calcMedia = (nota1 + nota2 + nota3) / 3;

    let msg;

    if (calcMedia >= 7 ) {
        msg = 'O aluno foi aprovado!!!';
    
    }  else if (calcMedia > 5 && calcMedia < 7) {

        msg = 'O aluno está de recuperação!';

    } else {

        msg = 'Aluno reprovado!';

    }

    return msg;
}