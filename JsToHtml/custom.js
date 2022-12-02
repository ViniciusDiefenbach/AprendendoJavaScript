// Document significa qualquer página da web carregada pelo navegador
// A propriedade innerHtml define ou obtém a propriedade HTML
document.getElementById("nome-usuario").innerHTML = "<p style='color: orange'>Vinicius</p>"

document.getElementsByClassName("turma-usuario")[1].innerHTML = "Curso de Programação" // Aqueles colchetes são usados para identificar um array, pois existem mais de um elemento dentro de uma classe

document.querySelector(".modulo").innerHTML = "<p style='color: orange'>Modulo de JavaScript</p>"

var testeValidacao = document.querySelector("#teste-validacao") // Caso não tenha o valor na página, vai retornar um objeto nulo
if (testeValidacao) {
    testeValidacao.innerHTML = "<p style='color: orange'>Seletor encontrado</p>"
}

//Trabalhando com formulários

let nomeUsuario = document.getElementsByName("form_nome")
console.log(nomeUsuario)

document.getElementById("valor_nome").innerHTML = nomeUsuario[0].defaultValue

function receberTurma() {
    let formTurma = document.getElementsByName("form_turma")
    document.getElementById("valor_turma").innerHTML = formTurma[0].value
}