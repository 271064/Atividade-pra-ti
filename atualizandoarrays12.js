// Array de objetos representando o estoque
const estoque = [
    { produto: "Celular", quantidade: 5, minimo: 10 },
    { produto: "Notebook", quantidade: 15, minimo: 10 },
    { produto: "Tablet", quantidade: 8, minimo: 12 },
    { produto: "Fone de Ouvido", quantidade: 3, minimo: 5 }
];

// Usando forEach para atualizar as quantidades abaixo do mínimo
estoque.forEach(item => {
    if (item.quantidade < item.minimo) {
        item.quantidade *= 2; // Duplica a quantidade
    }
});

// Exibindo o estoque atualizado
console.log(estoque);
