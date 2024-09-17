// Criação do objeto livro
const livro = {
    titulo: "O Morro dos Ventos Uivantes",
    autor: "Emily Brontë",
    anoPublicacao: 1847,
    genero: "Romance"
};

// Verificação se a propriedade 'editora' existe
let temEditora = false;

for (let propriedade in livro) {
    if (propriedade === "editora") {
        temEditora = true;
        break;
    }
}

// Se a propriedade 'editora' não existir, adiciona ao objeto
if (!temEditora) {
    livro.editora = "Desconhecida"; // Pode-se adicionar qualquer valor desejado
}

// Exibe o objeto com a nova propriedade, se adicionada
console.log(livro);
