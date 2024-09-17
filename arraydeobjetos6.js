// Array de objetos representando funcionários
const funcionarios = [
    { nome: "Carlos", cargo: "Gerente", salario: 8000 },
    { nome: "Ana", cargo: "Analista", salario: 5000 },
    { nome: "Pedro", cargo: "Desenvolvedor", salario: 6000 },
    { nome: "Fernanda", cargo: "Designer", salario: 4000 }
];

// Valor específico de salário para filtrar
const salarioMinimo = 5500;

// Usando for...of para filtrar e exibir os funcionários com salário maior que o valor específico
for (let funcionario of funcionarios) {
    if (funcionario.salario > salarioMinimo) {
        console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: ${funcionario.salario}`);
    }
}
