// Criação do objeto carro
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2021,
    cor: "Prata"
};

// Iteração sobre as propriedades do objeto usando for...in
for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}
