// Array de objetos representando clientes
const clientes = [
    { nome: "Ana", idade: 28, cidade: "São Paulo" },
    { nome: "Carlos", idade: 35, cidade: "Rio de Janeiro" },
    { nome: "João", idade: 40, cidade: "Curitiba" },
    { nome: "Fernanda", idade: 25, cidade: "Belo Horizonte" }
];

// Variável para armazenar a contagem de clientes com mais de 30 anos
let contagemClientesAcima30 = 0;

// Usando forEach para contar clientes com idade maior que 30
clientes.forEach(cliente => {
    if (cliente.idade > 30) {
        contagemClientesAcima30++;
    }
});

// Exibindo o número de clientes com mais de 30 anos
console.log(`Número de clientes com mais de 30 anos: ${contagemClientesAcima30}`);
