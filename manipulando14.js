// Objeto representando a empresa
const empresa = {
    departamentos: [
        {
            nome: "Recursos Humanos",
            funcionarios: [
                { nome: "Ana" },
                { nome: "Carlos" }
            ]
        },
        {
            nome: "Desenvolvimento",
            funcionarios: [
                { nome: "João" },
                { nome: "Maria" }
            ]
        },
        {
            nome: "Marketing",
            funcionarios: [
                { nome: "Fernanda" },
                { nome: "Pedro" }
            ]
        }
    ]
};

// Iterando sobre os departamentos usando for...in
for (let index in empresa.departamentos) {
    const departamento = empresa.departamentos[index];
    console.log(`Departamento: ${departamento.nome}`);
    
    // Iterando sobre os funcionários usando for...of
    for (let funcionario of departamento.funcionarios) {
        console.log(`- Funcionário: ${funcionario.nome}`);
    }
}
