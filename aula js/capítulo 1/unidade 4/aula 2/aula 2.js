// =====================================================
// Unidade 4 - Aula 2
// Classes, Constructor e Instâncias
// Exemplo executado no console
// =====================================================



// ---------------------------------------------
// EXEMPLO 1 - Criando uma classe simples
// ---------------------------------------------

// A classe funciona como um molde para criar objetos
class Pessoa {

    // O constructor é chamado automaticamente
    // quando um novo objeto é criado
    constructor(nome, idade, vivo) {
        this.nome = nome;   // propriedade nome
        this.idade = idade; // propriedade idade
        this.vivo = vivo;   // propriedade vivo
    }

    // Método da classe
    apresentar() {
        console.log("Nome:", this.nome);
        console.log("Idade:", this.idade);
        console.log("Está vivo?", this.vivo);
    }
}



// ---------------------------------------------
// EXEMPLO 2 - Criando instâncias da classe
// ---------------------------------------------

// Criando objetos a partir da classe Pessoa
let pessoa1 = new Pessoa("Carlos", 20, true);
let pessoa2 = new Pessoa("Ana", 18, true);
let pessoa3 = new Pessoa("João", 30, false);

// Chamando métodos dos objetos
pessoa1.apresentar();
console.log("------------------");
pessoa2.apresentar();
console.log("------------------");
pessoa3.apresentar();



// ---------------------------------------------
// EXEMPLO 3 - Alterando propriedades do objeto
// ---------------------------------------------

// Modificando valores após a criação
pessoa1.idade = 21;
pessoa1.vivo = false;

// Exibindo novamente
console.log("\nApós alterações:");
pessoa1.apresentar();



// ---------------------------------------------
// EXEMPLO 4 - Classe com mais de um método
// ---------------------------------------------

class Jogador {

    constructor(nome, vida, ataque) {
        this.nome = nome;
        this.vida = vida;
        this.ataque = ataque;
    }

    atacar() {
        console.log(this.nome + " atacou causando " + this.ataque + " de dano.");
    }

    receberDano(dano) {
        this.vida -= dano;

        if (this.vida <= 0) {
            this.vida = 0;
            console.log(this.nome + " foi derrotado.");
        } else {
            console.log(this.nome + " agora tem " + this.vida + " de vida.");
        }
    }
}



// ---------------------------------------------
// EXEMPLO 5 - Usando a classe Jogador
// ---------------------------------------------

let jogador1 = new Jogador("Guerreiro", 100, 20);
let jogador2 = new Jogador("Mago", 80, 30);

jogador1.atacar();
jogador2.receberDano(jogador1.ataque);

jogador2.atacar();
jogador1.receberDano(jogador2.ataque);



// ---------------------------------------------
// CONCLUSÃO DA AULA
// ---------------------------------------------

console.log("\nNesta aula você aprendeu:");
console.log("- O que é uma classe");
console.log("- Para que serve o constructor");
console.log("- O que são instâncias");
console.log("- Como criar e usar métodos");
console.log("- Como a POO organiza sistemas reais");
