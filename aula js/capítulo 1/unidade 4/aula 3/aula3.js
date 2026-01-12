// =====================================================
// Encapsulamento, Propriedades Privadas, Getters e Setters
// =====================================================



// ---------------------------------------------
// EXEMPLO 1 - Classe SEM encapsulamento (problema)
// ---------------------------------------------

class JogadorSemEncapsulamento {
    constructor(nome, vida) {
        this.nome = nome;
        this.vida = vida;
    }
}

let jogadorBugado = new JogadorSemEncapsulamento("Carlos", 100);

// Acesso direto gera um estado inválido
jogadorBugado.vida = -500;
console.log("Vida do jogador (inválida):", jogadorBugado.vida);



// ---------------------------------------------
// EXEMPLO 2 - Classe COM encapsulamento
// ---------------------------------------------

class Jogador {

    // Propriedade privada
    #vida;

    constructor(nome, vidaInicial) {
        this.nome = nome;

        // Garantindo um valor inicial válido
        if (vidaInicial < 0) {
            this.#vida = 0;
        } else {
            this.#vida = vidaInicial;
        }
    }

    // Getter - permite apenas LEITURA
    get vida() {
        return this.#vida;
    }

    // Setter - controla a MODIFICAÇÃO
    set vida(valor) {
        if (valor < 0) {
            console.log("Vida não pode ser negativa.");
            return;
        }
        this.#vida = valor;
    }

    // Método que causa dano
    receberDano(dano) {
        if (dano < 0) {
            console.log("Dano inválido.");
            return;
        }

        this.#vida -= dano;

        if (this.#vida <= 0) {
            this.#vida = 0;
            console.log(this.nome + " foi derrotado.");
        } else {
            console.log(this.nome + " agora tem " + this.#vida + " de vida.");
        }
    }

    // Método que cura
    curar(valor) {
        if (valor <= 0) {
            console.log("Valor de cura inválido.");
            return;
        }

        this.#vida += valor;
        console.log(this.nome + " foi curado. Vida atual:", this.#vida);
    }
}



// ---------------------------------------------
// EXEMPLO 3 - Usando getters e setters
// ---------------------------------------------

let jogador1 = new Jogador("Guerreiro", 100);

// Acesso controlado via getter
console.log("Vida inicial:", jogador1.vida);

// Tentativa de valor inválido
jogador1.vida = -50;

// Alteração válida
jogador1.vida = 80;
console.log("Vida após alteração:", jogador1.vida);



// ---------------------------------------------
// EXEMPLO 4 - Usando métodos encapsulados
// ---------------------------------------------

jogador1.receberDano(30);
jogador1.curar(20);
jogador1.receberDano(200);



// ---------------------------------------------
// CONCLUSÃO DA AULA (console)
// ---------------------------------------------

console.log("\nNesta aula você aprendeu:");
console.log("- O que é encapsulamento");
console.log("- Por que propriedades privadas são importantes");
console.log("- Como usar getters e setters");
console.log("- Como proteger dados internos");
console.log("- Como escrever código mais seguro e profissional");
