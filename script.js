const campo1 = document.querySelector("#nota1")
const campo2 = document.querySelector("#nota2")
const campo3 = document.querySelector("#nota3")
const retornoFuncao = document.querySelector("#retorno_funcao")
const resultadoMedia = document.querySelector("#resultado_media")
const situacaoAluno = document.querySelector("#situacao_aluno")

function calcularMedia() {
    if (campo1.value == '') {
        retornoFuncao.innerHTML = "Não foi inserido nenhum valor na nota 1, por isso não foi possível fazer a conta!";
        campo1.focus()
    } else {
        if (campo2.value == '') {
            retornoFuncao.innerHTML = "Não foi inserido nenhum valor na nota 2, por isso não foi possível fazer a conta!"
            campo2.focus()
        } else {
            if (campo3.value == '') {
                retornoFuncao.innerHTML = "Não foi inserido nenhum valor na nota 3, por isso não foi possível fazer a conta!"
                campo3.focus()
            } else {
                retornoFuncao.innerHTML = ""

                let valor1 = Number(campo1.value)
                let valor2 = Number(campo2.value)
                let valor3 = Number(campo3.value)

                let media = (valor1 + valor2 + valor3) / 3

                resultadoMedia.innerHTML = `O resultado da média da notas é de ${media.toFixed(2)}`

                classificarAluno(media);
            }
        }
    }


}

function classificarAluno(notaMedia) {
    if (notaMedia >=6){
        situacaoAluno.innerHTML = "O aluno foi aprovado!"
    }
    else if (notaMedia < 6 && notaMedia > 3){
        situacaoAluno.innerHTML = "O aluno está de recuperação"
    }
    else {
        situacaoAluno.innerHTML = "O aluno foi reprovado";
    }

}
