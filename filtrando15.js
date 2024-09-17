// Array de objetos representando transações
const transacoes = [
    { tipo: "entrada", valor: 500 },
    { tipo: "saída", valor: 200 },
    { tipo: "entrada", valor: 300 },
    { tipo: "saída", valor: 150 },
    { tipo: "entrada", valor: 100 }
];

// Variável para armazenar o saldo final
let saldoFinal = 0;

// Usando forEach para calcular o saldo final
transacoes.forEach(transacao => {
    if (transacao.tipo === "entrada") {
        saldoFinal += transacao.valor;
    } else if (transacao.tipo === "saída") {
        saldoFinal -= transacao.valor;
    }
});

// Exibindo o saldo final
console.log(`Saldo final: R$ ${saldoFinal.toFixed(2)}`);
