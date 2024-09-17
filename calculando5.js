// Array de objetos representando alunos
const alunos = [
    { nome: "Lucas", nota1: 8, nota2: 7 },
    { nome: "Fernanda", nota1: 9, nota2: 10 },
    { nome: "João", nota1: 6, nota2: 5 },
    { nome: "Mariana", nota1: 7, nota2: 9 }
];

// Usando for...of para calcular e exibir a média de cada aluno
for (let aluno of alunos) {
    const media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`Nome: ${aluno.nome}, Média: ${media}`);
}
