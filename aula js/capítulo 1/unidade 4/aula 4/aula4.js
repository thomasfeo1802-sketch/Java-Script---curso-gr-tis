// =====================================================
// Unidade 4 - Aula 4
// Herança, extends e super
// Código de exemplo (console)
// =====================================================



// ---------------------------------------------
// CLASSE PAI (Superclasse)
// ---------------------------------------------

class Personagem {

    constructor(nome, vida) {
        this.nome = nome;
        this.vida = vida;
    }

    atacar() {
        console.log(this.nome + " atacou de forma básica.");
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
// CLASSE FILHA - Guerreiro
// ---------------------------------------------

class Guerreiro extends Personagem {

    constructor(nome, vida, ataque) {

        // Chama o constructor da classe pai
        super(nome, vida);

        this.ataque = ataque;
    }

    // Sobrescrevendo o método atacar
    atacar() {
        console.log(this.nome + " atacou com espada causando " + this.ataque + " de dano.");
    }
}



// ---------------------------------------------
// CLASSE FILHA - Mago
// ---------------------------------------------

class Mago extends Personagem {

    constructor(nome, vida, mana) {

        // Chama o constructor da classe pai
        super(nome, vida);

        this.mana = mana;
    }

    // Sobrescrevendo o método atacar
    atacar() {
        if (this.mana >= 10) {
            this.mana -= 10;
            console.log(this.nome + " lançou uma magia. Mana restante: " + this.mana);
        } else {
            console.log(this.nome + " não tem mana suficiente.");
        }
    }
}



// ---------------------------------------------
// USANDO AS CLASSES
// ---------------------------------------------

let guerreiro = new Guerreiro("Arthur", 120, 25);
let mago = new Mago("Merlin", 80, 50);

// Cada objeto usa sua própria versão do método atacar
guerreiro.atacar();
mago.atacar();

// Recebendo dano
guerreiro.receberDano(30);
mago.receberDano(40);

// Mais ataques
mago.atacar();
mago.atacar();
mago.atacar();



// ---------------------------------------------
// CONCLUSÃO DA AULA (console)
// ---------------------------------------------

console.log("\nNesta aula você aprendeu:");
console.log("- O que é herança");
console.log("- Como usar extends");
console.log("- Como usar super()");
console.log("- Como sobrescrever métodos");
console.log("- Como criar hierarquia de classes");
