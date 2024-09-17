// Objeto de exemplo produto
const produto = {
    nome: "Camiseta",
    preco: 50,
    estoque: 100,
    desconto: 5,
    peso: 0.3
};

// Função para filtrar propriedades com valor maior que o valor especificado
function filtrarPropriedadesPorValor(obj, valorEspecifico) {
    const resultado = {};

    for (let propriedade in obj) {
        if (obj[propriedade] > valorEspecifico) {
            resultado[propriedade] = obj[propriedade];
        }
    }

    return resultado;
}

// Exemplo de uso: filtrando propriedades com valor maior que 10
const produtoFiltrado = filtrarPropriedadesPorValor(produto, 10);
console.log(produtoFiltrado);
