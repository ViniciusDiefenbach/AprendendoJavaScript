var carro = {
    marca: "Nissan",
    modelo: "Nismo",
    placa: "XPT0123",
    cor: "Branco e vermelho",
}

console.log(carro)

//Deletar um valor do objeto
delete carro.cor

console.log(carro)

//Adicionar um valor no objeto
carro.kmPercorridos = 100000

console.log(carro)

//Instanciação de objetos de forma diferente
var casa = new Object()
casa.cor = "Amarela"
casa.largura = 10

console.log(casa)