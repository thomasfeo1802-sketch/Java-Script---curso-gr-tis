// =====================================================
// Introdução à Programação Orientada a Objetos (POO)
// =====================================================



// ---------------------------------------------
// EXEMPLO 1 - Código SEM POO (revisão rápida)
// ---------------------------------------------

let nome = "Carlos";
let idade = 20;

function apresentarSemPOO() {
    console.log("Nome:", nome);
    console.log("Idade:", idade);
}

apresentarSemPOO();



// ---------------------------------------------
// EXEMPLO 2 - Código COM OBJETO (POO básica)
// ---------------------------------------------

// Criamos um objeto que representa uma pessoa
let pessoa = {

    // Propriedades (características do objeto)
    nome: "Carlos",
    idade: 20,
    vivo: true,

    // Método (ação que o objeto pode executar)
    apresentar: function () {
        console.log("Nome:", this.nome);
        console.log("Idade:", this.idade);
        console.log("Está vivo?", this.vivo);
    }
};

// Chamando o método do objeto
pessoa.apresentar();



// ---------------------------------------------
// EXEMPLO 3 - Alterando propriedades do objeto
// ---------------------------------------------

// Modificando valores do objeto
pessoa.idade = 21;
pessoa.vivo = false;

// Chamando novamente o método para ver as mudanças
pessoa.apresentar();



// ---------------------------------------------
// EXEMPLO 4 - Outro objeto com a mesma estrutura
// ---------------------------------------------

let pessoa2 = {
    nome: "Ana",
    idade: 18,
    vivo: true,

    apresentar: function () {
        console.log("Nome:", this.nome);
        console.log("Idade:", this.idade);
        console.log("Está vivo?", this.vivo);
    }
};

pessoa2.apresentar();



// ---------------------------------------------
// CONCLUSÃO DA AULA
// ---------------------------------------------

console.log("\nNesta aula você aprendeu:");
console.log("- O que é um objeto");
console.log("- O que são propriedades");
console.log("- O que são métodos");
console.log("- Como usar o 'this'");
console.log("- Por que a POO organiza melhor o código");
