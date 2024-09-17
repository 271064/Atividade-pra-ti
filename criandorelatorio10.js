// Array de objetos representando vendas
const vendas = [
    { produto: "Celular", quantidade: 2, valor: 1000 },
    { produto: "Notebook", quantidade: 1, valor: 3000 },
    { produto: "Tablet", quantidade: 3, valor: 1500 },
    { produto: "Fone de Ouvido", quantidade: 5, valor: 200 }
];

// Variável para armazenar o valor total das vendas
let valorTotalVendas = 0;

// Usando forEach para calcular o valor total de vendas
vendas.forEach(venda => {
    valorTotalVendas += venda.quantidade * venda.valor;
});

// Exibindo o valor total das vendas
console.log(`Valor total das vendas: R$ ${valorTotalVendas.toFixed(2)}`);
