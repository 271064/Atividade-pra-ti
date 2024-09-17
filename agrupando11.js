// Array de objetos representando pedidos
const pedidos = [
    { cliente: "Ana", produto: "Celular", quantidade: 2 },
    { cliente: "Carlos", produto: "Notebook", quantidade: 1 },
    { cliente: "Ana", produto: "Tablet", quantidade: 3 },
    { cliente: "Carlos", produto: "Fone de Ouvido", quantidade: 5 },
    { cliente: "Ana", produto: "Notebook", quantidade: 1 }
];

// Objeto para armazenar a quantidade total de produtos por cliente
const quantidadePorCliente = {};

// Usando forEach para agregar a quantidade total de produtos por cliente
pedidos.forEach(pedido => {
    // Se o cliente ainda não estiver no objeto, inicialize a quantidade como 0
    if (!quantidadePorCliente[pedido.cliente]) {
        quantidadePorCliente[pedido.cliente] = 0;
    }
    // Adiciona a quantidade do pedido ao total do cliente
    quantidadePorCliente[pedido.cliente] += pedido.quantidade;
});

// Exibindo o objeto com a quantidade total de produtos por cliente
console.log(quantidadePorCliente);
