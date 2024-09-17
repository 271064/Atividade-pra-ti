// Array de objetos representando produtos
const produtos = [
    { nome: "Celular", preco: 1000, desconto: 0.1 }, // 10% de desconto
    { nome: "Notebook", preco: 3000, desconto: 0.1 },
    { nome: "Tablet", preco: 1500, desconto: 0.1 },
    { nome: "Fone de Ouvido", preco: 200, desconto: 0.1 }
];

// Função para aplicar o desconto e exibir o novo preço
produtos.forEach(produto => {
    const desconto = produto.preco * produto.desconto;
    const novoPreco = produto.preco - desconto;
    console.log(`Produto: ${produto.nome}, Novo Preço: R$ ${novoPreco.toFixed(2)}`);
});
