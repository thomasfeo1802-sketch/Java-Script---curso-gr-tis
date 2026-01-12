// ======================================
// OPERADORES ARITMÉTICOS
// ======================================

// Variáveis numéricas
let a = 10;
let b = 3;

// Soma
let soma = a + b;
console.log("Soma:", soma); // 13

// Subtração
let subtracao = a - b;
console.log("Subtração:", subtracao); // 7

// Multiplicação
let multiplicacao = a * b;
console.log("Multiplicação:", multiplicacao); // 30

// Divisão
let divisao = a / b;
console.log("Divisão:", divisao); // 3.333...

// Resto da divisão
let resto = a % b;
console.log("Resto da divisão:", resto); // 1


// ======================================
// OPERADORES DE COMPARAÇÃO
// ======================================

// Esses operadores retornam true ou false

console.log(a == 10);  // true  → verifica se é igual
console.log(a != 5);   // true  → verifica se é diferente
console.log(a > b);    // true  → maior que
console.log(a < b);    // false → menor que
console.log(a >= 10);  // true  → maior ou igual
console.log(a <= 9);   // false → menor ou igual


// ======================================
// OPERADORES LÓGICOS
// ======================================

// Variáveis booleanas
let temVida = true;
let temEnergia = false;

// AND (&&)
// Só retorna true se TODAS as condições forem verdadeiras
if (temVida && temEnergia) {
    console.log("Pode atacar");
} else {
    console.log("Não pode atacar");
}

// OR (||)
// Retorna true se PELO MENOS UMA condição for verdadeira
if (temVida || temEnergia) {
    console.log("Ainda está ativo");
}

// NOT (!)
// Inverte o valor lógico
if (!temEnergia) {
    console.log("Energia esgotada");
}


// ======================================
// OPERADORES DE ATRIBUIÇÃO
// ======================================

let pontos = 5;

// Soma e atribui
pontos += 1;
console.log(pontos); // 6

// Subtrai e atribui
pontos -= 2;
console.log(pontos); // 4

// Multiplica e atribui
pontos *= 2;
console.log(pontos); // 8

// Divide e atribui
pontos /= 2;
console.log(pontos); // 4

// Resto da divisão e atribui
pontos %= 3;
console.log(pontos); // 1


// ======================================
// ESTRUTURAS CONDICIONAIS (IF / ELSE)
// ======================================

// Variável de texto
let nome = "carlinhos";

// Estrutura condicional básica
if (nome == "carlinhos") {
    // Executa este código se a condição for verdadeira
    console.log("Nome correto");
} else {
    // Executa este código se a condição for falsa
    console.log("Nome incorreto");
}
