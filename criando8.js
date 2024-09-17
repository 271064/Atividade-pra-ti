// Array de objetos representando filmes
const filmes = [
    { titulo: "O Senhor dos Anéis", diretor: "Peter Jackson", anoLancamento: 2001 },
    { titulo: "Matrix", diretor: "Lana Wachowski, Lilly Wachowski", anoLancamento: 1999 },
    { titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010 },
    { titulo: "Vingadores: Ultimato", diretor: "Anthony Russo, Joe Russo", anoLancamento: 2019 }
];

// Novo array para armazenar os títulos dos filmes
const titulosFilmes = [];

// Usando forEach para adicionar apenas os títulos ao novo array
filmes.forEach(filme => {
    titulosFilmes.push(filme.titulo);
});

// Exibindo o array contendo apenas os títulos
console.log(titulosFilmes);
