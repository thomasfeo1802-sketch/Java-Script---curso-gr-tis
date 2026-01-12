const limpar = console.clear;
limpar

// ==========================
// DECLARAÇÃO DE VARIÁVEIS
// ==========================

// Variável do tipo number (número inteiro)
let vida = 100;

// Variável do tipo number (número decimal)
let fome = 10.5;

// Variável do tipo number (número decimal com mais casas)
let ataque = 10.555;

// Variável do tipo string (texto)
// Textos em JavaScript devem estar entre aspas (" " ou ' ')
let nome = "fulano";

// Variável do tipo boolean (valor lógico: true ou false)
let vivo = false;


// ==========================
// SAÍDA DE DADOS NO CONSOLE
// ==========================

// Exibe um texto simples no console
console.log("Olá, mundo!");

// O método typeof() serve para verificar o tipo de dado de uma variável
console.log(typeof vida);    // retorna: number
console.log(typeof fome);    // retorna: number
console.log(typeof ataque);  // retorna: number
console.log(typeof vivo);    // retorna: boolean

// Exibe apenas o valor armazenado na variável fome
console.log(fome); // saída: 10.5

// Concatenação:
// É quando juntamos um texto com uma variável usando o sinal +
console.log("Sua vida está em " + vida);

// Neste caso, o número 100 está fixo no texto (não é uma variável)
console.log("Sua vida está em " + 100);


/*
==========================
TIPOS DE DADOS EM JAVASCRIPT
==========================

boolean → true ou false
number  → números (inteiros ou decimais)
string  → textos

*/
