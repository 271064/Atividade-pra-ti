// Objeto representando o carrinho
const carrinho = {
    itens: [
        { nome: "Camisa", quantidade: 2, precoUnitario: 50 },
        { nome: "Calça", quantidade: 1, precoUnitario: 80 },
        { nome: "Tênis", quantidade: 1, precoUnitario: 120 },
        { nome: "Cinto", quantidade: 3, precoUnitario: 20 }
    ]
};

// Variável para armazenar o valor total do carrinho
let valorTotal = 0;

// Usando forEach para calcular o valor total do carrinho
carrinho.itens.forEach(item => {
    valorTotal += item.quantidade * item.precoUnitario;
});

// Exibindo o valor total do carrinho
console.log(`Valor total do carrinho: R$ ${valorTotal.toFixed(2)}`);
